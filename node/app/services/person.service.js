const boom = require('@hapi/boom');
const getConnection = require('../libs/postgres')

class PersonService {
  constructor() {}

  async create(data) {
    return data;
  }

  async find() {
    const client= await getConnection();
    const rta = await client.query('Select * from personas');
    return rta.rows;
  }

  async findOne(id) {
    const client= await getConnection();
    const rta = await client.query("Select * from personas where id='" + id +"'");
    return rta.rows;
  }

  async update(id, changes) {
    return {
      id,
      changes,
    };
  }

  async delete(id) {
    return { id };
  }
}

module.exports = PersonService;
