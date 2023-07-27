# starter-template
Starter Code for Monorepo

Install all dependencies with yarn
`yarn install`

To start backend only 
`yarn nx start:dev backend`

To start frontend only
`yarn nx start frontend`

To start all with nx
`yarn nx run-many --parallel --target=start --projects=frontend,backend`

To start all repo with docker
`docker-compose up`
