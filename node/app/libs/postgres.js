const { Client } = require('pg')

async function getConnection(){
    const client = new Client({

      host: 'db',
      port: 5432,
      user: 'pgadmin',
      password: 'Abc.1234%',
      database: 'test_db'

    });
    await client.connect();
    return client;
  }

module.exports = getConnection;

