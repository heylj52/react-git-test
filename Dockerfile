FROM node:alpine
WORKDIR "/usr/src/app"
COPY package.json ./
RUN yarn install
COPY ./ ./
RUN yarn build
CMD ["yarn","start"]
EXPOSE 3000