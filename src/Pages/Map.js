// // Map.js
// import React, { useEffect, useRef } from 'react';
// import $ from 'jquery';

// export const Map = () => {
//   const mapRef = useRef(null);

//   useEffect(() => {
//     const googleMapScript = document.createElement('script');
//     googleMapScript.src = `https://maps.googleapis.com/maps/api/js?Lahore&callback=initMap`;
//     googleMapScript.async = true;
//     document.body.appendChild(googleMapScript);

//     window.initMap = initMap; // Make initMap globally accessible

//     return () => {
//       document.body.removeChild(googleMapScript);
//     };
//   }, []);

//   // Define initMap function outside of useEffect
//   const initMap = () => {
//     const map = new window.google.maps.Map(mapRef.current, {
//       center: { lat: 50.8461241, lng: 4.3526449 },
//       scrollwheel: false,
//       zoom: 15
//     });

//     $.getJSON("http://beta.json-generator.com/api/json/get/N1us4Mp-M")
//       .done(function(data){
//         data.forEach(poi => {
//           const marker = new window.google.maps.Marker({
//             map,
//             position: { lat: parseFloat(poi.latitude), lng: parseFloat(poi.longitude) },
//             title: poi.title,
//             icon: "https://mt.google.com/vt/icon?psize=20&font=fonts/Roboto-Regular.ttf&color=ff330000&name=icons/spotlight/spotlight-waypoint-blue.png&ax=44&ay=48&scale=1&text=%E2%80%A2"
//           });
//         });
//       })
//       .fail(function(){
//         console.error("Failed to fetch data");
//       });
//   };

//   return <div id="map" ref={mapRef} className="h-[300px] w-[300px]"></div>;
// };

