"use client";
import { RiSendPlaneLine } from "react-icons/ri";
import React, { useState, useEffect } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const icon = L.icon({
  iconUrl: "./placeholder.png",
  iconSize: [38, 38],
});

function ResetCenterView({ selectPosition }) {
  const map = useMap();

  useEffect(() => {
    if (selectPosition) {
      map.setView(L.latLng(selectPosition.lat, selectPosition.lon), map.getZoom(), {
        animate: true,
      });
    }
  }, [selectPosition, map]);

  return null;
}


function Consumer() {
  const [userLocation, setUserLocation] = useState(null);
  const [petrolPumps, setPetrolPumps] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Use Geolocation API to get the user's current location
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserLocation({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
      },
      (error) => {
        console.error("Error getting user's location:", error);
      }
    );
  }, []);

  useEffect(() => {
    // Fetch petrol pumps or gas stations near the user's location using OSM data
    if (userLocation) {
      // const bbox = `${userLocation.lon - 0.01},${userLocation.lat - 0.01},${userLocation.lon + 0.01},${userLocation.lat + 0.01}`;
      const radius = 500;
      const postal = "382481";// Radius in meters (adjust as needed)
      console.log(postal);

      fetch(`https://nominatim.openstreetmap.org/reverse?lat=${userLocation.lat}&lon=${userLocation.lon}&format=json`)
        .then((response) => response.json())
        .then((data) => {
          const country = data.address.country;
          fetch(`https://nominatim.openstreetmap.org/search?country=${country}&postalcode=${postal}&amenity=fuel&format=json&radius=${radius}`)
            .then((response) => response.json())
            .then((results) => {
              // Set the petrol pumps data from the search results
              console.log(results);
              setPetrolPumps(results);
              setLoading(false);
            })
            .catch((error) => {
              console.error("Error fetching petrol pumps:", error);
              setLoading(false);
            });
        });
    }
  }, [userLocation]);

  const [companyName, setCompanyName] = useState("");
  const [address, setAddress] = useState("");
  const [averageAvailability, setAverageAvailability] = useState("");
  const [crowdUpdate, setCrowdUpdate] = useState("");

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // You can use the form input values here as needed
    console.log("Company Name:", companyName);
    console.log("Address:", address);
    console.log("Average Petrol Availability:", averageAvailability);
    console.log("Crowd Update:", crowdUpdate);
    console.log("petrol pumps",petrolPumps);
    // Reset the form fields
    setCompanyName("");
    setAddress("");
    setAverageAvailability("");
    setCrowdUpdate("");
  };
  const randomValue = Math.floor(Math.random() * 5) + 1;
  return (
     <div className="max-w-6xl w-full mx-auto px-4 py-6 justify-start md:px-8">
      <div className="w-full h-[500px]">
      <MapContainer
        className="w-full flex justify-around"
        center={userLocation || [23.0225, 72.5714]}
        zoom={8}
        style={{ width: "100%", height: "500px" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://api.maptiler.com/tiles/satellite-v2/{z}/{x}/{y}.jpg?key=s1LxzmX4bnPxbQLi8Zx4"
        />
        {userLocation && (
          <Marker position={userLocation} icon={icon}>
            <Popup>Current location</Popup>
          </Marker>
        )}
        {loading ? (
          <p>Loading...</p>
        ) : (
          petrolPumps.map((petrolPump, index) => (
            <Marker
              key={index}
              icon={icon}
              position={{
                lat: parseFloat(petrolPump.lat),
                lon: parseFloat(petrolPump.lon),
              }}
            >
              <Popup>{petrolPump.display_name}</Popup>
            </Marker>
          ))
        )}
        <ResetCenterView selectPosition={userLocation} />
      </MapContainer>
      </div>
      <div>
      {petrolPumps.map((petrolPump, index) => (
                <div key={index} className="flex flex-col text-2xl font-main  pt-12">
          <span className="font-semibold"> {petrolPump.display_name}</span>
          <div className="flex flex-col font-MyFont py-4 text-lg">
          <span>Refilling condition: <span className="pl-4">Fueled, Can visit</span></span>
          <span>Traffic conditions: <span className="pl-4">Not crowded</span></span>
          <span>No. of pumps available: <span className="pl-4">5</span></span>
          <span>No. of pumps opened or working: <span className="pl-4">4</span></span>
        </div>
          </div>))}
       
        <div className="flex justify-between text-2xl font-main font-semibold pt-12">
          <span>User Feedback form</span>

        </div>
        <div className="flex flex-col font-MyFont py-4 text-lg">
        <form onSubmit={handleSubmit}>
          <div className="mb-4 pt-4">
            <label className="font-MyFont font-medium">
              Petrol Company Name
              <input
                placeholder="Enter Your Valid Email"
                className="my-1 block w-full md:pr-10 rounded border-2 border-gray-300 bg-primary py-1 px-2 font-normal outline-skin-accent"
                type="text"
                id="companyName"
                name="companyName"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                required
              />
            </label>
          </div>
          <div className="mb-4">
            <label className="font-MyFont font-medium">
              Average Petrol Availability
              <input
                placeholder="Enter Average Petrol Availability "
                className="my-1 block w-full md:pr-10 rounded border-2 border-gray-300 bg-primary py-1 px-2 font-normal outline-skin-accent"
                type="text"
                id="companyName"
                name="companyName"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                required
              />
            </label>
          </div>
          <div className="mb-4">
            <label className="font-MyFont font-medium">
              Address
              <input
                placeholder="Enter Your Address"
            
                className="my-1 block w-full md:pr-10 rounded border-2 border-gray-300 bg-primary py-1 px-2 font-normal outline-skin-accent"
                type="text"
                id="address"
                name="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              ></input>
            </label>
          </div>
          <div className="mb-4">
            <label className="font-MyFont font-medium">
              Overall Review
              <textarea
                placeholder="Enter Overall Review"
                className="my-1 block w-full md:pr-10 rounded border-2 border-gray-300 bg-primary py-1 px-2 font-normal outline-skin-accent"
                type="text"
                id="review"
                name="review"
                value={crowdUpdate}
                onChange={(e) => setCrowdUpdate(e.target.value)}
                required
              ></textarea>
            </label>
          </div>

          <button
            type="button"
            className="bg-textgray text-white w-full flex justify-center py-2 px-2 mt-2 font-MyFont text-lg font-medium md:rounded md:py-1"
          >
            <RiSendPlaneLine className="mt-1 text-white mr-3" />
            <span>Send</span>
          </button>
        </form>
        </div>

      </div>
      </div>
  );
}

export default Consumer;
