const url = "http://localhost:3000";

async function atualizarLista() {
    const response = await fetch(`${url}/tarefas`);
    const novalista = await response.json();
    const lista = document.getElementById("lista");

    lista.innerHTML = "";

    novalista.forEach(task => {
        let novaTarefa = lista.insertRow();
        let checkbox = document.createElement("input");
        let botaoExcluir = document.createElement("button")
        let botaoEditar = document.createElement("button")

        botaoExcluir.onclick = function () {
            excluirTarefa(task.id);
        }

        botaoEditar.onclick = function () {
            editarTarefa(task);
        }

        botaoEditar.textContent = "Editar"
        botaoExcluir.textContent = "Excluir";
        
        botaoEditar.classList = "botaoEditar"
        botaoExcluir.classList = "botaoExcluir"
        checkbox.classList = "checkbox"

        checkbox.type = "checkbox";

        novaTarefa.insertCell().appendChild(checkbox);
        novaTarefa.insertCell().textContent = task.titulo;
        novaTarefa.insertCell().textContent = task.descricao;
        novaTarefa.insertCell().textContent = (task.data == null) ? "Sem data especificada" : task.data;
        novaTarefa.insertCell().textContent = (task.hora == null) ? "Sem hora especificada" : task.hora;
        novaTarefa.insertCell().appendChild(botaoExcluir)
        novaTarefa.insertCell().appendChild(botaoEditar)

        lista.appendChild(novaTarefa);
    });

}

async function adicionarTarefa() {
    const titulo = document.getElementById("titulo").value;
    const descricao = document.getElementById("descricao").value;
    const data = document.getElementById("data").value;
    const hora = document.getElementById("hora").value;

    const response = await fetch((`${url}/tarefas`), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ titulo, descricao, data, hora })
    });

    if (response.ok) {
        atualizarLista()
    } else {
        alert("Erro ao adicionar tarefa a lista!");
    }
}

async function excluirTarefa(id) {
    const response = await fetch((`${url}/tarefas/${id}`), {
        method: "DELETE"
    });

    if (!response.ok) {
        alert("Erro ao excluir tarefa");
    }
}

function editarTarefa(task) {
    let titulo = document.getElementById("titulo").value;
    let descricao = document.getElementById("descricao").value;
    let data = document.getElementById("data").value;
    let hora = document.getElementById("hora").value;

    titulo = task.titulo;
    descricao = task.descricao;
    data = task.data;
    hora = task.hora;

    const botao = document.getElementById("botaoAdicionar");

    botao.addEventListener = ("click", async function () {
        const response = await fetch(`${url}/tarefas/${task.id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: { titulo, descricao, data, hora }
        });

        if (!response.ok) {
            alert("Erro ao alterar tarefa");
        }
    });
}

atualizarLista();