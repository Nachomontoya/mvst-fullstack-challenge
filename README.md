# MVST Timer Challenge

As a challenge for MVST I had to create a timer application that allows an user to start counting time by clicking a button on the center of the screen. This button also displays the currently tracked time. If the user clicks the button again, stops the timer and resets the small timer displayed in the button.

The total tracked time by **all users** is shown in the timer above the button. The big timer is updated when the app loads on the screen, and when the user stops his timer.

There is also a switch to toggle between light and dark mode.

> You can see this project deployed at [this URL](https://mvst-challenge.nachomontoya.es/)

- [MVST Timer Challenge](#mvst-timer-challenge)
  - [🚀 How to run the app.](#-how-to-run-the-app)
    - [📋 Requirements](#-requirements)
    - [⚙️ Installation](#️-installation)
  - [🗂 Folder structure](#-folder-structure)
  - [💊 How to run the test suite](#-how-to-run-the-test-suite)
  - [🔮 Future improvements](#-future-improvements)
  - [💬 Feedback](#-feedback)
  - [🕵️‍♂️ Technologies used](#️️-technologies-used)
  - [✨ Extra features](#-extra-features)

## 🚀 How to run the app.

By following next steps you will get a copy of this project and will be able to run it locally for development or test purposes.

This repo is a monorepo created with Yarn Workspaces. That means that you will find both, client and server, on this repo.

### 📋 Requirements

You will be using [NodeJs](https://nodejs.org/) and [Yarn](https://yarnpkg.com/) so if you don't have them already installed on your computer you will need to do it before start. To install Node, visit its website and follow the instructions. To install Yarn globally on your computer you should type: `npm install --global yarn`

To stablish your own local database, you have to start [MongoDB](https://www.mongodb.com/) locally and set its path on a .env file.

### ⚙️ Installation

First, you will need to `clone` or `fork` the repository into your Github account:

<img src="https://docs.github.com/assets/images/help/repository/fork_button.jpg" alt="Fork on GitHub" width='450'>

`$ git clone https://github.com/Nachomontoya/mvst-fullstack-challenge.git`

Then run `yarn install` in the root folder.

When you have all the dependencies installed you need to create one `.env` file located at `packages/server` with the next content:

```
# Access to database
MONGO_DB_URL_PRODUCTION={your_mongo_atlas_url}
MONGO_DB_URL_DEVELOPMENT={your_mongodb_local}
# Server settings
PORT=4000
```

## 🗂 Folder structure

<pre>  
└───packages
    ├───client
    │   ├───public
    │   └───src
    │       ├───__test__	<i>//Front End tests </i> <b>//V2 </b>
    │       ├───api		<i>//Call to external APIs </i>
    │       ├───assets		<i>//svg resources </i>
    │       ├───components
    │       ├───constants
    │       ├───pages
    │       ├───api		<b>//V2 </b>
    │       └───utils		<i>// Reusable code </i>
    └───server
        └───src
            ├───__test__  
            ├───config		<i>// configuration read from .env </i>
            ├───controllers
            ├───db
            ├───models
            └───routes
</pre>

## 💊 How to run the test suite

~~I have set tests just for the server side of the app. Considering there are too little elements on the front to test them I test the get endpoints of the API.~~

<b>V2:
The tests for this project have been updated. Now, there are tests on the client side and on the server side. On client side, tests check if the components of the app are rendering properly. Regarding the server side, they check the get and post methods of the API are working properly (the post test method creates a new log and update the total time, so it test also the updating.)
</b>

To run these tests you will have to type on the root of the project:

```
$ yarn test
```

## 🔮 Future improvements

In the future, I would be adding, next:

- Transitions for the dark mode
- ~~Spinners for when data is loading~~
- ~~Modals or toasts to render the error messages. As an API protection I have added a rate limit stablished to a maximum of 100 requests per hour. Right now, this error message will appear as an alert.~~
- Containerise the app.
- There was a football game that I played when I was a child with a casio timer. I would really love to reproduce it here and create a game.
- ~~Better types for the typescript~~

## 💬 Feedback

This challenge have been a bit challeging for being the first time I have used Typescript. I think comming from Javascript, it is a really good technology to learn and a quick one.

~~Regarding the server side, and apart from typescript, it's been an easy application with just three endpoints and without middlewares. At the beggining I created more endpoints so I could update and delete some logs easily.~~

~~Regarding the client side, I added a Header component and rendered the rest of the app just in a home page. It would have been nice to use React Router to limit the urls and create, for example, a 404 page.~~

<b>V2:</b>
Regarding the server side, apart from the fact of using Typescript, it's been an easy application. In the controller folder there have been added three functions and just two HTTP methods. The first of them `GET` the total time stored in a document of the databes. The second method `POST` a new timer log and update the total time incrementing it with the time of the new log using a mongoose method.

Regarding the client side. The elements of the application have been divided into components so they can be reused if it is necessary without having to write more code. This way, there are components for Header, Layout, Main, ThemeToggle, Timer and TimerButton. Also, I have added redux to pass the info of the theme mode (light or dark) through the components without having to pass it by props.

## 🕵️‍♂️ Technologies used

- [Axios](https://github.com/axios/axios)
- [React](https://es.reactjs.org/)
- [Redux](https://redux.js.org/)
- [Framer Motion](https://www.framer.com/motion/)
- [React Toastify](https://www.npmjs.com/package/react-toastify)
- [React Helmet Async](https://www.npmjs.com/package/react-helmet-async)
- [Bootstrap](https://getbootstrap.com/)
- [Sass](https://sass-lang.com/)
- [Material UI](https://mui.com/)
- [Express](https://expressjs.com/)
- [Express Rate Limit](https://www.npmjs.com/package/express-rate-limit)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [Nodemon](https://nodemon.io/)
- [Jest](https://jestjs.io/es-ES/)
- [Prettier](https://prettier.io/)
- [Eslint](https://eslint.org/)
- [Typescript](https://www.typescriptlang.org/)

## ✨ Extra features

Deployment:

- The deploy for the server of this application is made at [Heroku](https://www.heroku.com/)

- The deploy for the front is made at my personal server, you can run the app at [this URL](https://mvst-challenge.nachomontoya.es/)

API Security:

- Rate Limit set up to 100 requests per hour.
