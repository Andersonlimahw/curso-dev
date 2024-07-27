import pg from "pg";

const { Client } = pg;

async function query(queryObjectInput) {
  const client = new Client({
    user: process.env.POSTGRES_USER,
    host: process.env.POSTGRES_HOST,
    password: process.env.POSTGRES_PASSWORD,
    port: process.env.POSTGRES_PORT,
    database: process.env.POSTGRES_DB,
    ssl: process.env.NODE_ENV === "development" ? false : true,
  });
  await client.connect();

  try {
    const result = await client.query(
      queryObjectInput.text,
      queryObjectInput.values,
    );
    const [row] = result.rows;
    return row;
  } catch (error) {
    console.error(error);
    throw error;
  } finally {
    await client.end();
  }
}

export default {
  query,
};
