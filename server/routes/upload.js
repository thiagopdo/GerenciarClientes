// import { Router } from "express";
// const router = Router();
// import multer, { diskStorage } from "multer";

// // Define o objeto multer e o middleware
// const storage = diskStorage({
//   destination(req, file, cb) {
//     cb(null, "uploads/");
//   },
//   filename: function (req, file, cb) {
//     cb(null, `${Date.now()}-${file.originalname}`);
//   },
// });
// const upload = multer({ storage });

// // Define a rota para a página de upload
// router.get("/upload", function (req, res) {
//   res.render("upload");
// });

// // Define a rota para o tratamento do upload
// router.post("/upload", upload.single("file"), function (req, res) {
//   // O arquivo foi enviado com sucesso e pode ser acessado em req.file
// });

// export default router;
