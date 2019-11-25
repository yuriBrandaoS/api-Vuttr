require('dotenv').config({
    path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env'
});
      
const DB_CLOUD = process.env.DB_CLOUD;
const DB_HOST = process.env.DB_HOST;
const DB_PORT = process.env.DB_PORT;
const DB_NAME = process.env.DB_NAME;

let uri =  `${DB_CLOUD}://${DB_NAME}:${DB_PASSWORD}>${DB_HOST}`;
module.exports = uri;