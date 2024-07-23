## Running

with docker runnning
run on shell

```shell
  docker compose  -f infra/compose.yaml up -d
```

## Connect to database

```shell
  psql -h localhost -p 5432 -U postgres -d curso_dev
```

para parar

```shell
  docker compose  -f infra/compose.yaml down
```
