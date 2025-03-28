<h1 align="center"> Teste Técnico - Whitebook Checkout </h1>

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![NextJS](https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![TypeScript](https://shields.io/badge/TypeScript-3178C6?logo=TypeScript&logoColor=FFF&style=flat-square)
![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)
![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)
![cypress](https://img.shields.io/badge/-cypress-%23E5E5E5?style=for-the-badge&logo=cypress&logoColor=058a5e)
![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)
![Prettier](https://img.shields.io/badge/prettier-%23F7B93E.svg?style=for-the-badge&logo=prettier&logoColor=black)

<p align="center"><i>Status do Projeto</i>: <b>Concluído</b></p>

## Overview

- Utilização de NextJS com React e Typescript, utilizando o pages router.
- Estilização com CSS Modules e SASS, para manter a consistência visual e reutilização de estilos e tokens conforme design do figma.
- Utilização do padrão Atomic Design para criação dos componentes de modo que facilita a organização e reutilização dos mesmos.
- Utilização de Zod para validação do formulário e react-hook-form para gestão do formulário.
- Testes unitários dos principais componentes com Jest e React Testing Library.
- Documentação dos 'test cases' de cada teste unitário. Para encontrá-la, veifique nas pastas dos componentes testados o arquivo '.testCases.md'.
- Testes end to end com Cypress, para validar o fluxo do checkout até a confirmação. Na pasta cypress/reports, tem o relatório em HTML que é gerado ao rodar o comando 'npm run cypress:report'.
- A página '/checkout/confirmation' que é a última etapa do fluxo, tem uma validação para não permitir o acesso a seu conteúdo sem a submissão concluída com sucesso do formulário de checkout. Neste caso, o usuário é redirecionado para a página '/checkout'. Além disso, se essa tela for recarregada, também será redirecionada ao checkout.
- Utilização por padrão da fonte DM Sans, disponível no Google Fonts.

## Funcionalidades

- **Página Inicial (/)**

  - [x] Botão de redirecionamento para a página de checkout.

- **Página do Checkout (/checkout)**

  - [x] Formulário de pagamento com validação de existência e formatos.
  - [x] Validação do número do cartão de crédito informado, colorindo apenas a bandeira relacionada a este número. As demais, sempre iniciam por padrão com um filtro de escala de cinza.
  - [x] Possibilidade de selecionar entre os planos disponíveis.

- **Página de Confirmação do Checkout (/checkout/confirmation)**

  - [x] Mostra as informações do plano assinado, bem como e-mail e cpf do usuário que efetuou a compra.
  - [x] Mostra 2 botões, sendo um para redirecionar para a Home, e outro para a área de gerenciar assinaturas(direcionamento fictício com '#gerenciar-assinatura', uma vez que não existe esta página criada)

## Diferenciais

- [x] Responsividade em dispositivos móveis.
- [x] Utilização de atributos WAI-ARIA para acessibilidade.
- [x] Aprimoramento de SEO através de meta tags.
- [x] Páginas customizadas dos erros: 404 e 500.
- [x] Tratamento de erros da aplicação.
- [x] Utilização de cache com o 'node-cache', para a requisição de buscar planos disponíveis, otimizando performance.
- [x] Utilização de Eslint e Prettier para manter uma padronização do código.
- [x] Utilização de Husky com Commitlint para padronização de commits, utilizando o método de Conventional Commits.

## Design no Figma

> https://www.figma.com/file/YqvAioQ7Txa5H3HUb4CYzf/PEBMED_-Testes-Front-end?nod%20e-id=1%3A444

## Deploy da Aplicação na vercel

> https://whitebook-checkout-one.vercel.app/

## Pre requisitos para rodar a aplicação:

- Node.js 18+
- npm 9+
- Git

## Overview dos Scripts:

### Inicializa o servidor de desenvolvimento

- npm run dev

### Roda build para produção

- npm run build

### Inicializa o servidor de produção

- npm start

### Aplica as regras do Eslint e Prettier ao código

- npm run lint

### Roda os testes unitários

- npm test

### Roda os testes unitários em modo (watch) para qualquer alteração reiniciar os testes

- npm test:watch

### Roda a parte de cobertura dos testes unitários

- npm run test:coverage

### Abre o dashboard do Cypress para visualização dos testes e2e

- npm run cypress:open

### Roda o Cypress no modo headless (sem ui) para gerar o relatório HTML

- npm run cypress:report

## Como rodar a aplicação:

1. No terminal, clone o projeto:

   > git clone https://github.com/matheusmantini/whitebook-checkout.git

2. Entre na pasta do projeto:

   > cd whitebook-checkout

3. Copiar o arquivo '.env.example' e renomeia-lo para '.env'.

4. Adicionar o seguinte conteúdo "https://private-0ced4-pebmeddesafiofrontend.apiary-mock.com/" na variável 'NEXT_PUBLIC_API_BASE_URL'.

5. Instale as dependências:

   > npm install

6. Execute a aplicação:

   > npm run dev

7. Pronto, agora é possível acessar a aplicação a partir da rota http://localhost:3000/

## Desenvolvedor

| [<img src="https://avatars.githubusercontent.com/u/71985890?v=4" width=115 > <br> <sub> Matheus Mantini </sub>](https://www.linkedin.com/in/matheusmantini/) |
| :----------------------------------------------------------------------------------------------------------------------------------------------------------: |
