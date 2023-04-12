import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import bodyParser from "body-parser";
import path from "path";

const app = express();

dotenv.config({ path: "config.env" }); // Carrega as variáveis de ambiente
const PORT = process.env.PORT || 8080; // Porta do servidor

app.use(morgan("tiny")); // Log de requisições

app.use(bodyParser.urlencoded({ extended: true })); // Parse de requisições

app.set("view engine", "ejs"); // View engine

// app.set("views", path.resolve(__dirname, "views/ejs")); // Views

const __filename = path.resolve(import.meta.url.replace(/^file:\/\/\//, ""));
const __dirname = path.dirname(__filename);

app.use("/css", express.static(path.resolve(__dirname, "assets/css"))); // CSS
app.use("/img", express.static(path.resolve(__dirname, "assets/img"))); // IMG
app.use("/js", express.static(path.resolve(__dirname, "assets/js"))); // JS

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/add-user", (req, res) => {
  res.render("add_user");
});

app.get("/update-user", (req, res) => {
  res.render("update_user");
});

app.listen(3333, () => {
  console.log(`Server started on port  http://localhost:${PORT} ✔✔✔`);
});
