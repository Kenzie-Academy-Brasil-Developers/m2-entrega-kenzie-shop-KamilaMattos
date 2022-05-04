class Produtos {

    static criarCardProdutos(produtos) {
        // Selecionando container de cards
        const containerCards = document.querySelector('.container-cards')
        // Criando os elementos
        const card         = document.createElement('div')
        const divImg       = document.createElement('div')
        const img          = document.createElement('img')
        const divEstrela   = document.createElement('div')
        const p            = document.createElement('p')
        const preco        = document.createElement('div')
        const h3           = document.createElement('h3')
        const button       = document.createElement('button')
        const span         = document.createElement('span')

        // Atribuindo classe aos elementos
        card.classList.add('card')
        divImg.classList.add('div-img')
        divEstrela.classList.add('review-produto')
        preco.classList.add('preco')

        // Preenchendo os elementos
        img.src = `https://kenzie-academy-brasil.gitlab.io/fullstack/frontend/modulo2/sprint3/img/consumindo-api-produtos/${produtos.id}/Image.png`
        p.innerText = produtos.productName
        button.innerText = "COMPRAR"

        // Criando as estrelas com base nos reviews
        for(let i = 0; i < 5; i++) {
            const imgEstrela = document.createElement('img')
            imgEstrela.src = './src/imgs/estrelaAmarela.png'
            imgEstrela.classList.add('estrela-amarela')

            if(i > produtos.reviews) {
                imgEstrela.classList.add('estrela-vazia')
            }
            divEstrela.append(imgEstrela)
        }

        // Condição pra verificar produto em promoção
        if(produtos.promotionStatus == false) {
            h3.innerText = `R$ ${produtos.price.productPrice.toFixed(2)}`
        }
        else {
            span.innerText = `De: R$ ${produtos.price.productPrice.toFixed(2)}`
            h3.innerText = `Por: R$ ${produtos.price.productPromotionPrice.toFixed(2)}`
        }

        // Pendurando os elementos
        preco.append(span, h3)
        divImg.append(img)
        card.append(divImg, divEstrela, p, preco, button)
        containerCards.append(card)    
    }
}

export { Produtos }
