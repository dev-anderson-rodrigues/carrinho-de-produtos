import { useProducts } from "../../context/ProductsContext";
import { useNavigate } from "react-router-dom";
import { ContainerJogos, ContainerMain } from "./styles";
import CardsJogos from "../../components/cards/Cards";

const Produtos = () => {
  const { products, countChecked } = useProducts();
  const navigate = useNavigate();
  const goToCar = () => {
    navigate("/carrinho");
  };

  const countProducts = countChecked;
  return (
    <ContainerMain>
      <h1>
        <span>Produtos</span>
        <span>
          {countProducts > 0 && (
            <div className="countProducts">{countProducts}</div>
          )}
        </span>
      </h1>
      <ContainerJogos>
        <CardsJogos products={products} page="products" />
      </ContainerJogos>
      <div className="botao">
        <button onClick={goToCar}>Ir Para o Carrinho</button>
      </div>
    </ContainerMain>
  );
};

export default Produtos;
