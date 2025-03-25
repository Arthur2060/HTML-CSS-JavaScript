const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;
const host = "10.83.138.75";

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
})

app.listen(PORT, () => {
    console.log(`Servidor iniciado em http://${host}:${PORT}`);
    console.log(`Acesse via IP local, http://:${PORT}`)
});