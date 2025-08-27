# ── Build stage ────────────────────────────────────────────────────────────────
FROM node:20-alpine AS builder
WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
# Pass API base at build time (or set via .env.local before build)
ARG VITE_API_BASE
ENV VITE_API_BASE=${VITE_API_BASE}

RUN npm run build

# ── Serve stage ────────────────────────────────────────────────────────────────
FROM nginx:alpine AS runner
WORKDIR /usr/share/nginx/html

# Nginx config for SPA routing
COPY ops/nginx.conf /etc/nginx/conf.d/default.conf

# Static files
COPY --from=builder /app/dist ./

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
