<h1 align="center">
<br>
  <img src="https://svgshare.com/i/JTF.svg" alt="logo" width="120">
<br>
<br>
Find Dev
</h1>

<p align="center">Application to search for a github user by username, if found, return your repositories.</p>

<div>
  <p align="center">
    <img src="https://i.imgur.com/3zTpkYa.gif" alt="demo-web" width="800">
  <p align="center">
</div>

<hr />

## Recursos

Este aplicativo apresenta todas as mais recentes ferramentas e práticas em desenvolvimento

- **Vue** — The Progressive JavaScript Framework
- **Vuex** — Vuex é um padrão de gerenciamento de estado + biblioteca para aplicativos Vue.js.
- **Axios** — Cliente HTTP baseado em promise para o navegador e node.js
- **Bootstrap** — É um kit de ferramentas de código aberto para desenvolvimento com HTML, CSS e JS.
- **Lodash** — Biblioteca de utilitários JavaScript que oferece modularidade, desempenho e extras.
- **Font-awesome** — O conjunto de ícones mais popular e mais fácil de usar do mundo.
- **Eslint** — Encontra e corrija problemas no seu código JavaScript.
- **Prettier** — Um formatador de código opinativo. 

## Começando

1. Clone este repositório usando `git clone https://github.com/jcolscript/find-dev.git`
2. Mova-se para o diretório apropriado: `cd find-dev` <br />
3. Renomear o arquivo .env.example para .env. e adicione o seu token do github (não obrigatorio mas limitante em relação aos requests) <br />
4. Execute `yarn` para instalar as dependências <br />
5. Execute `yarn serve` para rodar a aplicação em modo de desenvolvimento

## Começando com Docker

1. Clone este repositório usando `git clone https://github.com/jcolscript/find-dev.git`
2. Mova-se para o diretório apropriado: `cd find-dev` <br />
3. Renomear o arquivo .env.example para .env. e adicione o seu token do github (não obrigatorio mas limitante em relação aos requests) <br />
4. Execute `docker-compose up -d --build` para criar um container com a aplicação <br />
5. Após a criação do container acesse `https://localhost:8080`.

## Testes Unitários

1. Mova-se para o diretório apropriado: `cd find-dev` <br />
2. Execute `yarn test:unit` para rodar os testes unitários

## Lint do projeto

1. Mova-se para o diretório apropriado: `cd find-dev` <br />
2. Execute `yarn lint` para encontrar e corrigir problemas no seu código.

## Build do projeto

1. Mova-se para o diretório apropriado: `cd find-dev` <br />
2. Execute `yarn build` para a concatenação e minificação de scripts e toda lógica de criação de bundle do Webpack.
2. Basta enviar para o servidor o conteudo da dist
