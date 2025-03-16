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

        botaoExcluir.onclick = function () {
            excluirTarefa(task.id);
        }

        botaoExcluir.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                                            <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
                                            </svg>`;

        botaoExcluir.classList = "botaoExcluir"
        checkbox.classList = "checkbox"

        checkbox.type = "checkbox";

        novaTarefa.insertCell().appendChild(checkbox);
        novaTarefa.insertCell().textContent = task.titulo;
        novaTarefa.insertCell().textContent = task.descricao;
        novaTarefa.insertCell().textContent = (task.data == null || task.data == "") ? "Sem data especificada" : task.data;
        novaTarefa.insertCell().textContent = (task.hora == null || task.hora == "") ? "Sem hora especificada" : task.hora;
        novaTarefa.insertCell().appendChild(botaoExcluir)

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

atualizarLista();