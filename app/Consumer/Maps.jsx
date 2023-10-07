// import React, { useState, useEffect } from "react";
// import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
// import "leaflet/dist/leaflet.css";
// import L from "leaflet";

// const icon = L.icon({
//   iconUrl: "./placeholder.png",
//   iconSize: [38, 38],
// });

// function ResetCenterView({ selectPosition }) {
//   const map = useMap();

//   useEffect(() => {
//     if (selectPosition) {
//       map.setView(L.latLng(selectPosition.lat, selectPosition.lon), map.getZoom(), {
//         animate: true,
//       });
//     }
//   }, [selectPosition, map]);

//   return null;
// }

// function Maps() {
//   const [userLocation, setUserLocation] = useState(null);
//   const [petrolPumps, setPetrolPumps] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Use Geolocation API to get the user's current location
//     navigator.geolocation.getCurrentPosition(
//       (position) => {
//         setUserLocation({
//           lat: position.coords.latitude,
//           lon: position.coords.longitude,
//         });
//       },
//       (error) => {
//         console.error("Error getting user's location:", error);
//       }
//     );
//   }, []);

//   useEffect(() => {
//     // Fetch petrol pumps or gas stations near the user's location using OSM data
//     if (userLocation) {
//       // const bbox = `${userLocation.lon - 0.01},${userLocation.lat - 0.01},${userLocation.lon + 0.01},${userLocation.lat + 0.01}`;
//       const radius = 500;
//       const postal = "382481";// Radius in meters (adjust as needed)
//       console.log(postal);

//       fetch(`https://nominatim.openstreetmap.org/reverse?lat=${userLocation.lat}&lon=${userLocation.lon}&format=json`)
//         .then((response) => response.json())
//         .then((data) => {
//           const country = data.address.country;
//           fetch(`https://nominatim.openstreetmap.org/search?country=${country}&postalcode=${postal}&amenity=fuel&format=json&radius=${radius}`)
//             .then((response) => response.json())
//             .then((results) => {
//               // Set the petrol pumps data from the search results
//               console.log(results);
//               setPetrolPumps(results);
//               setLoading(false);
//             })
//             .catch((error) => {
//               console.error("Error fetching petrol pumps:", error);
//               setLoading(false);
//             });
//         });
//     }
//   }, [userLocation]);

//   return (
//     <div>
//       <MapContainer
//         className="w-full flex justify-around"
//         center={userLocation || [23.0225, 72.5714]}
//         zoom={8}
//         style={{ width: "100%", height: "500px" }}
//       >
//         <TileLayer
//           attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//           url="https://api.maptiler.com/tiles/satellite-v2/{z}/{x}/{y}.jpg?key=s1LxzmX4bnPxbQLi8Zx4"
//         />
//         {userLocation && (
//           <Marker position={userLocation} icon={icon}>
//             <Popup>Current location</Popup>
//           </Marker>
//         )}
//         {loading ? (
//           <p>Loading...</p>
//         ) : (
//           petrolPumps.map((petrolPump, index) => (
//             <Marker
//               key={index}
//               icon={icon}
//               position={{
//                 lat: parseFloat(petrolPump.lat),
//                 lon: parseFloat(petrolPump.lon),
//               }}
//             >
//               <Popup>{petrolPump.display_name}</Popup>
//             </Marker>
//           ))
//         )}
//         <ResetCenterView selectPosition={userLocation} />
//       </MapContainer>
//     </div>
//   );
// }

// export default Maps;
