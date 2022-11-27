// import { useEffect, useState } from 'react';
// import { States } from './state';
// import Map, { GeolocateControl, Marker, NavigationControl } from 'react-map-gl';
// import 'mapbox-gl/dist/mapbox-gl.css';
// import axios from 'axios';

// export default function Mapbox() {
//   const [state, setState] = useState();
//   const [coordinates, setCoord] = useState([]);

//   // const KEY ='pk.eyJ1IjoiZmNhbWFyYSIsImEiOiJjbDhxNWU0c2owN21wM3dtYmZvYnowMmRoIn0.fZ3Y5spD9ER1GlQVkd69AA';
//   const KEY = ''
//   const API_URL = 'https://api.mapbox.com/geocoding/v5/mapbox.places';

//   const handleLocation = async () => {
//     const response = await axios.get(
//       `${API_URL}/${state}.json?access_token=${KEY}`
//     );
//     console.log(response.data.features[0]);
//     const location = response.data.features[0].geometry.coordinates;

//     setCoord(location);
//   };

//   const hemocentros = [
//     { longitude: -46.6836, latitude: -23.5942 },
//     { longitude: -46.6708, latitude: -23.4803 },
//     { longitude: -46.6609, latitude: -23.558 },
//     { longitude: -46.6723, latitude: -23.6941 },
//     { longitude: -46.6594, latitude: -23.5537 },
//     { longitude: -47.6485, latitude: -22.7312 },
//     { longitude: -46.6485, latitude: -22.7312 },
//     { longitude: -46.6265, latitude: -23.6845 },
//     { longitude: -46.6558, latitude: -23.5413 },
//   ];

//   useEffect(() => {
//     handleLocation();
//   }, [state]);

//   return (
//     <div>
//       <Map
//         mapboxAccessToken={KEY}
//         style={{
//           width: '700px',
//           height: '500px',
//           borderRadius: '6px',
          
//         }}
//         initialViewState={{
//           longitude: -46.6836,
//           latitude: -23.5942,
//           zoom: 8,
//         }}
//         mapStyle="mapbox://styles/mapbox/streets-v9"
//       >
//         {coordinates[0] && 
//         hemocentros.map((r) => (
//           <Marker longitude={r.longitude} latitude={r.latitude} />
//         ))}
//         <NavigationControl position="bottom-right" />
//         <GeolocateControl />
//       </Map>
//     </div>
//   );
// }
