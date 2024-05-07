FROM node:20
WORKDIR /app
COPY . .
RUN npm ci
RUN npm run build
ENV DB_USER=root
ENV DB_PASSWORD=password
CMD ["npm", "run", "start"]
EXPOSE 3000