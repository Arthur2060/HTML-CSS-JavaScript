const url = "http://localhost:3000";
            
            async function atualizarLista() {
                const response = await fetch(`${url}/tarefas`);
                const novalista = await response.json();
                const lista = document.getElementById("lista");
                
                lista.innerHTML = "";

                novalista.forEach(task => {
                    let novaTarefa = lista.insertRow();
                    let checkbox = document.createElement("input");
                    
                    checkbox.type = "checkbox";

                    novaTarefa.insertCell(0).innerHTML = `<input type="checkbox">`;
                    novaTarefa.insertCell(1).textContent = task.titulo;
                    novaTarefa.insertCell(2).textContent = task.descricao;
                    novaTarefa.insertCell(3).textContent = (task.data == null) ? "Sem data especificada": task.data;
                    novaTarefa.insertCell(4).textContent = (task.hora == null) ? "Sem hora especificada": task.hora;

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

                if (response.ok){
                    atualizarLista()
                } else {
                    alert("Erro ao adicionar tarefa a lista!");
                }
            }

            atualizarLista();