import dataService from '../services/dataService.js';
import logger from '../utils/logger.js';

export const getRegistros = async (req, res) => {
  try {
    const datos = await dataService.getRegistros();
    res.json(datos);
  } catch (error) {
    logger.error('Error in getRegistros controller:', { error: error.message });
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const getUltimoRegistro = async (req, res) => {
  try {
    const { id } = req.params;
    const datos = await dataService.getUltimoRegistro(id);
    
    if (!datos) {
      return res.status(404).json({ message: 'Registro not found' });
    }
    
    res.json(datos);
  } catch (error) {
    logger.error('Error in getUltimoRegistro controller:', { error: error.message, id: req.params.id });
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const getUltimosRegistros = async (req, res) => {
  try {
    const { id } = req.params;
    const limit = parseInt(req.query.limit) || 144;
    
    const datos = await dataService.getUltimosRegistros(id, limit);
    res.json(datos);
  } catch (error) {
    logger.error('Error in getUltimosRegistros controller:', { error: error.message, id: req.params.id });
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const createRegistro = async (req, res) => {
  try {
    const { Valor, FechaHoraCreacion, FechaHoraRegistro, PuertoES_Id } = req.body;
    
    // Validation
    if (!Valor || !PuertoES_Id) {
      return res.status(400).json({ message: 'Missing required fields' });
    }
    
    const newRegistro = await dataService.createRegistro({
      Valor,
      FechaHoraCreacion,
      FechaHoraRegistro,
      PuertoES_Id,
    });
    
    res.status(201).json(newRegistro);
  } catch (error) {
    logger.error('Error in createRegistro controller:', { error: error.message, body: req.body });
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const getPtoES_Registro = async (req, res) => {
  try {
    const PuertoES = req.params.PuertoES_Id;
    const queryFecha = req.query.fecha;
    
    const filters = { puertoES: PuertoES };
    
    if (queryFecha && queryFecha !== "{}") {
      const [fechaIni, fechaFin] = queryFecha.split(",");
      filters.fechaInicio = fechaIni;
      filters.fechaFin = fechaFin;
    }
    
    const registros = await dataService.getRegistros(filters);
    res.json(registros);
  } catch (error) {
    logger.error('Error in getPtoES_Registro controller:', { 
      error: error.message, 
      puertoES: req.params.PuertoES_Id,
      fecha: req.query.fecha 
    });
    res.status(500).json({ message: 'Internal server error' });
  }
};