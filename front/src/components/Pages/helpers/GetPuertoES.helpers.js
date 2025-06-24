import { useApi } from '../../../hooks/useApi';

export default function GetPuertoEs(PuertoEs = 1) {
  const { data } = useApi(`/puertoes/${PuertoEs}`, [PuertoEs]);
  return data || {};
}

export const usePuertoEs = (PuertoEs = 1) => {
  return useApi(`/puertoes/${PuertoEs}`, [PuertoEs]);
};