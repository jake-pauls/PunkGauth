FROM node:alpine
WORKDIR /usr/src

# Copy Package Directories, Install Dependencies
COPY package.json .
COPY yarn.lock .
RUN yarn install

# Build Typescript
COPY . .
RUN yarn build

CMD ["yarn", "start"]
