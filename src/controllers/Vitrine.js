import { Produtos } from "../models/Produtos.js";
import { Requisicao } from "../models/Requisicao.js";

let produtos = await Requisicao.getProdutos()

class Vitrine {

    static mostrarProdutos() {

        produtos.forEach(item => {

            Produtos.criarCardProdutos(item)
            
        })
    }
}

export { Vitrine }