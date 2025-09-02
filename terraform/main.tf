terraform {
  required_version = ">= 1.0"
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

provider "aws" {
  region = var.aws_region
}

# S3 bucket for static website hosting
resource "aws_s3_bucket" "portfolio_bucket" {
  bucket = var.bucket_name

  tags = {
    Name        = "Portfolio Website"
    Environment = "Production"
    Project     = "Portfolio"
  }
}

# S3 bucket public access block
resource "aws_s3_bucket_public_access_block" "portfolio_bucket" {
  bucket = aws_s3_bucket.portfolio_bucket.id

  block_public_acls       = false
  block_public_policy     = false
  ignore_public_acls      = false
  restrict_public_buckets = false
}

# S3 bucket ownership controls
resource "aws_s3_bucket_ownership_controls" "portfolio_bucket" {
  bucket = aws_s3_bucket.portfolio_bucket.id

  rule {
    object_ownership = "BucketOwnerPreferred"
  }
}

# S3 bucket ACL
resource "aws_s3_bucket_acl" "portfolio_bucket" {
  depends_on = [
    aws_s3_bucket_public_access_block.portfolio_bucket,
    aws_s3_bucket_ownership_controls.portfolio_bucket,
  ]

  bucket = aws_s3_bucket.portfolio_bucket.id
  acl    = "public-read"
}

# S3 bucket website configuration
resource "aws_s3_bucket_website_configuration" "portfolio_bucket" {
  bucket = aws_s3_bucket.portfolio_bucket.id

  index_document {
    suffix = "index.html"
  }

  error_document {
    key = "404.html"
  }
}

# S3 bucket policy
resource "aws_s3_bucket_policy" "portfolio_bucket" {
  bucket = aws_s3_bucket.portfolio_bucket.id

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Sid       = "PublicReadGetObject"
        Effect    = "Allow"
        Principal = "*"
        Action    = "s3:GetObject"
        Resource  = "${aws_s3_bucket.portfolio_bucket.arn}/*"
      },
    ]
  })
}

# CloudFront distribution
resource "aws_cloudfront_distribution" "portfolio_distribution" {
  origin {
    domain_name = aws_s3_bucket.portfolio_bucket.bucket_regional_domain_name
    origin_id   = "S3-${aws_s3_bucket.portfolio_bucket.bucket}"

    s3_origin_config {
      origin_access_identity = aws_cloudfront_origin_access_identity.portfolio_oai.cloudfront_access_identity_path
    }
  }

  enabled             = true
  is_ipv6_enabled     = true
  default_root_object = "index.html"
  aliases             = [var.domain_name]

  default_cache_behavior {
    allowed_methods  = ["DELETE", "GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT"]
    cached_methods   = ["GET", "HEAD"]
    target_origin_id = "S3-${aws_s3_bucket.portfolio_bucket.bucket}"

    forwarded_values {
      query_string = false
      cookies {
        forward = "none"
      }
    }

    viewer_protocol_policy = "redirect-to-https"
    min_ttl                = 0
    default_ttl            = 3600
    max_ttl                = 86400
  }

  # Cache behavior for static assets
  ordered_cache_behavior {
    path_pattern     = "/static/*"
    allowed_methods  = ["GET", "HEAD"]
    cached_methods   = ["GET", "HEAD"]
    target_origin_id = "S3-${aws_s3_bucket.portfolio_bucket.bucket}"

    forwarded_values {
      query_string = false
      cookies {
        forward = "none"
      }
    }

    viewer_protocol_policy = "redirect-to-https"
    min_ttl                = 0
    default_ttl            = 86400
    max_ttl                = 31536000
  }

  # Error pages
  custom_error_response {
    error_code         = 404
    response_code      = "200"
    response_page_path = "/index.html"
  }

  custom_error_response {
    error_code         = 403
    response_code      = "200"
    response_page_path = "/index.html"
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  viewer_certificate {
    acm_certificate_arn      = aws_acm_certificate.portfolio_cert.arn
    ssl_support_method       = "sni-only"
    minimum_protocol_version = "TLSv1.2_2021"
  }

  tags = {
    Name        = "Portfolio Distribution"
    Environment = "Production"
    Project     = "Portfolio"
  }
}

# CloudFront origin access identity
resource "aws_cloudfront_origin_access_identity" "portfolio_oai" {
  comment = "OAI for portfolio website"
}

# ACM certificate
resource "aws_acm_certificate" "portfolio_cert" {
  provider          = aws.us-east-1
  domain_name       = var.domain_name
  validation_method = "DNS"

  lifecycle {
    create_before_destroy = true
  }

  tags = {
    Name        = "Portfolio Certificate"
    Environment = "Production"
    Project     = "Portfolio"
  }
}

# Route53 hosted zone
resource "aws_route53_zone" "portfolio_zone" {
  name = var.domain_name

  tags = {
    Name        = "Portfolio Zone"
    Environment = "Production"
    Project     = "Portfolio"
  }
}

# Route53 A record
resource "aws_route53_record" "portfolio_record" {
  zone_id = aws_route53_zone.portfolio_zone.zone_id
  name    = var.domain_name
  type    = "A"

  alias {
    name                   = aws_cloudfront_distribution.portfolio_distribution.domain_name
    zone_id                = aws_cloudfront_distribution.portfolio_distribution.hosted_zone_id
    evaluate_target_health = false
  }
}

# Route53 A record for www subdomain
resource "aws_route53_record" "portfolio_www_record" {
  zone_id = aws_route53_zone.portfolio_zone.zone_id
  name    = "www.${var.domain_name}"
  type    = "A"

  alias {
    name                   = aws_cloudfront_distribution.portfolio_distribution.domain_name
    zone_id                = aws_cloudfront_distribution.portfolio_distribution.hosted_zone_id
    evaluate_target_health = false
  }
}

# Provider for ACM certificate (must be in us-east-1)
provider "aws" {
  alias  = "us-east-1"
  region = "us-east-1"
}
