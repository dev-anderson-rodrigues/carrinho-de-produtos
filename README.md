<h1>Projeto de Listagem de Produtos e Carrinho de Compras em React</h1>

![Demo GIF](demo.gif)

## Visão Geral

Este projeto é uma aplicação simples em React que simula uma loja online de jogos virtuais. Permite aos usuários visualizar uma lista de produtos, adicionar produtos ao carrinho de compras, remover produtos do carrinho e simular um processo de checkout.

Funcionalidades
Listagem de Produtos: Renderiza uma lista de produtos fictícios obtidos de uma fonte de dados simulada.
Carrinho de Compras: Permite adicionar e remover produtos do carrinho. Usa Context API do React para gerenciar o estado global do carrinho.
Checkout Simulado: Ao finalizar a seleção dos produtos, exibe um alerta simulando uma compra bem-sucedida.

## Instalação

Para executar este projeto localmente, siga estas etapas:

1. Clone este repositório:
   ```bash
   git clone https://github.com/dev-anderson-rodrigues/carrinho-de-produtos.git
   ```
   
2. Navegue até o diretório do projeto:
   ```bash
   cd carrinho-de-produtos

   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

4. Inicie a aplicação:
   ```bash
   npm start
   ```

5. Abra [http://localhost:5173](http://localhost:5173/) no seu navegador para visualizar o projeto.

## Estrutura de Diretórios

```
/src
  /components
    /cards
      - Cards.tsx
      - cards.ts
    /footer
      - Footer.tsx
      - styles.ts
    /header
      - Header.tsx
      - styles.ts
  /contexts
    - ProductsContext.tsx
  /images
      ... png
  /pages
    /cart
      - Cart.tsx
      - styles.ts
    /checkout
      - Checkout.tsx
      - styles.ts
    /products
      - Products.tsx
      - styles.ts
  /styles
    - AppStyles.ts
    - GlobalStyles.ts
  App.ts
  main.ts
```

## Rotas

```tsx
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Produtos from "./pages/products/Products";
import { Routes, Route } from "react-router-dom";
import {
  ContainerApp,
  ContainerCenterApp,
  FooterBotoom,
  HeaderTop,
  ContainerMain,
} from "./styles/AppStyles";
import Checkout from "./pages/checkout/Checkout";
import Carrinho from "./pages/cart/Cart";

function App() {
  return (
    <ContainerApp>
      <ContainerCenterApp>
        <HeaderTop>
          <Header />
        </HeaderTop>
        <ContainerMain>
          <Routes>
            <Route path="/" element={<Produtos />} />
            <Route path="/carrinho" element={<Carrinho />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </ContainerMain>
        <FooterBotoom>
          <Footer />
        </FooterBotoom>
      </ContainerCenterApp>
    </ContainerApp>
  );
}

export default App;

```

## Contribuição

Contribuições são bem-vindas! Para contribuir com o projeto, siga estas etapas:

1. Faça um fork do projeto e clone-o localmente.
2. Crie uma nova branch (`git checkout -b feature/nova-feature`).
3. Commit suas alterações (`git commit -am 'Adiciona nova feature'`).
4. Faça push para a branch (`git push origin feature/nova-feature`).
5. Crie um novo Pull Request.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

## Contato

Para mais informações, entre em contato via email: andersoncassio200@gmail.com

---
