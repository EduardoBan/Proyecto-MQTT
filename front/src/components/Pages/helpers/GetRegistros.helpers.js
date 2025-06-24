import { useApi } from '../../../hooks/useApi';

export default function GetRegistros(PuertoES = 1, fechaIni, fechaFin) {
  const endpoint = fechaIni && fechaFin 
    ? `/registros/PuertoES/${PuertoES}?fecha=${fechaIni},${fechaFin}`
    : `/registros/PuertoES/${PuertoES}`;
    
  const { data, loading, error } = useApi(endpoint, [PuertoES, fechaIni, fechaFin]);
  
  return data || [];
}

// Alternative hook-based approach for better performance
export const useRegistros = (PuertoES = 1, fechaIni, fechaFin) => {
  const endpoint = fechaIni && fechaFin 
    ? `/registros/PuertoES/${PuertoES}?fecha=${fechaIni},${fechaFin}`
    : `/registros/PuertoES/${PuertoES}`;
    
  return useApi(endpoint, [PuertoES, fechaIni, fechaFin]);
};