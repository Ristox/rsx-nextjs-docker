# Next.js/Express + Typescript + Azure Application Insights

### with Docker build, Azure AppInsights analytics, NetData monitoring

Some experimentation with a minimum Next.js/TS/Express and embedded app monitoring & analytics tools.

#### Environment

Copy `.env.example` to `.env` and fill your proprietary configuration to the environment variables
```
APP_INSIGHTS= #instrumentation key
FRONT_ROLE_NAME= #frontend app cloud role
APP_ROLE_NAME= #backend cloud role
APP_INSTANCE_NAME= #server/vm cloud instance name
```

#### Dev server

`npm i && npm run dev`

#### Prod server (host machine)

`npm run build && npm start`

#### Prod server (Docker-ized)

`docker-compose up`

Builds `rsx-nextjs-docker` service image (first run) and starts it in container with the same name.

(Use flag `-d` to run in the background)


#### Usage

NextJS server, when ran natively, accepts requests on host's port `3000`
(open `http://localhost:3000/` or `http://localhost:3000/api`)

**NB** - NextJS server running inside container is exposed for usage at host's port `8080`
(open `http://localhost:8080/` or `http://localhost:8080/api`)

`/` - server root, serves a small sample NextJS app, with:

* Main (index) page showing a TV shows listing from TV Maze API
* All list items clickable, to display details view of chosen TV show.
* Simple About page

`/api` - server API root (Express backend), serves few endpoints to simulate timings/load of server:

* `/api/hello` - fast response endpoint (just returns `hello` back at you)
* `/api/delay/<ms>` - delay a response of given `ms` (or up to 9 seconds max)
* `/api/cpu-load-during/<ms>` - generate CPU load for provided duration of given `ms` (or up to 25 seconds max). Essentially, does a nasty thing and blocks the server (main event loop).
