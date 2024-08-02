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

## Running postgress via CLI

### 1 Create the `lemon` table

```shell
psql -h localhost -p 5432 -U postgres -d cursodev -W -c "
CREATE TABLE lemon (
    id SERIAL PRIMARY KEY,
    code VARCHAR(50) NOT NULL,
    name VARCHAR(100) NOT NULL
);"
```

### 2 Insert the `user` int table

```shell
psql -h localhost -p 5432 -U postgres -d cursodev -W -c "
INSERT INTO lemon (code, name) VALUES ('user123', 'John Doe');"
```

### 3 Select the `user` by code

```shell
psql -h localhost -p 5432 -U postgres -d cursodev -W -c "
SELECT * FROM lemon WHERE code = 'user123';"
```

to stop

```shell
  npm run services:down
```
