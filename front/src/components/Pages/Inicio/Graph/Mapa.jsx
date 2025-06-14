//import { useRef } from "react";
// import {
//   MapContainer,
//   TileLayer,
//   Marker,
//   LayersControl,
//   LayerGroup,
//   FeatureGroup,
//   Popup,
//   Circle,
//   Rectangle
// } from "react-leaflet";
// import "leaflet/dist/leaflet.css";
// //import { Icon } from "leaflet";


// const SimpleMap = () => {
//   // const center = [51.505, -0.09]
//   const latitude = -33.00470645;
//   const longitude = -68.8516543;
//   const center = [latitude, longitude];//   const latitude = -33.00470645;
//   const rectangle = [
//     [-33.004, -68.851],
//     [-33.005 - 68.856],
//   ]
//   return (

//     <MapContainer center={center} zoom={13} scrollWheelZoom={false} style={{ height: '100%' }}>
//       <TileLayer
//         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//       />
//       <LayersControl position="topright">
//         <LayersControl.Overlay name="Marker with popup">
//           <Marker position={center}>
//             <Popup>
//               A pretty CSS3 popup. <br /> Easily customizable.
//             </Popup>
//           </Marker>
//         </LayersControl.Overlay>
//         <LayersControl.Overlay checked name="Layer group with circles">
//           <LayerGroup>
//             <Circle
//               center={center}
//               pathOptions={{ fillColor: 'blue' }}
//               radius={200}
//             />
//             <Circle
//               center={center}
//               pathOptions={{ fillColor: 'red' }}
//               radius={100}
//               stroke={false}
//             />
//             <LayerGroup>
//               <Circle
//                 center={center}
//                 pathOptions={{ color: 'green', fillColor: 'green' }}
//                 radius={100}
//               />
//             </LayerGroup>
//           </LayerGroup>
//         </LayersControl.Overlay>
//         <LayersControl.Overlay name="Feature group">
//           <FeatureGroup pathOptions={{ color: 'purple' }}>
//             <Popup>Popup in FeatureGroup</Popup>
//             <Circle center={center} radius={200} />
//             <Rectangle bounds={rectangle} />
//           </FeatureGroup>
//         </LayersControl.Overlay>
//       </LayersControl>
//     </MapContainer>
//   );
// };

// export default SimpleMap;





//---------------------------------------------------------------------------------------------------------

import { useRef } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Tooltip,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";

const myIcon = new Icon({
  iconUrl: require("../../../../img/industry.png"),
  iconSize: [32, 37], // size of the icon
});
const SimpleMap = () => {
  const mapRef = useRef(null);
  const latitude = -33.00470645;
  const longitude = -68.8516543;
  const position = [latitude, longitude];

  return (
    
    <>
    <br></br>
     <MapContainer

      center={[latitude, longitude]}
      zoom={14}
      ref={mapRef}
      style={{ height: "90%", width: "95%" }}
      
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
        <Marker position={position} icon={myIcon}>
        <Tooltip>INTI Mendoza</Tooltip>
      </Marker>
    </MapContainer>
    </>
  );
};

export default SimpleMap;