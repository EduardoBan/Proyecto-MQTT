/*  
/dev/CavasPerdriel/save?sx0=180&sx1=180&sx2=900&sx3=0&sx4=-64&u=CavasPerdriel&p=12345&d=1512409551&z=p 
o JSOM
{"Punto2":[{"date":123456789012,"A0":19.8,"A1":-24,"A2":1,"A3":7.2},{"u":"Punto2","p":"pasword","date":"123456789012","bat":"12","RSSI":"-90","z":"p"}]}
*/
let pos=0;
let long =0;
let string='';

// separo el string utilizando el separador '&'
export function separarStr(palabra: string, separador:string){
    string=borrarStr(palabra,'?');

    let  datoStr= string.split(separador);

    return datoStr;
}
//busco el simbolo ? y saco el sub string desde el simbolo hasta el final.
function borrarStr(palabra: string, caracter:string) {
    pos = palabra.indexOf(caracter);  
   long = palabra.length;
   string = palabra.substring(pos + 1, long);
       return string;
   }

//-------------------------------------------------------------------------  

