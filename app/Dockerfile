# A typical Node application running in a Docker container
# TODO would be nice to enable nodemon for pickup up changes during development
FROM node:boron
LABEL Miguel Pereira
# Create the working directory
RUN mkdir -p /app
# Set the working directory.
WORKDIR /app
# Copy over the app and install dependencies
COPY src/package.json /app
RUN npm install
# COPY src /app # Don't need to copy the source since we use volume to mount the source.
# Execute the index.js to launch the Express app.
CMD ["node", "index.js"]
# Expose port 3000 to the outside once the container has launched.
# The Nginx container will forward HTTP traffic to containers of this image via this port.
EXPOSE 3000