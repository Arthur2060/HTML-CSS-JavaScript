function exibirErro(campo, menssagem) {
    document.getElementById(`erro-${campo}`).textContent = menssagem
}

function limparErros() {
    exibirErro("nome", "");
    exibirErro("email", "");
    exibirErro("tel", "");
}

function validarOsCampos() {
    let nome = document.getElementById("nome").value.trim();
    let email = document.getElementById("email").value.trim();
    let tel = document.getElementById("tel").value.trim();

    let valido = true;

    limparErros()

    if (nome === "") {
        exibirErro("nome", "O nome é obrigatório!");
        valido = false
    } else
    if (email === "") {
        exibirErro("email", "O email é obrigatório!");
        valido = false
    } else
    if (!email.includes("@")) {
        exibirErro("email", "Informe um email valido");
        valido = false
    } else
    if (tel === "") {
        exibirErro("tel", "O telefone é obrigatório!");
        valido = false
    } 

    return valido
}