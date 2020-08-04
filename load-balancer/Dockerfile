FROM nginx
LABEL Miguel Pereira
# Don't need to copy in config since we use a volumn to mount it.
# COPY ./nginx.conf /etc/nginx/nginx.conf
EXPOSE 8080
CMD [ "nginx", "-g", "daemon off;" ]