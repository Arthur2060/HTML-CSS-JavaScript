const express = require("express");
const cors = require("cors");
const sqlite3 = require("sqlite3").verbose();

const app = express();

app.use(cors());
app.use(express.static("C:/Users/Aluno/Desktop/pizzaria_arthur/frontend"));
app.use(express.json());

const db = new sqlite3.Database("./database.db");
const PORT = 3000;

app.listen(PORT, (req, res) => {
    console.log("Servidor ouvindo em http://localhost:3000");
})