import { registro } from "../models/registro.models.js";
import { puertoes } from "../models/puertoes.models.js";
import { puntodemedicion } from "../models/puntodemedicion.models.js";
import { Op } from "sequelize";
import logger from '../utils/logger.js';

class DataService {
  async getRegistros(filters = {}) {
    try {
      const whereClause = {};
      
      if (filters.puertoES) {
        whereClause.PuertoES_Id = filters.puertoES;
      }
      
      if (filters.fechaInicio && filters.fechaFin) {
        whereClause.FechaHoraCreacion = {
          [Op.between]: [filters.fechaInicio, filters.fechaFin]
        };
      }

      const registros = await registro.findAll({
        where: whereClause,
        order: [['FechaHoraCreacion', 'DESC']],
        limit: filters.limit || 1000
      });

      return registros;
    } catch (error) {
      logger.error('Error fetching registros:', { error: error.message, filters });
      throw error;
    }
  }

  async getUltimoRegistro(puertoES) {
    try {
      const ultimoRegistro = await registro.findOne({
        where: { PuertoES_Id: puertoES },
        order: [['FechaHoraCreacion', 'DESC']]
      });

      return ultimoRegistro;
    } catch (error) {
      logger.error('Error fetching ultimo registro:', { error: error.message, puertoES });
      throw error;
    }
  }

  async getUltimosRegistros(puertoES, limit = 144) {
    try {
      const registros = await registro.findAll({
        where: { PuertoES_Id: puertoES },
        order: [['FechaHoraCreacion', 'DESC']],
        limit
      });

      return registros;
    } catch (error) {
      logger.error('Error fetching ultimos registros:', { error: error.message, puertoES });
      throw error;
    }
  }

  async createRegistro(data) {
    try {
      const nuevoRegistro = await registro.create(data);
      logger.info('Registro created successfully:', { id: nuevoRegistro.Id });
      return nuevoRegistro;
    } catch (error) {
      logger.error('Error creating registro:', { error: error.message, data });
      throw error;
    }
  }

  async getPuertoES(id) {
    try {
      const puerto = await puertoes.findByPk(id);
      return puerto;
    } catch (error) {
      logger.error('Error fetching puerto ES:', { error: error.message, id });
      throw error;
    }
  }

  async getPuntoMedicionByName(nombre) {
    try {
      const punto = await puntodemedicion.findAll({
        where: { Usuario: nombre }
      });
      return punto;
    } catch (error) {
      logger.error('Error fetching punto medicion by name:', { error: error.message, nombre });
      throw error;
    }
  }
}

export const dataService = new DataService();
export default dataService;