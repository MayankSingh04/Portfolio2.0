output "website_endpoint" {
  description = "S3 website endpoint"
  value       = aws_s3_bucket_website_configuration.portfolio_bucket.website_endpoint
}

output "cloudfront_domain" {
  description = "CloudFront distribution domain name"
  value       = aws_cloudfront_distribution.portfolio_distribution.domain_name
}

output "bucket_name" {
  description = "S3 bucket name"
  value       = aws_s3_bucket.portfolio_bucket.bucket
}

output "domain_name" {
  description = "Domain name"
  value       = var.domain_name
}

output "route53_nameservers" {
  description = "Route53 nameservers"
  value       = aws_route53_zone.portfolio_zone.name_servers
}

output "certificate_arn" {
  description = "ACM certificate ARN"
  value       = aws_acm_certificate.portfolio_cert.arn
}
