const simbolo = document.querySelector("#simbolo");
const nome = document.querySelector("#nome");
const body = document.querySelector("body");
const numeroAtomico = document.querySelector("#numeroAtomico")
const elemento = document.querySelector("#elemento");
const palpite = document.querySelector("#palpite");

const naoMetal = "rgb(0, 157, 248)";
const gasNobre = "rgba(255, 115, 115, 0.89)";
const metalAlcalino = "rgba(121, 255, 255, 0.795)";
const alcalinoTerroso = "rgba(255, 166, 83, 0.795)";
const semiMetais = "rgb(209, 209, 113)";
const halogenios = "blue";
const outrosMetais = "rgb(131, 224, 131)";
const metaisDeTransicao = "rgb(198, 137, 255)";

function mudarElemento(novaCor, novoSimbolo, novoNome, novoNumero){
    numeroAtomico.innerHTML = novoNumero
    simbolo.innerHTML = `<h1>${novoSimbolo}</h1>`;
    nome.innerHTML = novoNome;
    body.style.backgroundColor = novaCor;
}

function sortearElemento(){
    let numeroAleatorio = Math.trunc(Math.random() * 100);

    switch(numeroAleatorio){
        case 1:
            mudarElemento(naoMetal, "H", "Hidrogênio", numeroAleatorio);
            break;
        case 2:
            mudarElemento(gasNobre, "He", "Hélio", numeroAleatorio);
            break;
        case 3:
            mudarElemento(metalAlcalino, "Li", "Lítio", numeroAleatorio);
            break;
        case 4:
            mudarElemento(alcalinoTerroso, "Be", "Berilio", numeroAleatorio);
            break;
        case 5:
            mudarElemento(semiMetais, "B", "Boro", numeroAleatorio);
            break;
        case 6:
            mudarElemento(naoMetal, "C", "Carbono", numeroAleatorio);
            break;
        case 7:
            mudarElemento(naoMetal, "N", "Nitrogênio", numeroAleatorio);
            break;
        case 8:
            mudarElemento(naoMetal, "O", "Oxigênio", numeroAleatorio);
            break;
        case 9:
            mudarElemento(halogenios, "F", "Flúor", numeroAleatorio);
            break;
        case 10:
            mudarElemento(gasNobre, "Ne", "Neônio", numeroAleatorio);
            break;
        case 11:
            mudarElemento(metalAlcalino, "Na", "Sódio", numeroAleatorio);
            break;
        case 12:
            mudarElemento(alcalinoTerroso, "Mg", "Magnésio", numeroAleatorio);
            break;
        case 13:
            mudarElemento(outrosMetais, "Al", "Alumínio", numeroAleatorio);
            break;
        case 14:
            mudarElemento(semiMetais, "Si", "Silício", numeroAleatorio);
            break;
        case 15:
            mudarElemento(naoMetal, "P", "Fósforo", numeroAleatorio);
            break;
        case 16:
            mudarElemento(naoMetal, "S", "Enxofre", numeroAleatorio);
            break;
        case 17:
            mudarElemento(halogenios, "Cl", "Cloro", numeroAleatorio);
            break;
        case 18:
            mudarElemento(gasNobre, "Ar", "Argônio", numeroAleatorio);
            break;
        case 19:
            mudarElemento(metalAlcalino, "K", "Potássio", numeroAleatorio);
            break;
        case 20:
            mudarElemento(alcalinoTerroso, "Ca", "Cálcio", numeroAleatorio);
            break;
        case 21:
            mudarElemento(metaisDeTransicao, "Sc", "Escândio", numeroAleatorio);
            break;
        case 22:
            mudarElemento(metaisDeTransicao, "Ti", "Titânio", numeroAleatorio);
            break;
        case 23:
            mudarElemento(metaisDeTransicao, "V", "Vanádio", numeroAleatorio);
            break;
        case 24:
            mudarElemento(metaisDeTransicao, "Cr", "Cromo", numeroAleatorio);
            break;
        case 25:
            mudarElemento(metaisDeTransicao, "Mn", "Mangânes", numeroAleatorio);
            break;
        case 26:
            mudarElemento(metaisDeTransicao, "Fe", "Ferro", numeroAleatorio);
            break;
        case 27:
            mudarElemento(metaisDeTransicao, "Co", "Cobalto", numeroAleatorio);
            break;
        case 28:
            mudarElemento(metaisDeTransicao, "Ni", "Niquel", numeroAleatorio);
            break;
        case 29:
            mudarElemento(metaisDeTransicao, "Cu", "Cobre", numeroAleatorio);
            break;
        case 30:
            mudarElemento(metaisDeTransicao, "Zn", "Zinco", numeroAleatorio);
            break;
        case 31:
            mudarElemento(outrosMetais, "Ga", "Gálio", numeroAleatorio);
            break;
        case 32:
            mudarElemento(semiMetais, "Ge", "Germânio", numeroAleatorio);
            break;
        case 33:
            mudarElemento(semiMetais, "As", "Arsênio", numeroAleatorio);
            break;
        case 34:
            mudarElemento(naoMetal, "Se", "Selênio", numeroAleatorio);
            break;
        case 35:
            mudarElemento(halogenios, "Br", "Bromo", numeroAleatorio);
            break;
        case 36:
            mudarElemento(gasNobre, "Kr", "Criptônio", numeroAleatorio);
            break;
        
        default:
            sortearElemento();
            break;
    }
}

elemento.addEventListener('click', () => {
    let valorPalpite = palpite.value; 

    if(valorPalpite == nome.innerHTML){
        nome.style.color = "green";
    }else{
        nome.style.color = "red";
    }
});