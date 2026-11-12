FROM ghcr.io/ministryofjustice/hmpps-node:24-alpine AS build

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci --omit=dev --no-audit --no-fund

COPY server.js ./

FROM ghcr.io/ministryofjustice/hmpps-node:24-alpine-runtime

WORKDIR /app

COPY --from=build --chown=appuser:appgroup /app/package.json /app/package-lock.json ./
COPY --from=build --chown=appuser:appgroup /app/server.js ./

ENV NODE_ENV=production
EXPOSE 3000
USER 2000

CMD ["node", "server.js"]
