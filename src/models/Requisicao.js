class Requisicao {

   static async getProdutos() {
       
      const response = await fetch('https://m2-kenzie-shop.herokuapp.com/products')
      const data = await response.json()
      return data.products
   }
}

export{ Requisicao }