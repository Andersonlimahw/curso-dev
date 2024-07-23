import pg from "pg";

const { Client } = pg;

async function query() {
  console.log("env => ", process.env);
  console.log("env POSTGRES_PASSWORD => ", process.POSTGRES_PASSWORD);
  const client = new Client({
    user: process.env.POSTGRES_USER,
    host: process.env.POSTGRES_HOST,
    password: process.env.POSTGRES_PASSWORD,
    port: process.env.POSTGRES_PORT,
    database: process.env.POSTGRES_DB,
  });
  await client.connect();
  const result = await client.query("SHOW server_version;");
  await client.end();
  return result.rows;
}

export default {
  query,
};
