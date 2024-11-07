const simbolo = document.querySelector("#simbolo");
const nome = document.querySelector("#nome");
const body = document.querySelector("body");
const numeroAtomico = document.querySelector("#numeroAtomico")
const elemento = document.querySelector("#elemento");

function mudarElemento(novaCor, novoSimbolo, novoNome, novoNumero){
    numeroAtomico.innerHTML = novoNumero
    simbolo.innerHTML = `<h1>${novoSimbolo}</h1>`;
    nome.innerHTML = `<p>${novoNome}</p>`;
    body.style.backgroundColor = novaCor;
}

function sortearElemento(){
    let numeroAleatorio = Math.trunc(Math.random() * 100);

    switch(numeroAleatorio){
        case 1:
            mudarElemento("rgb(0, 157, 248)", "H", "Hidrogenio", numeroAleatorio);
            break;
        case 2:
            mudarElemento("rgba(255, 115, 115, 0.89)", "He", "Hélio", numeroAleatorio);
            break;
        case 3:
            mudarElemento("rgba(121, 255, 255, 0.795)", "Li", "Lítio", numeroAleatorio);
            break;
        case 4:
            mudarElemento("rgba(255, 166, 83, 0.795)", "Be", "Berilio", numeroAleatorio);
            break;
        case 5:
            mudarElemento("rgb(209, 209, 113)", "B", "boro", numeroAleatorio);
            break;
        case 6:
            mudarElemento("blue", "C", "Carbono", numeroAleatorio);
            break;
        case 7:
            mudarElemento("blue", "N", "Nitrogênio", numeroAleatorio);
            break;
        case 8:
            mudarElemento("blue", "O", "Oxigênio", numeroAleatorio);
            break;
        case 9:
            mudarElemento("blue", "F", "Flúor", numeroAleatorio);
            break;
        case 10:
            mudarElemento("rgba(255, 115, 115, 0.89)", "Ne", "Neônio", numeroAleatorio);
            break;
        case 11:
            mudarElemento("rgba(121, 255, 255, 0.795)", "Na", "Sódio", numeroAleatorio);
            break;
        case 12:
            mudarElemento("rgba(255, 166, 83, 0.795)", "Mg", "Magnésio", numeroAleatorio);
            break;
        case 13:
            mudarElemento("rgb(131, 224, 131)", "Al", "Alumínio", numeroAleatorio);
            break;
        case 14:
            mudarElemento("rgb(209, 209, 113)", "Si", "Silício", numeroAleatorio);
            break;
        case 15:
            mudarElemento("blue", "P", "Fósforo", numeroAleatorio);
            break;
        case 16:
            mudarElemento("blue", "S", "Enxofre", numeroAleatorio);
            break;
        case 17:
            mudarElemento("blue", "Cl", "Cloro", numeroAleatorio);
            break;
        case 18:
            mudarElemento("rgba(255, 115, 115, 0.89)", "Ar", "Argônio", numeroAleatorio);
            break;
        case 19:
            mudarElemento("rgba(121, 255, 255, 0.795)", "K", "Potássio", numeroAleatorio);
            break;
        case 20:
            mudarElemento("rgba(255, 166, 83, 0.795)", "Ca", "Cálcio", numeroAleatorio);
            break;
        case 21:
            mudarElemento("rgb(198, 137, 255)", "Sc", "Escândio", numeroAleatorio);
            break;
        case 22:
            mudarElemento("rgb(198, 137, 255)", "Ti", "Titânio", numeroAleatorio);
            break;
        case 23:
            mudarElemento("rgb(198, 137, 255)", "V", "Vanádio", numeroAleatorio);
            break;
        case 24:
            mudarElemento("rgb(198, 137, 255)", "Cr", "Cromo", numeroAleatorio);
            break;
        case 25:
            mudarElemento("rgb(198, 137, 255)", "Mn", "Mangânes", numeroAleatorio);
            break;
        case 26:
            mudarElemento("rgb(198, 137, 255)", "Fe", "Ferro", numeroAleatorio);
            break;
        case 27:
            mudarElemento("rgb(198, 137, 255)", "Co", "Cobalto", numeroAleatorio);
            break;
        case 28:
            mudarElemento("rgb(198, 137, 255)", "Ni", "Niquel", numeroAleatorio);
            break;
        case 29:
            mudarElemento("rgb(198, 137, 255)", "Cu", "Cobre", numeroAleatorio);
            break;
        case 30:
            mudarElemento("rgb(198, 137, 255)", "Zn", "Zinco", numeroAleatorio);
            break;
        case 31:
            mudarElemento("rgb(198, 137, 255)", "Ga", "Gálio", numeroAleatorio);
            break;
        
        default:
            sortearElemento();
            break;
    }
}

elemento.addEventListener('click', () => {
    nome.style.color = "white";
});