
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
    
    alternarPagina('index.html');
}

document.getElementById("botao-login").addEventListener("click", (event) => {
    event.preventDefault();
    login();
});

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
        body: JSON.stringify({ nome, endereco, telefone, email,   senha })
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