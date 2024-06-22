import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import batterfild from "../images/cardJogos/Rectangle 66.png";
import callofduth from "../images/cardJogos/Rectangle 67.png";
import darkSouls from "../images/cardJogos/Rectangle 68.png";
import residentEvil from "../images/cardJogos/Rectangle 71.png";
import godOfwar from "../images/cardJogos/Rectangle 72.png";
import horizon from "../images/cardJogos/Rectangle 75.png";

export interface Product {
  id: number;
  name: string;
  valor: string;
  img: string;
  checked: boolean;
  quantity: number;
}

interface ProductsContextType {
  products: Product[];
  toggleProduct: (id: number) => void;
  countChecked: number;
  productsChecked: Product[];
  calculateTotal: () => string;
  incrementQuantity: (id: Product) => void;
  decrementQuantity: (id: Product) => void;
}

const ProductsContext = createContext<ProductsContextType | undefined>(
  undefined
);

const ProductsProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<Product[]>([
    {
      id: 1,
      name: "batterfild",
      valor: "R$5,00",
      img: batterfild,
      checked: false,
      quantity: 1,
    },
    {
      id: 2,
      name: "callofduth",
      valor: "R$12,00",
      img: callofduth,
      checked: false,
      quantity: 1,
    },
    {
      id: 3,
      name: "darkSouls",
      valor: "R$15,00",
      img: darkSouls,
      checked: false,
      quantity: 1,
    },
    {
      id: 4,
      name: "residentEvil",
      valor: "R$10,00",
      img: residentEvil,
      checked: false,
      quantity: 1,
    },
    {
      id: 5,
      name: "godOfwar",
      valor: "R$20,00",
      img: godOfwar,
      checked: false,
      quantity: 1,
    },
    {
      id: 6,
      name: "horizon",
      valor: "R$25,00",
      img: horizon,
      checked: false,
      quantity: 1,
    },
  ]);

  const [countChecked, setCountChecked] = useState<number>(0);
  const [productsChecked, setProductsChecked] = useState<Product[]>([]);

  const updateCheckedStatus = (updatedProducts: Product[]) => {
    const checkedProducts = updatedProducts.filter(
      (product) => product.checked
    );
    setCountChecked(checkedProducts.length);
    setProductsChecked(checkedProducts);
  };

  useEffect(() => {
    updateCheckedStatus(products);
  }, [products]);

  const toggleProduct = (id: number) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id ? { ...product, checked: !product.checked } : product
      )
    );
  };

  const incrementQuantity = (id: Product) => {
    const product = productsChecked.includes(id);
    if (product) {
      products.forEach((product) => {
        if (countChecked < product.quantity) {
          product.quantity = 1;
        }
        if (product.id === id.id) {
          product.quantity = product.quantity + 1;
        }
        setCountChecked(countChecked + 1);
      });
    }
  };

  const decrementQuantity = (id: Product) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id.id && product.checked && product.quantity > 1
          ? { ...product, quantity: product.quantity - 1 }
          : product.id === id.id && product.checked && product.quantity === 1
          ? { ...product, checked: false, quantity: 1 }
          : product
      )
    );
  };
  // setTotalQuantity();
  const calculateTotal = () => {
    const total = productsChecked.reduce((acc, product) => {
      return (
        acc +
        product.quantity *
          parseFloat(product.valor.replace("R$", "").replace(",", "."))
      );
    }, 0);

    return `R$${total.toFixed(2).replace(".", ",")}`;
  };

  // console.log('AQUI'+productsChecked)
  return (
    <ProductsContext.Provider
      value={{
        products,
        toggleProduct,
        countChecked,
        productsChecked,
        calculateTotal,
        incrementQuantity,
        decrementQuantity,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

const useProducts = () => {
  const context = useContext(ProductsContext);
  if (!context) {
    throw new Error("useProducts must be used within a ProductsProvider");
  }
  return context;
};

export { ProductsProvider, useProducts };
