/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import { Container } from "./styles";
import { Product, useProducts } from "../../context/ProductsContext";

interface CardsJogosProps {
  products: Product[];
  page: string;
}

const CardsJogos: React.FC<CardsJogosProps> = ({ products, page }) => {
  const pageCar = page.includes("car");
  const pageCheckout = page.includes("checkout");
  const { toggleProduct, incrementQuantity, decrementQuantity } = useProducts();
  const itemsToRender = products;

  return (
    <Container className={pageCar ? "flex-container" : "grid-container"}>
      {itemsToRender.length > 0
        ? itemsToRender.map((item) => (
            <div
              key={item.id}
              className={
                pageCar
                  ? "img-container-page-car"
                  : "img-container-page-products"
              }
            >
              <img src={item.img} alt={item.name} />
              {!pageCar && !pageCheckout && (
                <label>
                  <span>
                    <input
                      type="checkbox"
                      checked={item.checked}
                      onChange={() => toggleProduct(item.id)}
                    />
                    <span className="customcheckbox"></span>
                  </span>
                  <span>
                    <p>Valor: {item.valor}</p>
                  </span>
                </label>
              )}
              {pageCar && (
                <div>
                  <h3>{item.name}</h3>
                  <p>Valor: {item.valor}</p>
                  <div>
                    <p>Quantitidade: {item.quantity}</p>
                    <span className="buttons">
                      <button
                        onClick={() => incrementQuantity(item)}
                        className={pageCar ? "button-page-car" : ""}
                      >
                        +
                      </button>
                      <button
                        onClick={() => decrementQuantity(item)}
                        className={pageCar ? "button-page-car" : ""}
                      >
                        -
                      </button>
                    </span>
                  </div>
                </div>
              )}
            </div>
          ))
        : "Nenhum item"}
    </Container>
  );
};

export default CardsJogos;
