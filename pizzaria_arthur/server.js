const express = require("express");
const cors = require("cors");
const sqlite = require("sqlite3").verbose();

const app = express();

app.use(cors());
app.use(express.static("./frontend"));
app.use(express.json());

const db = new sqlite.Database("./database.db", (err) => {
    if(err) return console.log("Erro ao criar banco de dados!");
    console.log("Banco de dados criado com exito!")
});

const PORT = 3000;

db.run(`
    CREATE TABLE IF NOT EXISTS clientes 
    (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome TEXT NOT NULL,
        endereco TEXT NOT NULL,
        telefone TEXT NOT NULL UNIQUE,
        email TEXT NOT NULL UNIQUE,
        senha TEXT NOT NULL
    )
    `, (err) => {
        if (err) return console.log("Erro ao criar tabela clientes")
});

db.run(`
    CREATE TABLE IF NOT EXISTS pizzas
    (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome TEXT NOT NULL,
        descricao TEXT NOT NULL,
        imagem TEXT NOT NULL
    )
    `, (err) => {
        if (err) return console.log("Erro ao criar tabela pizzas")
});

app.get("/cliente", (req, res) => {
    db.all(`SELECT * FROM clientes`, [], (err, rows) => {
        if (err) return res.status(400).json({ error: err.message });
        res.json(rows)
    })
})

app.post("/cliente", (req, res) => {
    const { nome, endereco, telefone, email, senha } = req.body;
    db.run(`INSERT INTO clientes (nome, endereco, telefone, email, senha) VALUES (?,?,?,?,?)`,
        [nome, endereco, telefone, email, senha],
        (err) => {
            if (err) return res.status(400).json({ error: err.message });
            res.status(200).json("Cliente adicionado com sucesso!");
        }
    )
})

app.delete("/cliente/:id", (req, res) => {
    const id = req.params.id;
    db.run(`DELETE FROM clientes WHERE id = ?`,
        [id],
        (err) => {
            if (err) return res.status(400).json({ error: err.message });
            res.json("Usuario deletado com sucesso!");
        }
    )
})

app.post("/login", (req,res) => {
    const { email, senha } = req.body
    db.get("SELECT * FROM clientes WHERE email = ? AND senha = ?",
        [email, senha],
        (err, row) => {
            if (err) return res.status(400).json({ error: err.message });
            res.json(row)
        }
    )
})

app.get("/pizza", (req, res) => {
    db.all(`SELECT * FROM pizzas`, [],
        (err, row) => {
        if (err) return res.status(400).json({ error: err.message });
        res.status(200).json(row)
    });
});

app.post("/pizza", (req, res) => {
    const { nome, imagem, descricao } = req.body;
    db.run(`INSERT INTO pizzas (nome, imagem, descricao) VALUES (?,?,?)`,
        [nome, imagem, descricao],
        (err) => {
            if (err) return res.status(400).json({ error: err.message });
            res.status(200).json("Pizza adicionada com sucesso ao cardápio!");
        }
    )
})

app.delete("/pizza/:id", (req, res) => {
    const id = req.params.id;
    db.run(`DELETE FROM pizzas WHERE id = ?`,
        [id],
        (err) => {
            if (err) return res.status(400).json({ error: err.message });
            res.json("Pizza deletada com sucesso!");
        }
    )
})

app.listen(PORT, () => {
    console.log("Servidor ouvindo em http://localhost:3000");
})