import { useApi } from '../../../hooks/useApi';

export function GetUltimosRegistros(PuertoEs = 1) {
  const { data } = useApi(`/ultimosregistros/${PuertoEs}`, [PuertoEs]);
  return data || [];
}

export default function GetUltimoRegistro(PuertoEs = 1) {
  const { data } = useApi(`/ultimoregistro/${PuertoEs}`, [PuertoEs]);
  return data || {};
}

// Hook versions for better performance
export const useUltimosRegistros = (PuertoEs = 1) => {
  return useApi(`/ultimosregistros/${PuertoEs}`, [PuertoEs]);
};

export const useUltimoRegistro = (PuertoEs = 1) => {
  return useApi(`/ultimoregistro/${PuertoEs}`, [PuertoEs]);
};