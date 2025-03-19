class ResistorQuatroFaixas {

    Constructor (nome, resistencia, tolerancia) {
        this.nome = nome
        this.resistencia = resistencia
        this.tolerancia = tolerancia
    }

    getNome () {
        return this.nome;
    }

    setNome (nome) {
        this.nome = nome;
    }

    getResistencia () {
        return this.resistencia;
    }

    setResistencia (resistencia) {
        this.resistencia = resistencia;
    }

    getTolerancia () {
        return this.tolerancia;        
    }

    setTorlerancia (tolerancia) {
        this.tolerancia = tolerancia
    }

    static calcularCores () {
        const tabelaDeCores = 
        [
            ["preto", 0, 0, 1, null],
            ["marrom", 1, 1, 10, 1],
            ["vermelho", 2, 2, 100, 2],
            ["laranja", 3, 3, 1000, null],
            ["amarelo", 4, 4, 10000, null],
            ["verde", 5, 5, 100000, 0.5],
            ["azul", 6, 6, 1000000, 0.25],
            ["violeta", 7, 7, 10000000, 0.1],
            ["cinza", 8, 8, 100000000, 0.05],
            ["branco", 9, 9, 1000000000, null],
            ["dourado", null, null, 1, 5],
            ["prateado", null, null, 1, 10],
            [null, null, null, 1, 20],
        ]

        let resistenciaSeparada = String.toString(this.resistencia).split();
        let cores = [];

        resistenciaSeparada.forEach(numero => {
            const numeroIndex = resistenciaSeparada.indexOf(numero);
            
            calcularDuasPrimeirasFaixas(numeroIndex);

            descobrirPenultimaCor(resistenciaSeparada);


        });
    }

    static calcularDuasPrimeirasFaixas(numeroIndex) {
        if (numeroIndex <= 2) {
            tabelaDeCores.forEach(linha => {
                if (parseInt(linha[numeroIndex]) == parseInt(numero));
                cores.push(linha[0]);
            });
        } else {
            return
        }
    }

    static descobrirPenultimaCor(resistencia) {
        tabelaDeCores.forEach(linha => {
            if (Array(resistencia).length - 2 == parseInt(linha[3])) {
                cores.push(linha[0])
            }
        })
    }
}