import Thermometer from "react-thermometer-chart";

const style={
  display: "block",
  textAlign:"center",
  innerWidth:"80%",
  innerHeight:"80%",
  height: "60%",
  paddingTop: "0px",
  fontFamily: "sans-serif",
  
  
}
const Thermometer3 = ({id=1, valor=20, title="Termometro 3" }) => {
  return (         
    <div style={style}>
      <Thermometer
        steps={5}
        minValue={0}
        maxValue={50}
        currentValue={valor}
        showGoalline  // pone la palabra Goal --> podria poner Max
        color={"cyan"}
        size="large"
      ></Thermometer> 
    </div>
  );
};

export default Thermometer3;