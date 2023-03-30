[English 🇬🇧](README.md)

## Book Wise

Book Wise is a web application that allows users to rate books they have read. In addition, the platform displays the reviews made by other users and the average rating the books have received. 

Logging into the application is optional and can be done through Google or Github. Unregistered users can view other users' ratings, but cannot leave ratings.

## Functionalities

- Show the ratings made by other users;
- Show the average rate a book has;
- Display the most recent evaluations made on the platform;
- Listing the most popular books;
- Filter book listings by category or by entering the name of the book or author in a search field;
- Display the profile page listing all the evaluations the user has done;
- Display the total books reviewed, how many authors have been read, and the category most read by the user;
- Login option through Google and Github;
- Browsing the application without logging in to view other users' ratings.

## Technologies used

The Book Wise application was built with the following technologies:

- [NextJS](https://nextjs.org/) for building the web application;
- [Prisma](https://www.prisma.io/) for the database connection and manipulation;
- [Radix](https://www.radix-ui.com/) for creating the visual components;
- [Stitches](https://stitches.dev/) for styling;
- [Next Auth](https://next-auth.js.org/) for user authentication;
- [Next SEO](https://github.com/garmeeh/next-seo) for SEO optimization;
- [TypeScript](https://www.typescriptlang.org/) for static typing;
- [Axios](https://axios-http.com/) for HTTP requests;
- [ESLint](https://eslint.org/) for code standardization;
- [DateFNS](https://date-fns.org/) for date manipulation;
- [Phosphor Icons](https://phosphoricons.com/) for icons;
- [Zod](https://github.com/colinhacks/zod) for data validation.

## Deploy

The Book Wise application was deployed on the Vercel platform and the database was hosted at Planetscale.

Access the application at: https://book-wise-two.vercel.app/

## Some useful commands

- `npx prisma init --datasource-provider SQLite`
- `npx prisma migrate dev`
- `npx prisma studio`
- `npx prisma db push`
- `npx prisma db seed`

