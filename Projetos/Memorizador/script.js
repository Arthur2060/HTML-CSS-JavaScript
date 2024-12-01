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
const metaisDeTransicao = "rgb(172, 0, 0)";

function mudarElemento(novaCor, novoSimbolo, novoNome, novoNumero){
    numeroAtomico.innerHTML = novoNumero
    simbolo.innerHTML = `<h1>${novoSimbolo}</h1>`;
    nome.innerHTML = novoNome;
    body.style.backgroundColor = novaCor;
}

function sortearElemento(){
    let numeroAleatorio = Math.trunc(Math.random() * 1000);

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
        case 37:
            mudarElemento(metalAlcalino, "Rb", "Rubídio", numeroAleatorio);
            break;
        case 38:
            mudarElemento(alcalinoTerroso, "Sr", "Estrôncio", numeroAleatorio);
            break;
        case 39:
            mudarElemento(metaisDeTransicao, "Y", "Ítrio", numeroAleatorio);
            break;
        case 40:
            mudarElemento(metaisDeTransicao, "Zr", "Zircônio", numeroAleatorio);
            break;
        case 41:
            mudarElemento(metaisDeTransicao, "Nb", "Nióbio", numeroAleatorio);
            break;
        case 42:
            mudarElemento(metaisDeTransicao, "Mo", "Molibdênio", numeroAleatorio);
            break;
        case 43:
            mudarElemento(metaisDeTransicao, "Tc", "Tecnécio", numeroAleatorio);
            break;
        case 44:
            mudarElemento(metaisDeTransicao, "Ru", "Rutênio", numeroAleatorio);
            break;
        case 45:
            mudarElemento(metaisDeTransicao, "Rh", "Ródio", numeroAleatorio);
            break;
        case 46:
            mudarElemento(metaisDeTransicao, "Pd", "Paládio", numeroAleatorio);
            break;
        case 47:
            mudarElemento(metaisDeTransicao, "Ag", "Prata", numeroAleatorio);
            break;
        case 48:
            mudarElemento(metaisDeTransicao, "Cd", "Cádmio", numeroAleatorio);
            break;
        case 49:
            mudarElemento(outrosMetais, "In", "Índio", numeroAleatorio);
            break;
        case 50:
            mudarElemento(outrosMetais, "Sn", "Estanho", numeroAleatorio);
            break;
        case 51:
            mudarElemento(semiMetais, "Sb", "Antimônio", numeroAleatorio);
            break;
        case 52:
            mudarElemento(semiMetais, "Te", "Telúrio", numeroAleatorio);
            break;
        case 53:
            mudarElemento(halogenios, "I", "Iodo", numeroAleatorio);
            break;
        case 54:
            mudarElemento(gasNobre, "Xe", "Xenónio", numeroAleatorio);
            break;
        case 55:
            mudarElemento(metalAlcalino, "Cs", "Césio", numeroAleatorio);
            break;
        case 56:
            mudarElemento(alcalinoTerroso, "Ba", "Bário", numeroAleatorio);
            break;
        case 72:
            mudarElemento(metaisDeTransicao, "Hf", "Háfnio", numeroAleatorio);
            break;
        case 73:
            mudarElemento(metaisDeTransicao, "Ta", "Tântalo", numeroAleatorio);
            break;
        case 74:
            mudarElemento(metaisDeTransicao, "W", "Tungstênio", numeroAleatorio);
            break;
        case 75:
            mudarElemento(metaisDeTransicao, "Re", "Rênio", numeroAleatorio);
            break;
        case 76:
            mudarElemento(metaisDeTransicao, "Os", "Ósmio", numeroAleatorio);
            break;
        case 77:
            mudarElemento(metaisDeTransicao, "Ir", "Irídio", numeroAleatorio);
            break;
        case 78:
            mudarElemento(metaisDeTransicao, "Pt", "Platina", numeroAleatorio);
            break;
        case 79:
            mudarElemento(metaisDeTransicao, "Au", "Ouro", numeroAleatorio);
            break;
        case 80:
            mudarElemento(metaisDeTransicao, "Hg", "Mercúrio", numeroAleatorio);
            break;
        case 81:
            mudarElemento(outrosMetais, "Ti", "Tálio", numeroAleatorio);
            break;
        case 82:
            mudarElemento(outrosMetais, "Pb", "Chumbo", numeroAleatorio);
            break;
        case 83:
            mudarElemento(outrosMetais, "Bi", "Bismuto", numeroAleatorio);
            break;
        case 84:
            mudarElemento(semiMetais, "Po", "Polonio", numeroAleatorio);
            break;
        case 85:
            mudarElemento(halogenios, "At", "Astato", numeroAleatorio);
            break;
        case 86:
            mudarElemento(gasNobre, "Rn", "Radonio", numeroAleatorio);
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