const url = "http://localhost:3000/users"

document.getElementById("userForm").addEventListener("submit", 
    async function (event) {
    event.preventDefault()

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;

    const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome, email })
    });

    if (!response.ok) {
        alert("Falha ao salvar")
    } else {
        document.getElementById("userForm").reset();
        atualizar()
    }
});

async function atualizar() {
    const response = await fetch(url);
    const usuarios = await response.json();
    const lista = document.getElementById("userTable");

    lista.innerHTML = "";

    usuarios.forEach(user => {
        let novoUsuario = `
        <tr>
            <td>${user.id}</td>
            <td>${user.nome}</td>
            <td>${user.email}</td>
            <td><button onclick="deletar()">Excluir</button></td>
        </tr>\n
        `

        lista.innerHTML += novoUsuario
    });

    if (!response.ok) {
        alert("Falha ao carregar usuarios");
    }
}

async function deletar(id) {
    const response = await fetch(`${url}/${id.id}`, {
        method: "DELETE"
    });

    if (!response.ok) {
        alert("Erro ao deletar usuario!")
    }
}

atualizar()