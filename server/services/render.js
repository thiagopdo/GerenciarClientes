export default function homeRoutes(req, res) {
  res.render("index");
}

export function add_user (req, res) {
  res.render("add_user");
}

export function update_user (req, res) {
  res.render("update_user");
}