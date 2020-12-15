# Next.js/Express + Typescript + Azure Application Insights

### with Docker build, Azure AppInsights analytics, NetData monitoring

Some experimentation with a minimum Next.js/TS/Express and embedded app monitoring & analytics tools.
Docker build to be added as well.

#### Environment

Copy `.env.example` to `.env` and fill your proprietary configuration to the environment variables
```
APP_INSIGHTS= #instrumentation key
FRONT_ROLE_NAME= #frontend app cloud role
APP_ROLE_NAME= #backend cloud role
APP_INSTANCE_NAME= #server/vm cloud instance name
```

#### Dev

`npm i && npm run dev`

#### Prod

`npm run build && npm start`
