## Running

with docker runnning
run on shell

```shell
  npm run services:up
  npm run dev
```

## Connect to database

```shell
  psql -h localhost -p 5432 -U postgres -d cursodev -W
```

to stop

```shell
  npm run services:down
```
