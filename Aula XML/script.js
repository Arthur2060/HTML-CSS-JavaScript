let produtos = [];

let tabela = document.getElementById("tabelaBody");
let botaoImportar = document.getElementById("importar");
let botaoRegistrar = document.getElementById("registrar");

let botaoGerarJson = document.getElementById("gerarJson");
let botaoGerarXml = document.getElementById("gerarXml");

let xmlString = "";
let jsonData = "";

botaoRegistrar.addEventListener("click", function () {
    let nome = document.getElementById("nome").value;
    let categoria = document.getElementById("categoria").value;
    let preco = document.getElementById("preco").value;

    produtos.push({ nome, categoria, preco });

    atualizarTabela();

    document.getElementById("form").reset();
    document.getElementById("conteudo").style.display = "block";
});

function lerArquivo(event) {
    const file = event.target.files[0];

    if (!file) return;

    const fileReader = new FileReader();
    fileReader.onload = function (e) {
        const conteudo = e.target.result;
        const fileName = file.name.toLowerCase();

        try {
            if (fileName.endsWith(".json")) {
                const data = JSON.parse(conteudo);
                if (Array.isArray(data)) {
                    produtos = data;
                } else if (data.produtos && Array.isArray(data.produtos)) {
                    produtos = data.produtos;
                } else {
                    alert("formato invalido!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
                    return;
                }
            } else if (fileName.endsWith(".xml")) {
                const parser = new DOMParser();
                const xmlDoc = parser.parseFromString(conteudo, "application/xml");
                const prodElements = xmlDoc.getElementsByTagName("produto");
                produtos = [];

                for (let i = 0; i < prodElements.length; i++) {
                    const nome = prodElements[i].getElementsByTagName("nome")[0].textContent;
                    const categoria = prodElements[i].getElementsByTagName("categoria")[0].textContent;
                    const preco = prodElements[i].getElementsByTagName("preco")[0].textContent;
                    produtos.push({ nome, categoria, preco });
                }
            } else {
                alert("APENAS ARQUIVOS JSON OU XML");
                return;
            }

            atualizarTabela();
            document.getElementById("conteudo").style.display = "block";

        } catch (error) {
            alert("Erro ao processar arquivo!" + error.message);
        }
        
    }
    fileReader.readAsText(file);
}

document.getElementById("arquivoDeImportacao").addEventListener("change", lerArquivo);

function atualizarTabela() {
    tabela.innerHTML = "";

    produtos.forEach((element, index) => {
        let novaLinha = tabela.insertRow();

        novaLinha.insertCell().textContent = element.nome;
        novaLinha.insertCell().textContent = element.categoria;
        novaLinha.insertCell().textContent = "R$" + parseFloat(element.preco).toFixed(2);

        let cellAcoes = novaLinha.insertCell();

        let botaoExcluir = document.createElement("button");
        botaoExcluir.textContent = "Excluir";
        botaoExcluir.classList = "btn btn-danger";
        botaoExcluir.onclick = () => excluirProduto(index);

        let botaoEditar = document.createElement("button");
        botaoEditar.id = 'botaoEditar';
        botaoEditar.textContent = "Editar";
        botaoEditar.classList = "btn btn-warning"
        botaoEditar.onclick = () => editarProduto(index);

        cellAcoes.appendChild(botaoExcluir);
        cellAcoes.appendChild(botaoEditar);
    });
}

function editarProduto(index) {
    document.getElementById("nome").value = produtos[index].nome;
    document.getElementById("categoria").value = produtos[index].categoria;
    document.getElementById("preco").value = parseFloat(produtos[index].preco);
    excluirProduto(index)
}

function excluirProduto(index) {
    produtos.splice(index, 1);
    atualizarTabela();
}

botaoGerarJson.addEventListener("click", function () {
    document.getElementById("gerador").style.display = "block";
    gerarJson();
});

botaoGerarXml.addEventListener("click", function () {
    document.getElementById("gerador").style.display = "block";
    gerarXml();
});

function gerarJson() {
    jsonData = JSON.stringify(produtos, null, 2);

    let botaoDownload = document.createElement("button");
    botaoDownload.textContent = "Download";
    botaoDownload.classList = "btn btn-primary";
    botaoDownload.addEventListener('click', function () {
        downloadJson(jsonData);
    });

    document.getElementById("Output").textContent = jsonData;
    document.getElementById("Output").appendChild(botaoDownload);
}

function gerarXml() {
    xmlString = `<?xml version="1.0" encoding="UTF-8"?>\n
    <produtos>\n`;
    produtos.forEach((elemento) => {
        xmlString += `\t<produto>\n`;
        xmlString += `\t\t<nome>${elemento.nome}</nome>\n`;
        xmlString += `\t\t<categoria>${elemento.categoria}</categoria>\n`;
        xmlString += `\t\t<preco>${parseFloat(elemento.preco).toFixed(2)}</preco>\n`;
        xmlString += `\t</produto>\n`;
    })
    xmlString += `</produtos>`;
    xmlString += `\n`;

    let botaoDownload = document.createElement("button");
    botaoDownload.textContent = "Download";
    botaoDownload.classList = "btn btn-primary";
    botaoDownload.addEventListener('click', function () {
        downloadXml(xmlString);
    });

    document.getElementById("Output").textContent = xmlString;
    document.getElementById("Output").appendChild(botaoDownload);
}

function downloadXml(xmlString) {
    const blob = new Blob([xmlString], { type: "application/xml" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "produtos.xml";
    a.click();
    URL.revokeObjectURL(url);
}

function downloadJson(jsonData) {
    const blob = new Blob([jsonData], { type: "application/xml" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "produtos.json";
    a.click();
    URL.revokeObjectURL(url);
}