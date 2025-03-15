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

        botaoEditar.textContent = "Editar"
        botaoExcluir.textContent = "Excluir";
        
        botaoEditar.classList = "botaoEditar"
        botaoExcluir.classList = "botaoExcluir"

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

atualizarLista();