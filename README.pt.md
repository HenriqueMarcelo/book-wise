[English 🇬🇧](README.md)

## Book Wise

Book Wise é uma aplicação web que permite aos usuários fazerem avaliações de livros que já leram. Além disso, a plataforma exibe as avaliações feitas por outros usuários e a média de nota que os livros receberam. 

O login na aplicação é opcional e pode ser feito através do Google ou do Github. Os usuários não registrados podem visualizar as avaliações de outros usuários, mas não podem deixar avaliações.

## Funcionalidades

- Mostrar as avaliações feitas por outros usuários;
- Mostrar a média de nota que um livro tem;
- Exibir as avaliações mais recentes feitas na plataforma;
- Listagem dos livros mais populares;
- Filtragem de listagem de livros por categorias ou digitando o nome do livro ou autor em um campo de busca;
- Exibir a página de perfil com a listagem de todas as avaliações que o usuário fez;
- Mostrar o total de livros avaliados, quantos autores já foram lidos e a categoria mais lida pelo usuário;
- Opção de Login através do Google e do Github;
- Navegação na aplicação sem fazer login para visualização das avaliações de outros usuários.

## Tecnologias utilizadas

A aplicação Book Wise foi construída com as seguintes tecnologias:

- [NextJS](https://nextjs.org/) para a construção da aplicação web;
- [Prisma](https://www.prisma.io/) para a conexão e manipulação do banco de dados;
- [Radix](https://www.radix-ui.com/) para a criação de componentes visuais;
- [Stitches](https://stitches.dev/) para estilização;
- [Next Auth](https://next-auth.js.org/) para autenticação de usuários;
- [Next SEO](https://github.com/garmeeh/next-seo) para otimização de SEO;
- [TypeScript](https://www.typescriptlang.org/) para tipagem estática;
- [Axios](https://axios-http.com/) para requisições HTTP;
- [ESLint](https://eslint.org/) para padronização de código;
- [DateFNS](https://date-fns.org/) para manipulação de datas;
- [Phosphor Icons](https://phosphoricons.com/) para ícones;
- [Zod](https://github.com/colinhacks/zod) para validação de dados.

## Deploy

O deploy da aplicação Book Wise foi realizado na plataforma Vercel e o banco de dados foi hospedado na Planetscale.

Acesse a aplicação em: https://book-wise-two.vercel.app/

## Alguns comandos úteis

- `npx prisma init --datasource-provider SQLite`
- `npx prisma migrate dev`
- `npx prisma studio`
- `npx prisma db push`
- `npx prisma db seed`
