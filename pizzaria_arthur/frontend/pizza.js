class pizza {
    
    constructor(id, imagem, nome, descricao) {
        this.id = id;
        this.nome = nome;
        this.imagem = imagem;
        this.descricao = descricao;
    }

    get id () {
        return this.id;
    }

    get nome () {
        return this.nome;
    }

    get imagem () {
        return this.imagem;
    }

    get descricao () {
        return this.descricao;
    }
}