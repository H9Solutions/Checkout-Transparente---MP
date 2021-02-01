<h1 align="center">Checkout do Mercado Pago</h1>
<p align="center">Configurando o checkout transparente em cinco minutos!</p>

<p align="center">
<img src="https://img.shields.io/static/v1?label=Checkout&message=MP&color=009ee3&style=for-the-badge&logo=ghost"/>
</p>

### 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [Node.js](https://nodejs.org/en/)
- [Express.js](https://expressjs.com/)

<p>Créditos especiais <a target="_blank" href="https://medium.com/integra%C3%A7%C3%A3o-de-pagamentos-com-mercado-pago-e-react/integra%C3%A7%C3%A3o-de-pagamentos-com-react-native-node-js-e-smartcheckout-do-mercado-pago-64eedbb0eae9">@Alisson Allebrand</a></p>

<h2>Install instructions</h2>
<h4>Getting Started</h4>
<ul>
  <li>1.1) <code>git clone https://github.com/H9Solutions/CheckoutTransparente</code></li>
  <li>1.2) <code>cd CheckoutTransparente</code></li>
  <li>1.2) <code>yarn install</code> ou <code>npm install</code></li>
</ul>

<h4>Start your app</h4>
<ul>
  <li>
    Em <code>/configuracoes.js</code> insira seu <code>access_token</code> do mercado pago. 
  </li>
  <li>
    Em <code>/configuracoes.js</code> insira seu <code>sandbox</code>. Valor <code>true</code> em ambiente de testes ou <code>false</code> em produção.
  </li>
   <li>
    Em <code>/configuracoes.js</code> insira seu <code>api_port</code>. Porta 3000 por padrão. 
  </li>
  <li>Execute <code>yarn start</code> ou <code>npm start</code> para inicializar o projeto.</li>
  
</ul>


<h4>Testando aplicação</h4>
Faça uma requisição GET para <code>http://localhost:3000/payments/checkout/:id/:email/:description/:amount</code> onde: <br>

<code>id: number</code> - Número da transação (Você mesmo define) <br>
<code>email: string</code> - Email do comprador (Não poderá ser o mesmo do dono do TOKEN)<br>
<code>description: string</code> - Descrição da compra<br>
<code>ammount: number</code> - Valor da compra;<br><br>


<h4> Exemplo: </h4>
<code>http://localhost:3000/payments/checkout/1/paulo@gmail.com/mascarasdegel/12.50</code>