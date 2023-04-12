import mongoose from "mongoose";

let schema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "O nome é obrigatório"],
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  cpf: {
    type: String,
    required: [true, "O CPF é obrigatório"],
  },
  status: String,
  dataNascimento: {
    type: Date,
    default: Date.now,
  },
});

const Userdb = mongoose.model("userdb", schema);

export default Userdb;