FROM node:8

# Add files
ADD server /var/www

# Install server dependencies
WORKDIR /var/www/

RUN ls /var/www

RUN npm install

EXPOSE 3000

CMD ["node", "/var/www/server.js"]

# Usage example:
# docker build -t example-data .
# docker run -p 3000:3000 -v example-data:/var/www/data example-data
