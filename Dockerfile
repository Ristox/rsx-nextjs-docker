FROM node:current-alpine AS base
WORKDIR /base
COPY package*.json ./
COPY . .
RUN npm install

FROM base AS build
ENV NODE_ENV=production
WORKDIR /build
COPY --from=base /base ./
RUN npm run build

FROM node:current-alpine AS production
ENV NODE_ENV=production
ENV SERVICE_PORT=3000
WORKDIR /app
COPY --from=build /build/package*.json ./
COPY --from=build /build/.next ./.next/
RUN npm install next

EXPOSE 3000
CMD ["node", ".next/production-server/backend.js"]
