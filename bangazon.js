'use strict';

const sqlite3 = require('sqlite3').verbose();

// create db if not created
const db = new sqlite3.Database('bangazon.sqlite', (err) => console.log('Connected'))

// drop tables

const dropAllTables = () => {
  db.run(`DROP TABLE Customers`)
  db.run(`DROP TABLE PaymentOptions`)
  db.run(`DROP TABLE Products`)
  db.run(`DROP TABLE Orders`)
  db.run(`DROP TABLE OrderLineItems`)
}

// create tables
const createTables = () => {
  db.run(`CREATE TABLE IF NOT EXISTS Customers (
           customerId INTEGER PRIMARY KEY AUTOINCREMENT,
           name TEXT,
           streetAddress TEXT,
           city TEXT, state TEXT,
           postalCode TEXT,
           phoneNumber TEXT )
        `)
  db.run(`CREATE TABLE IF NOT EXISTS PaymentOptions (
          paymentOptionId INTEGER PRIMARY KEY AUTOINCREMENT,
          name TEXT,
          accountNumber INT )
        `)
  db.run(`CREATE TABLE IF NOT EXISTS Products (
          productId INTEGER PRIMARY KEY AUTOINCREMENT,
          name TEXT,
          price INT )
        `)
  // db.run(`CREATE TABLE IF NOT EXISTS Orders (
  //         orderId INTEGER PRIMARY KEY AUTOINCREMENT,
  //         customerId INT,
  //         paymentOptionId INT,
  //         paymentComplete INT,
  //         FOREIGN KEY (customerId) REFERENCES(Customers.customerId),
  //         FOREIGN KEY (paymentOptionId) REFERENCES(PaymentOptions.paymentOptionId) )
  //       `)
  db.run(`CREATE TABLE IF NOT EXISTS Orders (
          orderId INTEGER PRIMARY KEY AUTOINCREMENT,
          customerId INT,
          paymentOptionId INT,
          paymentComplete INT,
          FOREIGN KEY (customerId) REFERENCES(Customers.customerId) )
        `)
  db.run(`CREATE TABLE IF NOT EXISTS OrderLineItems (
          orderLineItemId INTEGER PRIMARY KEY AUTOINCREMENT,
          orderId INT,
          productId INT )
        `)
}

createTables()

// dropAllTables()


/*
createTable(
  ID INTEGER AUTO INCREMENT PRIMARY KEY
  bee_id INTEGER,
  flower_id INTEGER,
  FOREIGN KEY(bee_id),
  REFERENCES Bees(bee_id)
  )

*/
