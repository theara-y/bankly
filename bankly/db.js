/** Database setup for jobly. */

const { Client } = require('pg');
const { DB_URI } = require('./config');

const client = new Client(
    {
        connectionString: "postgres://tya:password@localhost:5432/bankly",
    }
);

client.connect();

module.exports = client;
