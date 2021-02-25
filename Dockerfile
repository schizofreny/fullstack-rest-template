
FROM node:14-alpine AS builder
WORKDIR /srv

COPY [".", "./"]
RUN yarn install --non-interactive && yarn generate && yarn build

# ======================================

FROM node:14-alpine AS modules
WORKDIR /srv
COPY ["backend/package.json", "yarn.lock", "./"]
RUN yarn install --production --non-interactive

# ======================================

FROM node:14-alpine

ENV NODE_ENV production
WORKDIR /srv

COPY --from=builder ["srv/frontend/dist", "./public"]
COPY --from=builder ["srv/backend/dist", "./"]
COPY --from=modules ["srv/node_modules", "./node_modules"]

EXPOSE 4000
CMD ["node", "app.js"]
