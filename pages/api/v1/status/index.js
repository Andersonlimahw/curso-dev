import database from "infra/database";

function status(request, response) {
  database
    .query()
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
