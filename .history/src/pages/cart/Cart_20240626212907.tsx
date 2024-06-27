import React from "react";
import { ContainerJogos, ContainerMain } from "./styles";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../../context/ProductsContext";
import CardsJogos from "../../components/cards/styles";

const Carrinho = () => {
  const { productsChecked, countChecked, calculateTotal } = useProducts();
  const navigate = useNavigate();

  const goToCheckout = () => {
    navigate("/checkout");
  };

  return (
    <div>
      <ContainerMain>
        <h1>
          <span>Carrinho</span>
          <span>
            {countChecked > 0 && (
              <div className="countProducts">{countChecked}</div>
            )}
          </span>
        </h1>
        <ContainerJogos>
          <CardsJogos products={productsChecked} page="car" />
        </ContainerJogos>
        <div className="botao">
          <p>Total: {calculateTotal()}</p>
          <button onClick={goToCheckout}>Ir Para Checkout</button>
        </div>
      </ContainerMain>
    </div>
  );
};

export default Carrinho;
