variable "aws_region" {
  description = "AWS region for resources"
  type        = string
  default     = "us-east-1"
}

variable "bucket_name" {
  description = "Name of the S3 bucket for portfolio hosting"
  type        = string
  default     = "mayank-portfolio-website"
}

variable "domain_name" {
  description = "Domain name for the portfolio website"
  type        = string
  default     = "mayanksinghdhami.dev"
}

variable "environment" {
  description = "Environment name"
  type        = string
  default     = "production"
}

variable "project" {
  description = "Project name"
  type        = string
  default     = "portfolio"
}
