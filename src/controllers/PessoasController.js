const database = require('../models');

class PessoaController {
  static async getAllPersons(req, res) {
    try {
      const allPersons = await database.Pessoas.findAll();
      return res.status(200).json(allPersons);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  }

  static async getPersonById(req, res) {
    const { id } = req.params;
    try {
      const personById = await database.Pessoas.findOne({
        where: { id: Number(id) },
      });
      return res.status(200).json(personById);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  }

  static async createPerson(req, res) {
    const newPerson = req.body;
    try {
      const newPersonCreated = await database.Pessoas.create(newPerson);
      return res.status(200).json(newPersonCreated);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  }

  static async updatePerson(req, res) {
    const { id } = req.params;
    const newData = req.body;
    try {
      await database.Pessoas.update(newData, {
        where: { id: Number(id) },
      });
      const updatedPerson = await database.Pessoas.findOne({
        where: { id: Number(id) },
      });
      return res.status(200).json(updatedPerson);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  }

  static async deletePerson(req, res) {
    const { id } = req.params;
    try {
      await database.Pessoas.destroy({
        where: { id: Number(id) },
      });
      return res.status(200).json({ message: 'Pessoa apagada com sucesso' });
    } catch (err) {
      return res.status(500).json(err.message);
    }
  }

  static async restorePerson(req, res) {
    const { id } = req.params;
    try {
      await database.Pessoas.restore({
        where: { id: Number(id) },
      });
      return res.status(200).json({ message: `Person with id ${id} restored` });
    } catch (err) {
      return res.status(500).json(err.message);
    }
  }

  static async getRegisterByPersonId(req, res) {
    const { studentId, registerId } = req.params;
    try {
      const registerById = await database.Matriculas.findOne({
        where: { 
          id: Number(registerId),
          estudante_id: Number(studentId),
        },
      });
      return res.status(200).json(registerById);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  }

  static async createRegisterByPersonId(req, res) {
    const { studentId } = req.params;
    const newRegister = { ...req.body, estudante_id: Number(studentId) };
    try {
      const newRegisterCreated = await database.Matriculas.create(newRegister);
      return res.status(200).json(newRegisterCreated);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  }

  static async updateRegister(req, res) {
    const { studentId, registerId } = req.params;
    const newData = req.body;
    try {
      await database.Matriculas.update(newData, {
        where: { 
          id: Number(registerId),
          estudante_id: Number(studentId),
        },
      });
      const updatedRegister = await database.Matriculas.findOne({
        where: { id: Number(registerId) },
      });
      return res.status(200).json(updatedRegister);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  }

  static async deleteRegister(req, res) {
    const { registerId } = req.params;
    try {
      await database.Matriculas.destroy({
        where: { id: Number(registerId) },
      });
      return res.status(200).json({ message: 'Matricula apagada com sucesso' });
    } catch (err) {
      return res.status(500).json(err.message);
    }
  }
}

module.exports = PessoaController;
