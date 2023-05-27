require('dotenv').config()

module.exports = {
  development: {
    username: "root" ,
    password: "",
    database: "pff",
    host: "localhost",
    dialect:"mysql" ,
  },
  test: {
    username: 'root',
    password: 'root',
    database: 'LMS_test', 
    host: '127.0.0.1',
    dialect: 'mysql',
  },
  production: {
    username: "",
    password: "",
    database: "",
    host: "",
    dialect: "",
  },
}