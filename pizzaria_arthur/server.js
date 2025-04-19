const express = require("express");
const cors = require("cors");
const sqlite = require("sqlite3").verbose();
const fs = require("fs");
const sass = require("sass");

const app = express();

app.use(cors());
app.use(express.static("./static"));
app.use(express.json());

const db = new sqlite.Database("./database.db", (err) => {
    if(err) return console.log("Erro ao criar banco de dados!");
    console.log("Banco de dados criado com exito!")
});

const PORT = 3000;

const CONTA = "conta.json"

db.run(`
    CREATE TABLE IF NOT EXISTS clientes 
    (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome TEXT NOT NULL,
        endereco TEXT NOT NULL,
        telefone TEXT NOT NULL UNIQUE,
        email TEXT NOT NULL UNIQUE,
        senha TEXT NOT NULL,
        status BOOLEAN NOT NULL
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
    db.run(`INSERT INTO clientes (nome, endereco, telefone, email, senha, status) VALUES (?,?,?,?,?, 'true')`,
        [nome, endereco, telefone, email, senha],
        (err) => {
            if (err) return res.status(400).json({ error: err.message });
            res.status(200).json("Cliente adicionado com sucesso!");
        }
    )
})

app.delete("/cliente/:id", (req, res) => {
    const id = req.params.id;
    db.run(`UPDATE clientes SET status = 'false' WHERE id = ?`,
        [id],
        (err) => {
            if (err) return res.status(400).json({ error: err.message });
            res.json("Usuario desativado com sucesso!");
        }
    )
})

app.post("/login", (req,res) => {
    const { email, senha } = req.body
    db.get("SELECT * FROM clientes WHERE email = ? AND senha = ? AND status <> 'false'",
        [email, senha],
        (err, row) => {
            if (err) return res.status(400).json({ error: err.message });
            fs.writeFile(CONTA, JSON.stringify(row, null, 2), err => {
                if (err) return res.status(400).json({ error: err.message });
                res.json(row)
            })
        }
    )
})

app.delete("/logout", (req, res) => {
    fs.writeFile(CONTA, JSON.stringify("", null, 2), err => {
        if (err) return res.status(400).json({ error: err.message });
        res.json("Logout bem sucedido!")
    })
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

app.put("/pizza/:id", (req, res) => {
    const id = req.params.id
    const { nome, descricao, imagem } = req.body
    db.run(`UPDATE pizzas SET nome = ?, descricao = ?, imagem = ? WHERE id = ?`,
        [nome, descricao, imagem, id],
        (err) => {
            if (err) return res.status(400).json({ error: err.message });
            res.json("Pizza atualizada com sucesso!")
        }
    )
})

app.get("/conta", (req, res) => {
    fs.readFile(CONTA, (err, data) => {
        if (err) return res.status(400).json({ error: err.message });
        res.json(JSON.parse(data))
    })
})

app.listen(PORT, () => {
    console.log("Servidor ouvindo em http://localhost:3000");
})