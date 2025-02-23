let produtos = [];

let tabela = document.getElementById("tabelaBody");
let botaoImportar = document.getElementById("importar");
let botaoRegistrar = document.getElementById("registrar");

let botaoGerarJson = document.getElementById("gerarJson");
let botaoGerarXml = document.getElementById("gerarXml");

botaoRegistrar.addEventListener("click", function() {
    let nome = document.getElementById("nome").value;
    let categoria = document.getElementById("categoria").value;
    let valor = document.getElementById("preco").value;

    produtos.push({nome, categoria, valor});

    atualizarTabela();

    document.getElementById("form").reset();
});

function atualizarTabela() {
    tabela.innerHTML = "";

    produtos.forEach((element, index) => {
        let novaLinha = tabela.insertRow();

        novaLinha.insertCell().textContent = element.nome;
        novaLinha.insertCell().textContent = element.categoria;
        novaLinha.insertCell().textContent = element.valor + "R$";

        let cellAcoes = novaLinha.insertCell();
        let botaoExcluir = document.createElement("button");
        botaoExcluir.textContent = "Excluir";
        botaoExcluir.classList = "btn btn-danger";
        botaoExcluir.onclick = () => excluirProduto(index);

        cellAcoes.appendChild(botaoExcluir);
    });
}

function excluirProduto(index) {
    produtos.splice(index, 1);
    atualizarTabela();
}

function gerarJson() {
    const jsonData = JSON.stringify(produtos, null, 2);
    const blob = new Blob([jsonData], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "produtos.json";
    a.click();
    URL.revokeObjectURL(url);
}

function gerarXml(){
    let xmlString = `<?xml version="1.0" encoding="UTF-8"?>\n
                    <produtos>\n`;
    produtos.forEach((elemento) => {
        xmlString += `\t<nome>${elemento.nome}</nome>\n`;
        xmlString += `\t<categoria>${elemento.categoria}</categoria>\n`;
        xmlString += `\t<valor>${elemento.valor}</valor>\n`;
    })
    xmlString += `</produtos>`;
    xmlString += `\n`;

    const blob = new Blob([xmlString], { type: "application/xml" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "produtos.xml";
    a.click();
    URL.revokeObjectURL(url);
}

botaoGerarJson.addEventListener("click", function() {
    gerarJson();
});

botaoGerarXml.addEventListener("click", function() {
    gerarXml();
});