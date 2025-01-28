// Variaveis

// "VAR" é uma variavel global, ou sejá, acessivel de qualquer ponto do código

var nome = "Rafael";
console.log(nome);

// Ex:

    if(true){
        var nomevar = "Arthur";
    }
    console.log(nomevar); // OK

// "LET" é acessivel somente no escopo em que é criado

let idade = 25;
console.log(idade);

// Ex:

    if(true){
        let nomelet = "Arthur";
        console.log(nomelet); // Visivel
    }
    console.log(nomelet); // Erro

// Também é global, porem ele permanece com um valor constante e imutavel

const PI = 3.14;
console.log(PI);

PI = 3.1312; //Erro