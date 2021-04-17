# Postgres in Docker

Ive decided for simplicity, to go with a dockerized deployment of Postgress as the sole db for the application.
This will leave open room to have multiple containers that get deployed, and make it easy to reset by killing the container and the data.
I haven't decided yet whether the containers will be managed with ansible, kuberneties, or docker-compose. However, that shouldn't matter for the purposes of this Readme.

## Commands to Start DB
-- assumes the env variable exist

To start a fresh container
```
docker run -p 5432:5432 -d \
    -e POSTGRES_PASSWORD=$PG_PASS \
    -e POSTGRES_USER=$PG_USER \
    -e POSTGRES_DB=$PG_NAME \
    -v pgdata:/var/lib/postgresql/data \
    --name $PG_CONTAINER_NAME \
    postgres
```

To enter the container and interact with db
```
docker exec -it $PG_CONTAINER_NAME psql -U $PG_USER $PG_NAME
```

## PGadmin4

Sometimes is is useful to look a database directly as an admin using a GUI for speed. In this case that GUI would be pgadmin4, and since we are dockerizing the db, we should also dockerize the gui.
This is mostly a development feature, as such, when we begin automating deployment, this will be a dev step, but not generally done in deployment.

pgadmin could probably be configured to run safely in production using the tls protocols. 
To start the pgadmin container
```
docker run -p 8080:80 -d \
    -e PGADMIN_DEFAULT_EMAIL=$PGADMIN_EMAIL \
    -e PGADMIN_DEFAULT_PASSWORD=$PG_PASS \
    -e PGADMIN_LISTEN_PORT=80 \
    -v pgadmindata:/var/lib/pgadmin \
    --name $PGADMIN_CONTAINER_NAME \
    --link ketopaldb:ketopaldb \
    dpage/pgadmin4
```