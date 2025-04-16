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
        headers: {"Content-Type": "application/json"},
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
        headers: {"Content-Type": "application/json"},
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
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({ nome, endereco, telefone, email, senha })
    })
    
    if (!response.ok){
        return alert("Erro ao cadastrar usuario!")
    } else {
        alert("Usuario cadastrado com sucesso!");
    }

    alternarPagina('index.html')
}

function alternarPagina(destino) {
    window.location.href = destino;
}