const express = require("express");
const cors = require("cors");
const sqlite = require("sqlite3").verbose();

const app = express();

app.use(cors());
app.use(express.static("C:/Users/Aluno/Desktop/pizzaria_arthur/frontend"));
app.use(express.json());

const db = new sqlite.Database("./database.db", (err) => {
    if(err) return console.log("Erro ao criar banco de dados!");
    console.log("Banco de dados criado com exito!")
});

const PORT = 3000;

db.run(`CREATE TABLE clientes (
        id INTEGER PRIMARY KEY AUTO INCREMENT,
        nome TEXT NOT NULL,
        endereco TEXT NOT NULL,
        telefone TEXT NOT NULL UNIQUE,
        email TEXT NOT NULL UNIQUE
    )`, (err) => {
        if (err) return console.log("Erro ao criar tabela de clientes")
    });

app.get("/clientes", (req, res) => {
    db.all(`SELECT * FROM clientes`, [], (err, rows) => {
        if (err) return res.status(400).json({ error: err.message });
        res.json(rows);
    })
})

app.listen(PORT, (req, res) => {
    console.log("Servidor ouvindo em http://localhost:3000");
})