import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import bodyParser from "body-parser";
import path from "path";
import router from "./server/routes/router.js";
import connectDB from "./server/database/connection.js";
import csv from "csv-parser";
import fs from "fs";

const app = express();

dotenv.config({ path: "config.env" }); // Carrega as variáveis de ambiente
const PORT = process.env.PORT || 8080; // Porta do servidor

app.use(morgan("tiny")); // Log de requisições

connectDB(); // Conecta ao MongoDB

app.use(bodyParser.urlencoded({ extended: true })); // Parse de requisições

app.set("view engine", "ejs"); // View engine

// app.set("views", path.resolve(__dirname, "views/ejs")); // Views

const __filename = path.resolve(import.meta.url.replace(/^file:\/\/\//, ""));
const __dirname = path.dirname(__filename);

app.use("/css", express.static(path.resolve(__dirname, "assets/css"))); // CSS
app.use("/img", express.static(path.resolve(__dirname, "assets/img"))); // IMG
app.use("/js", express.static(path.resolve(__dirname, "assets/js"))); // JS

app.use("/", router); // Rotas

app.post("/upload", (req, res) => {
  const results = [];
  fs.createReadStream(req.file.path)
    .pipe(csv())
    .on("data", (data) => {
      results.push(data);
    })
    .on("end", () => {
      console.log(results);
      // Salvar dados no banco de dados
      res.redirect("/"); // Redirecionar para a página inicial após a importação
    });
});

app.listen(3333, () => {
  console.log(`Server started on port  http://localhost:${PORT} ✔✔✔`);
});
