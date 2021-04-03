FROM nginx

# Remove default nginx config
RUN rm /etc/nginx/conf.d/default.conf

# Copy new config to container
COPY nginx.conf /etc/nginx/conf.d