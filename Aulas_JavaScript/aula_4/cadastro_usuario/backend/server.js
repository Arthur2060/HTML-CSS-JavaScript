const express = require("express");
const cors = require("cors");
const sqlite = require("sqlite3").verbose();
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

const db = new sqlite.Database("users.db", (err) => {
    if (err) return console.error(err.message);
    console.log ("Conectado ao banco de dados SQLite.");
});

db.run(`CREATE TABLE IF NOT EXISTS usuarios 
    (
    id INTEGER PRIMARY KEY,
    nome TEXT NOT NULL,
    email TEXT NOT NULL
    )`);

app.post("/users", (req, res) => {
    const {nome, email} = req.body;
    db.run(`INSERT INTO usuarios (nome, email)
        VALUES (?, ?)`, [nome, email], 
    function (err) {
        if (err) return res.status(500).json({ error: err.message });
        res.json({id: this.lastID});
    });
});

app.get("/users", (req, res) => {
    db.all(`SELECT * FROM usuarios`, [], (err, rows) => {
        if (err) return res.status(500).json({error: err.message});
        res.json(rows)
    });
});

app.delete("/users/:id", (req, res) => {
    const userid = parseInt(req.params.id);
    db.run(`DELETE FROM usuarios WHERE id = ?`, [userid], 
        function (err) {
            if (err) return res.status(500).json({ error: err.message });
            res.json({ message: "Usuario deletado com sucesso" });
        }
    );
});

app.listen(PORT, () => console.log("Servidor rodando em http://localhost:3000"));
