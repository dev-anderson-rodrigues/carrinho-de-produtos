import React from "react";
import { ContainerJogos, ContainerMain } from "./styles";
import CardsJogos from "../../components/cards/Cards";
import { useProducts } from "../../context/ProductsContext";

const Checkout = () => {
  const { productsChecked, countChecked, calculateTotal } = useProducts();
  const products = productsChecked.map((product) => {
    return {
      id: product.id,
      name: product.name,
      valor: product.valor,
      img: product.img,
      checked: product.checked,
      quantity: product.quantity,
    };
  });
  console.log(products);
  const namesProducts = products.find((name) => name.name);
  console.log(namesProducts);

  const goToCheckout = () => {
    alert(
      "Compra bem sucedida\n" +
        `Quantidade: ${countChecked}\n` +
        `Total da compra: ${calculateTotal()}`
    );
  };
  return (
    <ContainerMain>
      <h1>
        <span>Checkout</span>
      </h1>
      <h2>
        <span>Produtos escolhidos:</span>
      </h2>
      <ContainerJogos>
        <CardsJogos products={productsChecked} page="checkout" />
        <p className="total">Total de Produtos: {countChecked}</p>
        <p className="total">Total:{calculateTotal()}</p>
      </ContainerJogos>
      <div className="botao">
        <button onClick={goToCheckout}>Confirmar Compra</button>
      </div>
    </ContainerMain>
  );
};

export default Checkout;
