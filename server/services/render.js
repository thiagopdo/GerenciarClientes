import axios from "axios";

export default function homeRoutes(req, res) {
  //fazer a requisição para a api
  axios
    .get("http://localhost:3333/api/users")
    .then((response) => {
      res.render("index", { users: response.data });
    })
    .catch((err) => {
      res.send(err);
    });
}

export function add_user(req, res) {
  res.render("add_user");
}

export function update_user(req, res) {
  axios
    .get("http://localhost:3333/api/users", {
      params: { id: req.query.id },
    })
    .then((userdata) => {
      res.render("update_user", { user: userdata.data });
    })
    .catch((err) => {
      res.send(err);
    });
}
