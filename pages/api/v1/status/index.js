import database from "infra/database";

function status(request, response) {
  database
    .query()
    .then((res) => {
      console.log(res);
      response.status(200).json({ status: "ok", result: res });
    })
    .catch((error) => {
      console.error(error);
      response.status(500).json({ status: "error", error });
    });
}

export default status;
