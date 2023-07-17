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

## Screenshots

- Login and Signup functionality
  
![Screenshot (12)](https://github.com/adithyamode/FreelancingWebsite/assets/123758039/78fd3429-6af9-449d-92af-25a27eca036e)

- Set User Profile
  
![Screenshot (13)](https://github.com/adithyamode/FreelancingWebsite/assets/123758039/50ce13a1-46a4-4c2e-9579-7efbaad5ba28)

- Create Gigs
  
![Screenshot (11)](https://github.com/adithyamode/FreelancingWebsite/assets/123758039/7bc63eb9-4906-462e-a02f-797b90fb3f97)

- Edit Gigs
  
![Screenshot (10)](https://github.com/adithyamode/FreelancingWebsite/assets/123758039/416c3bc6-932e-4624-95bd-ff9dcfb3a7e1)

- Secured Payment integration
  
![Screenshot (14)](https://github.com/adithyamode/FreelancingWebsite/assets/123758039/feb14394-4544-4c12-8ea9-49b77f1ff12f)

- User Purchase page
  
![Screenshot (16)](https://github.com/adithyamode/FreelancingWebsite/assets/123758039/5e5ac15a-0092-489e-9d2f-778dec05b980)

- Client and freelancer Private Conversation with read and unread features
  
![Screenshot (17)](https://github.com/adithyamode/FreelancingWebsite/assets/123758039/4e6f032a-d165-4565-bc7a-5898a2992c86)

- Reviews and Rating to Seller
  
![Screenshot (18)](https://github.com/adithyamode/FreelancingWebsite/assets/123758039/c686f17b-68c2-440f-b6b6-527cddb56e17)

- Dashboard
  
![Screenshot (15)](https://github.com/adithyamode/FreelancingWebsite/assets/123758039/9ad90814-6ef9-4d6b-a67e-3335023c81de)


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


## Lessons Learned!


- Desgin of Schemas / Models.
- PostgreSQL connection with backend Using Prisma.
- Integrating third-party services like Stripe.
- API Calls from Client To Server.
- React Redux For efficent state management ( Avoid Props Drilling ).
- Using JWT Token for Authentication and Authorization.
- Middlewares for Authentication.
- PostMan For API Testing.
- Thorough testing and bug fixing.
