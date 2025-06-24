import React, { memo, useMemo, useCallback } from "react";
import "react-grid-layout/css/styles.css";
import "./grid.css";
import { Responsive, WidthProvider } from "react-grid-layout";
import { useApi } from "../../../../hooks/useApi";
import { ChartFactory } from "../Graph/ChartFactory";
import { BREAKPOINTS, GRID_COLS } from "../../../../utils/constants";

const ResponsiveGridLayout = WidthProvider(Responsive);

const GridItem = memo(({ item }) => (
  <div
    key={item.Id}
    data-grid={item}
    style={{
      background: "white",
      border: "2px dotted #000000FF",
      minWidth: 50,
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
      marginLeft: "auto",
      marginRight: "auto",
    }}
  >
    <div 
      className="tooltip" 
      style={{ 
        background: "LightCyan", 
        padding: 2, 
        borderBottomStyle: "solid", 
        borderBottomColor: "blue", 
        borderBottomWidth: 2, 
        position: "relative" 
      }}
    >
      <b>Cuadro {item.Id}</b>
      <span className="tooltiptext">
        x:{item.x} y:{item.y} w:{item.w} h:{item.h}
      </span>
    </div>
    <ChartFactory tipo={item.MimicoCodigo} puerto={item.PuertoES_Id} />
  </div>
));

GridItem.displayName = 'GridItem';

class ExampleGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      layouts: this.getFromLS("layouts") || {},
    };
  }

  getFromLS(key) {
    let ls = {};
    if (global.localStorage) {
      try {
        ls = JSON.parse(global.localStorage.getItem("rgl-8")) || {};
      } catch (e) {
        console.warn("Failed to parse localStorage:", e);
      }
    }
    return ls[key];
  }

  saveToLS = (key, value) => {
    if (global.localStorage) {
      global.localStorage.setItem(
        "rgl-8",
        JSON.stringify({
          [key]: value
        })
      );
    }
  };

  resetLayout = () => {
    this.setState({ layouts: {} });
  };

  onLayoutChange = (layout, layouts) => {
    this.saveToLS("layouts", layouts);
    this.setState({ layouts });
  };

  render() {
    const { data = [] } = this.props;

    return (
      <ResponsiveGridLayout
        layouts={this.state.layouts}
        onLayoutChange={this.onLayoutChange}
        className="example-layout"
        breakpoints={BREAKPOINTS}
        cols={GRID_COLS}
        rowHeight={20}
        margin={[5, 5]}
        isDraggable={true}
        isResizable={true}
      >
        {data.map((item) => (
          <GridItem key={item.Id} item={item} />
        ))}
      </ResponsiveGridLayout>
    );
  }
}

const GridContainer = () => {
  const { data, loading, error } = useApi("/vistas");

  if (loading) return <div>Loading grid...</div>;
  if (error) return <div>Error loading grid: {error}</div>;

  return <ExampleGrid data={data} />;
};

export default GridContainer;