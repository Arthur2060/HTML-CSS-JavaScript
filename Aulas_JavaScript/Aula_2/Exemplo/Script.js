// //------------------------------------------Variaveis----------------------------------------//
//
// // "VAR" é uma variavel global, ou sejá, acessivel de qualquer ponto do código
//
// var nome = "Rafael";
// console.log(nome);
//
// // Ex:
//
//     if(true){
//         var nomevar = "Arthur";
//     }
//     console.log(nomevar); // OK
//
// // "LET" é acessivel somente no escopo em que é criado
//
// let idade = 25;
// console.log(idade);
//
// // Ex:
//
//     if(true){
//         let nomelet = "Arthur";
//         console.log(nomelet); // Visivel
//     }
//     console.log(nomelet); // Erro
//
// // "CONST" Também é global, porem ele permanece com um valor inicial constante e imutavel
//
// const PI = 3.14;
// console.log(PI);
//
// PI = 3.1312; //Erro
//
// Para exibir o tipo de uma variavel:
//
// console.log(typeof nomeDaVariavel);

function exibirNome(){
    const nome = document.getElementById("nomeUsuario").value;
    document.getElementById("resultado").innerText = `Olá ${nome}!`
}

function somarNumeros(){
    const numero1 = parseFloat(document.getElementById("numero1").value);
    const numero2 = parseFloat(document.getElementById("numero2").value);
    const opeacao = document.getElementById("operacao").value;
    
    let soma;
    
    switch(opeacao){
        case "+":
            soma = numero1 + numero2;
            break;
        case "-":
            soma = numero1 - numero2;
            break;
        case "*":
            soma = numero1 * numero2;
            break;
        case "/":
            soma = numero1 / numero2;
            break;
    }

    document.getElementById("resultadoSoma").innerText = `O resultado é: ${soma}!`
}