import database from "infra/database";

function status(request, response) {
  const databaseName = process.env.DATABASE_NAME;
  const queryParamsInput = `
    SELECT version() as server_version,
    (SELECT setting FROM pg_settings WHERE name = 'checkpoint_timeout') AS checkpoint_timeout,
    (SELECT setting FROM pg_settings WHERE name = 'max_connections') AS max_connections,
    (SELECT count(1)::int FROM pg_stat_activity WHERE datname = '${databaseName}') AS opened_connections;
  `;
  database
    .query(queryParamsInput)
    .then((databaseResponse) => {
      response.status(200).json({
        status: "ok",
        dependencies: {
          database: {
            ...databaseResponse,
          },
        },

        updated_at: new Date().toISOString(),
      });
    })
    .catch((error) => {
      console.error(error);
      response.status(500).json({ status: "error", error });
    });
}

export default status;
