# FREELANCE CONNECT

Freelance Connect is a fully functional freelancing website which aims to provide a platform for freelancers and clients to connect and collaborate on various projects. The platform is built using technologies like Next.js, Tailwind CSS, Express.js, Prisma, PostgreSQL, and Stripe.

The application includes features such as user authentication, profile creation, project management, search functionality, real-time messaging, reviews and ratings, and more with an intuitive user interface. This README file provides an overview of the project, including the roadmap, features, technologies used, and lessons learned during development.





## Roadmap

- Setting up the development environment.
- Creating the basic project structure and configuring Next.js and Tailwind CSS.
- Implementing user authentication and authorization using Next.js API routes and JSON Web Tokens (JWT).
- Building the frontend pages for freelancers and clients to create profiles and manage projects.
- Building page for creating and editing gigs for freelancers.
- Implementing search functionality for freelancers and projects.
- Integrating the Stripe payment gateway for secure and efficient transactions.
- Implementing real-time messaging between freelancers and clients.
- Adding additional features like reviews and ratings.
- Testing the application thoroughly and fixing any bugs or issues.


## Documentation

[ReactJS](https://react.dev/learn)
[ExpressJS](https://expressjs.com/)
[TailwindCSS](https://tailwindcss.com/)
[NextJS](https://nextjs.org/)
[Prisma](https://www.prisma.io/)
[PostgreSQL](https://www.postgresql.org/)
[Stripe](https://stripe.com/in)




## Installation

Install Project with npm (Client)

```bash
  npm create-react-app my-app
  cd my-app
```

Install Project with npm (Server)

```bash
  npm init -y
  npm install
  npm i express
  npm i nodemon
  npm i @prisma/client
```  
## Packages Used

To run this project, you will need to install the following packages

`express`
`nodemon`
`next`
`axios`
`bcrypt`
`cookie-parser`
`cors`
`dotenv`
`jsonwebtoken`
`multer`
`prisma`
`stripe`
`@stripe/react-stripe-js`
`react-icons`
`tailwindcss`
`postcss`
`autoprefixer`










    
    



## Running Tests

To run tests, run the following command

```bash
  client: npm run dev
  Server: npm run dev
  Prisma: npx prisma studio
```


## Features

**FRONT_END :**

To build the front end, I have used libraries and frameworks such as ReactJS, which is a popular JavaScript library for building user interfaces. I have also used CSS and Tailwind, which are styling frameworks that help make the user interface look good and responsive. Additionally, I have used some npm packages to add extra functionality to the front end. To manage the state of the application, Redux is used, which is a popular state management library for React.

- For Freelancers 
  * HomePage.
  * Create and edit gig pages.
  * Freelancer dashboard.
  * Orders they have received
  * View and edit profile details.

- For Clients 
   * HomePage.
   * Available gigs and freelancer.
   * Buy gigs and chat with freelancers.
   * View And edit profile Detail.


**BACK_END :**

The backend of freelancing website provides a range of features and functionalities, such as

- User authentication and authorization : Users can signup and login to their using email and password. This has been achieved using JWT cookies.
- Project creation, management, and bidding : Freelancers can create, edit and sell their gigs.
- Search functionality for finding freelancers and projects.
- Payment integration : Secure payment processing using Stripe. 
- Real-time messaging between freelancers and clients with read and unread functionality.
- Reviews and ratings for freelancers : Clients can give reviews and rating for freelancers.








## Demo

Insert gif or link to demo


## Screenshots

![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT`
`PUBLIC_URL`
`JWT_KEY`
`DATABASE_URL`
`STRIPE`


## Tech Stack

**Client :** NextJS, Redux, TailwindCSS

**Server :** NodeJS, ExpressJS, Postman

**Database :** Prisma, PostgreSQL

**Payment :** Stripe


## Lessons Learned

- Desgin of Schemas / Models.
- PostgreSQL connection with backend Using Prisma.
- Integrating third-party services like Stripe.
- API Calls from Client To Server.
- React Redux For efficent state management ( Avoid Props Drilling ).
- Using JWT Token for Authentication and Authorization.
- Middlewares for Authentication.
- PostMan For API Testing.
- Thorough testing and bug fixing.
