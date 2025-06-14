import React from "react";
// const EstadoGlobalContext = React.createContext({
//   puertoSelec: 0,
//   // mostrar: false,
//   // setMostrar: () => {},
//   SetPuertoSelec: () => {
//     console.log(puertoSelec);
//   },
// });
// export { EstadoGlobalContext };
const EstadoGlobalContext = React.createContext({
  mostrar: 0,
  setMostrar: () => {},
});
export { EstadoGlobalContext };
