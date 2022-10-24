import "bootstrap/dist/css/bootstrap.css"
// import Button from "./components/Button"
import React from "react"

export default function App(){
  const [items, setItems] = React.useState(0);
  const [amount, setAmount] = React.useState(0);
  const [products, setProducts] = React.useState([]);

  React.useEffect(() =>{
    fetch ('http://192.168.3.112:8000/produtos')
    .then(res => res.json())
    .then (dados => setProducts(dados));
  },[]);

  const add = (price) => {
    setItems(items + 1);
    setAmount(amount + price);
  }

  return (
<div className="container">

    <h1 className="mt-3">Carrinho de Compras</h1>
    <span className="text-primary ms-3 qtcart">Qtde de Itens do carrinho: {items}<br></br></span>
    <span className="text-primary ms-3 qtcart">Valor total da compra R$ {amount},00</span>
  <hr/>
    {/* Comunicação com a api */}
    {products.length} Produtos Encontrados no carrinho (Api)
  <hr/>

    {products.map(cadaProduto => {
      return (
        <div>
        <span className="me-3">{cadaProduto.nome}</span>
        <button className="btn btn-success btn-sm" onClick={() =>
        add(cadaProduto.valor)}>Adicionar</button>
        </div>
      )
    })}

  <div className="products-container">
    <div>
      <span className="me-3">Teclado R$32,00<br></br></span>
      <button className="btn btn-success btn-sm" onClick={() => add (32)}>Adicionar ao carrinho</button>
    </div>

    <div>
      <span className="me-3">Mouse R$20,00<br></br></span>
      <button className="btn btn-success btn-sm" onClick={() => add (20)}>Adicionar ao carrinho</button>
    </div>

    <div>
      <span className="me-3">Cadeira Gamer R$2200,00<br></br></span>
      <button className="btn btn-success btn-sm" onClick={() => add (2200)}>Adicionar ao carrinho</button>
    </div>
  </div>

</div>
  )
}