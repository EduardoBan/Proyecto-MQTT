// Application constants
export const API_ENDPOINTS = {
  REGISTROS: '/registros',
  PUERTOES: '/puertoes',
  ULTIMO_REGISTRO: '/ultimoregistro',
  ULTIMOS_REGISTROS: '/ultimosregistros',
  PUNTO_MEDICION: '/puntodemedicion',
  VISTAS: '/vistas',
};

export const CHART_TYPES = {
  CARD01: 'CARD01',
  CURVA01: 'CURVA01',
  AREA01: 'AREA01',
  GAUGE01: 'GAUGE01',
  GAUGE02: 'GAUGE02',
  GAUGE03: 'GAUGE03',
  LIQUIDF01: 'LIQUIDF01',
  RADAR01: 'RADAR01',
  MAPA01: 'MAPA01',
  THERMOM01: 'THERMOM01',
  THERMOM02: 'THERMOM02',
  THERMOM03: 'THERMOM03',
  THERMOM04: 'THERMOM04',
};

export const CACHE_DURATION = {
  SHORT: 1 * 60 * 1000, // 1 minute
  MEDIUM: 5 * 60 * 1000, // 5 minutes
  LONG: 30 * 60 * 1000, // 30 minutes
};

export const BREAKPOINTS = {
  ulg: 2048,
  vlg: 1440,
  lg: 1200,
  md: 996,
  sm: 768,
  xs: 480,
  xxs: 0
};

export const GRID_COLS = {
  ulg: 18,
  vlg: 14,
  lg: 12,
  md: 10,
  sm: 12,
  xs: 8,
  xxs: 4
};