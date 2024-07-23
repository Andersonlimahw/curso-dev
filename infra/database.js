import pg from "pg";

const { Client } = pg;

async function query() {
  const client = new Client({
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
  });
  client.connect();
  const result = await client.query("HOW server_version;");
  client.end();
  return result.rows;
}

export default {
  query,
};
