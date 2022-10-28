const database = require('../models');

class NivelController {
  static async getAllLevels(req, res) {
    try {
      const allLevels = await database.Niveis.findAll();
      return res.status(200).json(allLevels);  
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async getLevelById(req, res) {
    const { id } = req.params;
    try {
      const oneLevel = await database.Niveis.findOne({ 
        where: { 
          id: Number(id), 
        },
      });
      return res.status(200).json(oneLevel);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async createLevel(req, res) {
    const newLevel = req.body;
    try {
      const newCreatedLevel = await database.Niveis.create(newLevel);
      return res.status(200).json(newCreatedLevel);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async updateLevel(req, res) {
    const { id } = req.params;
    const newData = req.body;
    try {
      await database.Niveis.update(newData, { where: { id: Number(id) } });
      const levelUpdated = await database.Niveis.findOne({ where: { id: Number(id) } });
      return res.status(200).json(levelUpdated);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async deleteLevel(req, res) {
    const { id } = req.params;
    try {
      await database.Niveis.destroy({ where: { id: Number(id) } });
      return res.status(200).json({ mensagem: `Level com id ${id} deletado` });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = NivelController;
