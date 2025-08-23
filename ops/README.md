# 3X Prep Deployment Guide

This document provides deployment instructions for the 3X Prep website.

## Prerequisites

- Node.js 18+ and npm
- Nginx web server
- SSL certificate for HTTPS
- (Optional) PM2 for process management

## Build Steps

### 1. Clone and Install Dependencies

```bash
git clone <repository-url>
cd 3x-prep
npm install
```

### 2. Environment Configuration

Create a `.env.production` file:

```bash
# Optional webhook for lead capture
WEBHOOK_URL=https://your-crm-webhook.com/leads

# Support contact info
SUPPORT_EMAIL=support@3xprep.com
SUPPORT_PHONE=+1-855-3X-PREP1

# Production URL
VITE_SITE_URL=https://3xprep.com
```

### 3. Build for Production

```bash
npm run build
```

This creates a `dist/` directory with optimized static files.

### 4. Deploy Static Files

Copy the built files to your web server:

```bash
# Example: Copy to web server directory
sudo cp -r dist/* /var/www/3xprep/
sudo chown -R www-data:www-data /var/www/3xprep/
```

### 5. Configure Nginx

Copy the provided nginx configuration:

```bash
sudo cp ops/nginx.conf /etc/nginx/sites-available/3xprep
sudo ln -s /etc/nginx/sites-available/3xprep /etc/nginx/sites-enabled/
```

**Important:** Update the SSL certificate paths in the nginx.conf file to match your setup.

### 6. Test and Reload Nginx

```bash
# Test configuration
sudo nginx -t

# Reload nginx
sudo systemctl reload nginx
```

## Alternative: Docker Deployment

### Dockerfile

```dockerfile
# Multi-stage build
FROM node:18-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

# Production stage
FROM nginx:alpine

# Copy built files
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy nginx config
COPY ops/nginx.conf /etc/nginx/conf.d/default.conf

# Expose port
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
```

### Build and Run

```bash
docker build -t 3xprep .
docker run -p 80:80 3xprep
```

## Systemd Service (Optional)

For more advanced deployment with a Node.js backend:

```bash
# /etc/systemd/system/3xprep.service
[Unit]
Description=3X Prep Website
After=network.target

[Service]
Type=simple
User=www-data
WorkingDirectory=/var/www/3xprep
ExecStart=/usr/bin/node server.js
Restart=on-failure
Environment=NODE_ENV=production

[Install]
WantedBy=multi-user.target
```

Enable and start:

```bash
sudo systemctl enable 3xprep
sudo systemctl start 3xprep
```

## Health Check

The site includes a health check endpoint at `/health` that returns:

```json
{
  "status": "ok",
  "timestamp": "2024-01-01T00:00:00.000Z"
}
```

## SSL/TLS Setup

For free SSL certificates, use Let's Encrypt:

```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d 3xprep.com -d www.3xprep.com
```

## Performance Optimization

The build includes:

- ✅ Gzip compression
- ✅ Static asset caching (1 year for immutable assets)
- ✅ HTML no-cache headers for SPA routing
- ✅ Image optimization (WebP support)
- ✅ Code splitting
- ✅ Tree shaking

## Monitoring

### Nginx Logs

```bash
# Access logs
sudo tail -f /var/log/nginx/access.log

# Error logs
sudo tail -f /var/log/nginx/error.log
```

### Uptime Monitoring

Consider setting up monitoring for:
- `/health` endpoint
- Page load speeds
- Core Web Vitals

## Troubleshooting

### Common Issues

1. **404 on routes**: Ensure nginx SPA fallback is configured correctly
2. **Assets not loading**: Check file permissions and nginx asset caching rules
3. **HTTPS redirect loops**: Verify SSL configuration and redirect rules

### Log Locations

- Nginx: `/var/log/nginx/`
- System: `journalctl -u nginx`

## Lead Capture Setup

The site includes a lead capture API at `/api/leads`. To enable:

1. Set up a webhook URL in environment variables
2. Configure your CRM to receive POST requests
3. Test the form submissions

### Example Webhook Payload

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+1234567890",
  "city": "San Diego",
  "test": "SAT",
  "mode": "consultation",
  "timestamp": "2024-01-01T00:00:00.000Z",
  "id": "lead_1234567890_abcdef123"
}
```

## Security Considerations

- ✅ HTTPS enforced
- ✅ Security headers configured
- ✅ Input validation on forms
- ✅ No sensitive data in client-side code
- ✅ CORS properly configured

## Support

For deployment issues, contact the development team or refer to the project documentation.