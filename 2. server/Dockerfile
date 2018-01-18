# Recommended: FROM node:8
# For demonstration:
FROM ubuntu:16.04

# Install dependencies
RUN apt-get update
RUN apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_8.x | bash -
RUN apt-get install -y nodejs

# Add files
ADD package.json package-lock.json server.js /var/www/

# Install server dependencies
WORKDIR /var/www/
RUN npm install

EXPOSE 3000

CMD ["node", "/var/www/server.js"]

# Usage example:
# docker build -t example-server .
# docker run -d -p 3000:3000 example-server .
