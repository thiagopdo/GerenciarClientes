import Userdb from "../model/model.js";
import moment from "moment/moment.js";
import multer from "multer";

// criar e salvar novo cliente
export const create = (req, res) => {
  // validar requisição
  if (!req.body) {
    res.status(400).send({ message: "O campo não pode estar vazio!" });
    return;
  }

  // novo cliente
  const user = new Userdb({
    name: req.body.name,
    email: req.body.email,
    cpf: req.body.cpf,
    status: req.body.status,
    birthday: moment(req.body.birthday, "mm/dd/yyyy").format("DD/MM/YYYY"),
  });
  //console.log(user.birthday);

  // salvar cliente no banco de dados
  user
    .save(user)
    .then((data) => {
      res.redirect("/add-user");
      //res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Algum erro ocorreu ao salvar o cliente.",
      });
    });
};

// retornar todos os clientes ou um cliente específico
export const find = (req, res) => {
  if (req.query.id) {
    // se o id for passado como parâmetro
    const id = req.query.id;
    Userdb.findById(id)
      .then((data) => {
        if (!data) {
          res
            .status(404)
            .send({ message: "Cliente não encontrado com id " + id });
        } else {
          res.send(data);
        }
      })
      .catch((err) => {
        res
          .status(500)
          .send({ message: `Erro ao buscar cliente com id ${id}` });
      });
  } else {
    // se não, retorna todos os clientes
    Userdb.find()
      .then((user) => {
        res.send(user);
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Algum erro ocorreu ao buscar os clientes.",
        });
      });
  }
};

// atualizar um cliente por id
export const update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "O campo não pode estar vazio!",
    });
  }

  const id = req.params.id;
  Userdb.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Não foi possível atualizar o cliente com id=${id}. Talvez o cliente não tenha sido encontrado!`,
        });
      } else res.send({ message: "Cliente atualizado com sucesso." });
    })
    .catch((err) => {
      res.status(500).send({
        message: `Erro ao atualizar o cliente com id=${id}`,
      });
    });
};

// excluir um cliente por id
export const remove = (req, res) => {
  const id = req.params.id;

  Userdb.findByIdAndDelete(id)
    .then((data) => {
      if (data) {
        res.send({
          message: "Cliente excluído com sucesso!",
        });
      } else {
        res.status(404).send({
          message: `Não foi possível excluir o cliente com id=${id}. Talvez o cliente não tenha sido encontrado!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: `Não foi possível excluir o cliente com id=${id}`,
      });
    });
};

export const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
const upload = multer({ storage: storage });
