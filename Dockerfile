FROM node:20-alpine

RUN apk add --no-cache git

WORKDIR /app
ENV NODE_ENV=production

COPY --chown=node:node . .

EXPOSE 8080
USER node

CMD ["node", "scripts/static-supervisor.js"]
