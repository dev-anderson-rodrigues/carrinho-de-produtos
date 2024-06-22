// import ContainerCenter from "./components/containerCenter/Container";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Produtos from "./pages/produtos/Produtos";
import { Routes, Route, } from 'react-router-dom';
// import Produtos from "./pages/produtos/Produtos";
import { ContainerApp, ContainerCenterApp, FooterBotoom, HeaderTop, ContainerMain } from "./styles/AppStyles";
import Checkout from "./pages/checkout/Checkout";
import Carrinho from "./pages/carrinho/Carrinho";


function App() {
  return (
    <ContainerApp>
      <ContainerCenterApp>
        <HeaderTop><Header/></HeaderTop>
                                  <ContainerMain>
                                        <Routes>
                                          <Route path="/" element={<Produtos/>} />
                                          <Route path="/carrinho" element={<Carrinho/>} />
                                          <Route path="/checkout" element={<Checkout/>} />
                                        </Routes>
                                  </ContainerMain>
        <FooterBotoom ><Footer/></FooterBotoom>
      </ContainerCenterApp>
    </ContainerApp>
  )
}

export default App
