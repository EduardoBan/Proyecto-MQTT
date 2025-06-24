import React, { lazy, Suspense } from 'react';
import { CHART_TYPES } from '../../../../utils/constants';

// Lazy load chart components for better performance
const BarEchart = lazy(() => import('./BarEchart'));
const LineAreasEchart = lazy(() => import('./LineAreasEchart'));
const SimpleMap = lazy(() => import('./Mapa'));
const CardData = lazy(() => import('./CardData'));
const GaugueEchart1 = lazy(() => import('./GaugueEchart1'));
const GaugueEchart2 = lazy(() => import('./GaugueEchart2'));
const GaugueEchart3 = lazy(() => import('./GaugueEchart3'));
const LiquidFillEchart = lazy(() => import('./LiquidFillEchart1'));
const RadarChart1 = lazy(() => import('./RadarEchart01'));
const Thermometer1 = lazy(() => import('./TermometroChart1'));
const Thermometer2 = lazy(() => import('./TermometroChart2'));
const Thermometer3 = lazy(() => import('./TermometroChart3'));
const Thermometer4 = lazy(() => import('./TermometroChart4'));

const ChartLoadingFallback = () => (
  <div className="chart-loading">
    <div>Loading chart...</div>
  </div>
);

const chartComponents = {
  [CHART_TYPES.CARD01]: CardData,
  [CHART_TYPES.CURVA01]: BarEchart,
  [CHART_TYPES.AREA01]: LineAreasEchart,
  [CHART_TYPES.GAUGE01]: GaugueEchart1,
  [CHART_TYPES.GAUGE02]: GaugueEchart2,
  [CHART_TYPES.GAUGE03]: GaugueEchart3,
  [CHART_TYPES.LIQUIDF01]: LiquidFillEchart,
  [CHART_TYPES.RADAR01]: RadarChart1,
  [CHART_TYPES.MAPA01]: SimpleMap,
  [CHART_TYPES.THERMOM01]: Thermometer1,
  [CHART_TYPES.THERMOM02]: Thermometer2,
  [CHART_TYPES.THERMOM03]: Thermometer3,
  [CHART_TYPES.THERMOM04]: Thermometer4,
};

export const ChartFactory = ({ tipo, puerto, ...props }) => {
  const ChartComponent = chartComponents[tipo];
  
  if (!ChartComponent) {
    console.warn(`Unknown chart type: ${tipo}`);
    return <SimpleMap puertoES={puerto} {...props} />;
  }

  return (
    <Suspense fallback={<ChartLoadingFallback />}>
      <ChartComponent puertoES={puerto} {...props} />
    </Suspense>
  );
};

export default ChartFactory;