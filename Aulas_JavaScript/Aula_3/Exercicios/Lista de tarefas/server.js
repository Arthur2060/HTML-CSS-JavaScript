const express = require("express");
const fs = require("fs");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const PORT = 3000;
const BANCO = "ListaDeTarefas.json"

app.use(cors());
app.use(bodyParser.json());

app.get("/tarefas", (req, res) => {
    fs.readFile(BANCO, (err, data) => {
        if (err) {
            res.status(500).json({ error: "Erro ao ler o arquivo" });
        } else {
            res.json(JSON.parse(data));
        }
    });
});

app.post("/tarefas", (req, res) => {
    fs.readFile(BANCO, (err, data) => {
        if (err) {
            res.status(500).json({ error: "Erro ao ler o arquivo" });
        } else {
            let tasks = JSON.parse(data);
            const novaTarefa = req.body;
            novaTarefa.id = tasks.length + 1;
            tasks.push(novaTarefa);

            fs.writeFile(BANCO, JSON.stringify(tasks, null, 2), err => {
                if (err) {
                    res.status(500).json({ error: "Erro ao salvar" });
                } else {
                    res.status(201).json(novaTarefa);
                }
            });
        }
    });
});

app.listen(PORT, () => {
    console.log(`Servidor iniciado no endereço: http://localhost:${PORT}`)
});