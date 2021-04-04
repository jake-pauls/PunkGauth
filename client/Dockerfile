FROM node:alpine
WORKDIR /usr/src

# Copy Package Directories
COPY package.json .
COPY yarn.lock .

# Install onto Container
RUN yarn install

# Copy Remaining Files
COPY . .
CMD ["yarn", "start"]