// import Card from "react-bootstrap/Card";
// import GetPuertoEs from "../../helpers/GetPuertoES.helpers";
// import GetUltimoRegistro from "../../helpers/GetUltimoRegistro.helpers";

// let valorX = 0;

// function CardData({ puertoES = 3 }) {

//   let dataUltimoReg = JSON.stringify(GetUltimoRegistro(puertoES));

//   if (dataUltimoReg.length > 2) {
//     valorX = JSON.parse(dataUltimoReg);
//   }

//   const dataPuertoES = GetPuertoEs(puertoES);
//   return (
//     <>
//       <Card className="Lcd" >

//             <h1 > {dataPuertoES.Nombre}<br/>
//             {Number(valorX.Valor)} {dataPuertoES.Unidad}</h1>
     
//       </Card>   
//     </>

//   );
// }

// export default CardData;


import Card from "react-bootstrap/Card";
import GetPuertoEs from "../../helpers/GetPuertoES.helpers";
import GetUltimoRegistro from "../../helpers/GetUltimoRegistro.helpers";

let valorX = 0;

function CardData({ puertoES = 3 }) {
  let dataUltimoReg = JSON.stringify(GetUltimoRegistro(puertoES));

  if (dataUltimoReg.length > 2) {
    valorX = JSON.parse(dataUltimoReg);
  }

  const dataPuertoES = GetPuertoEs(puertoES);
  
  return (
    <>
      <Card className="Lcd mx-auto my-4 p-3" style={{ maxWidth: "500px" }}>
        <Card.Body>
          <h1 className="text-center" style={{ fontSize: "calc(1rem + 1vw)" }}>
            {dataPuertoES.Nombre}
            <br />
            <span className="d-block" style={{ fontSize: "calc(0.8rem + 1vw)" }}>
              {Number(valorX.Valor)} {dataPuertoES.Unidad}
            </span>
          </h1>
        </Card.Body>
      </Card>
    </>
  );
}

export default CardData;
