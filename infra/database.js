import pg from "pg";

const { Client } = pg;

async function query() {
  const client = new Client({
    user: process.env.POSTGRES_USER,
    host: process.env.POSTGRES_HOST,
    password: process.env.POSTGRES_PASSWORD,
    port: process.env.POSTGRES_PORT,
    database: process.env.POSTGRES_DB,
  });
  await client.connect();
  const result = await client.query(`
      SELECT version() as server_version,
      (SELECT setting from pg_settings WHERE name = 'max_connections') AS max_connections,
      (SELECT count(1) from pg_stat_activity) AS used_connections;
    `);
  await client.end();
  const [row] = result.rows;
  return row;
}

export default {
  query,
};
