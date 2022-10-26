const db = require('../models');

class PessoaController {
  static async getAllPersons(req, res) {
    try {
      const allPersons = await db.Pessoas.findAll();
      return res.status(200).json(allPersons);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  }

  static async getPersonById(req, res) {
    const { id } = req.params;
    try {
      const personById = await db.Pessoas.findOne({
        where: { id: Number(id) }
      });
      return res.status(200).json(personById);
    } catch(err) {
      return res.status(500).send(err.message)
    }
  }

  static async createPerson(req, res) {
    const newPerson = req.body;
    try {
      const newPersonCreated = await db.Pessoas.create(newPerson);
      return res.status(200).json(newPersonCreated);
    } catch(err) {
      return res.status(500).send(err.message)
    }
  }

  static async updatePerson(req, res) {
    const { id } = req.params;
    const newData = req.body;
    try {
      await db.Pessoas.update(newData, {
        where: { id: Number(id) }
      });
      const updatedPerson = await db.Pessoas.findOne({
        where: { id: Number(id) }
      });
      return res.status(200).json(updatedPerson);
    } catch {
      return res.status(500).send(err.message)
    }
  }

  static async deletePerson(req, res) {
    const { id } = req.params;
    try {
      await db.Pessoas.destroy({
        where: { id: Number(id) }
      });
      return res.status(200).json({ message: 'Pessoa apagada com sucesso' });
    } catch {
      return res.status(500).send(err.message);
    }
  }
}

module.exports = PessoaController;
