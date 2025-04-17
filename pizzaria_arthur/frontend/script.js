async function atualizarCardapio() {
    const cardapioExibido = document.getElementById("cardapio");

    const response = await fetch("http://localhost:3000/pizza");
    const data = await response.json()

    cardapioExibido.innerHTML = "";

    data.forEach(newItem => {
        cardapioExibido.innerHTML += `
            <li>
                <img src="${newItem.imagem}">
                <div>
                <h3>${newItem.nome}</h3>
                    <p>${newItem.descricao}</p>
                </div>
            </li>
        `
    });
}

async function cadastrarPizza() {
    const nome = document.getElementById("nome-pizza").value;
    const descricao = document.getElementById("descricao-pizza").value;
    const imagem = document.getElementById("imagem-pizza").value;

    const response = await fetch("http://localhost:3000/pizza", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome, descricao, imagem })
    })

    if (!response.ok) {
        return alert("Erro ao adicionar a pizza!")
    }

    alert("Pizza adicionada com sucesso!")
    atualizarCardapio()
}

document.getElementById("botao-pizza").addEventListener("click", (event) => {
    preventDefault()

    cadastrarPizza()
    atualizarCardapio()
})

async function login() {
    const email = document.getElementById("email-login").value;
    const senha = document.getElementById("senha-login").value;

    if (!email || !senha) {
        return alert("Por favor, preencha o email e a senha.");
    }

    const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, senha })
    });

    if (!response.ok) {
        return alert("Erro ao fazer login!");
    }

    const data = await response.json();

    alert(`Login efetuado com sucesso! Bem-vindo ${data.nome}`);

    if (data.email == "Pizzaria@gmail.com") {
        alternarPagina('conta-dono.html');
    } else {
        alternarPagina('index.html');
    }

}

async function cadastro() {
    const nome = document.getElementById("nome-cadastro").value;
    const email = document.getElementById("email-cadastro").value;
    const telefone = document.getElementById("telefone-cadastro").value;
    const endereco = document.getElementById("endereco-cadastro").value;
    const senha = document.getElementById("senha-cadastro").value;

    if (nome == "" || endereco == "" || telefone == "" || email == "" || senha == "") {
        return alert("Preencha todos os campos")
    }

    const response = await fetch("http://localhost:3000/cliente", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome, endereco, telefone, email, senha })
    })

    if (!response.ok) {
        return alert("Erro ao cadastrar usuario!")
    } else {
        alert("Usuario cadastrado com sucesso!");
    }

    alternarPagina('index.html')
}

async function verificarConta() {
    
    const conta = document.getElementById("conta")
    const response = await fetch("http://localhost:3000/conta");

    const data = await response.json();

    if (data.nome != "" && data.nome != null) {
        conta.innerHTML = ""
        conta.innerHTML = 
        `
        <h2>${data.nome}</h2>
        <h2>${data.email}</h2>
        <h2>${data.telefone}</h2>
        <h2>${data.endereco}</h2>
        <h2 id="senha-conta">***********</h2>
        <button type="button" onclick="alternarPagina('index.html')">Retornar a página inicial</button>
        <button type="button" onclick="deletarConta()"><strong>DELETAR MINHA CONTA</strong></button>
        `
    }
}

async function verificarContaHome() {
    const response = await fetch("http://localhost:3000/conta");

    const data = await response.json();

    if (data.nome != "" && data.nome != null) {
        const header = document.getElementById("container-cadastro-login")

        document.getElementById("container-cadastro-login").style.display = "flex"
        document.getElementById("container-cadastro-login").style.alignItems = "center"

        header.innerHTML = ""
        header.innerHTML =
        `
        <h3>${data.nome}</h3>
        <button type="button" onclick="logout()" id="botao-logout">Logout</button>
        <button type="button" onclick="alternarPagina('conta.html')">Conta</button>
        `
    }

}

async function logout() {
    const response = await fetch("http://localhost:3000/logout", {
        method: "DELETE"
    });

    location.reload()
}

async function deletarConta() {
    if (!window.confirm("Você tem certeza que quer deletar está conta?")) {
        return
    }

    const response = await fetch(`http://localhost:3000/cliente/${verificarConta().id}`, {
        method: "DELETE"
    });

    if (!response.ok) {
        return alert("Erro ao deletar conta!");
    }

    alert("Conta desativada com sucesso!");
    logout()
    alternarPagina('index.html')
}

function alternarPagina(destino) {
    window.location.href = destino;
}