const db = require('../config');

class Habitat {
  static async getAll() {
    const query = 'SELECT * FROM habitats';
    const { rows } = await db.query(query);
    return rows;
  }

  static async getById(id) {
    const query = 'SELECT * FROM habitats WHERE id = $1';
    const { rows } = await db.query(query, [id]);
    return rows[0];
  }

  static async create(name, location, description) {
    const query = 'INSERT INTO habitats (name, location, description) VALUES ($1, $2, $3) RETURNING *';
    const { rows } = await db.query(query, [name, location, description]);
    return rows[0];
  }

  static async update(id, name, location, description) {
    const query = 'UPDATE habitats SET name = $1, location = $2, description = $3 WHERE id = $4 RETURNING *';
    const { rows } = await db.query(query, [name, location, description, id]);
    return rows[0];
  }

  static async delete(id) {
    const query = 'DELETE FROM habitats WHERE id = $1 RETURNING *';
    const { rows } = await db.query(query, [id]);
    return rows[0];
  }
}

module.exports = Habitat;