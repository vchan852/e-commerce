# 13 Object-Relational Mapping (ORM): E-Commerce Back End

## Description
This is a back-end template of CRUD routes for an e-commerce site using Node, Express, and Sequelize to interact with a MySQL database. 

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Questions](#questions)

## Installation
To install the application locally, ensure that Node.js is installed, then clone the repository from Github. Connect a MySQL Workbench to the application through the config/connection.js file, then create the database in the workbench using the schema in the db folder. Seed the data by running the seed script ```npm run seed``` and finally start the server by running the start script ```npm run start```.

## Usage
To explore the database, use a REST client such as Insomnia or Postman to view, test and validate CRUD routes.

The following animation shows the application's GET routes to return all categories, all products, and all tags being tested in Insomnia:

![In Insomnia, the user tests “GET tags,” “GET Categories,” and “GET All Products.”.](./Assets/13-orm-homework-demo-01.gif)

The following animation shows the application's GET routes to return a single category, a single product, and a single tag being tested in Insomnia:

![In Insomnia, the user tests “GET tag by id,” “GET Category by ID,” and “GET One Product.”](./Assets/13-orm-homework-demo-02.gif)

The following animation shows the application's POST, PUT, and DELETE routes for categories being tested in Insomnia:

![In Insomnia, the user tests “DELETE Category by ID,” “CREATE Category,” and “UPDATE Category.”](./Assets/13-orm-homework-demo-03.gif)

## Questions
For questions find me on [github](https://github.com/vchan852)