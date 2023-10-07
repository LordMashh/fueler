"use client";
import React, { useState } from "react";
import { RiSendPlaneLine } from "react-icons/ri";
import Radio from "./Radio";

export default function Company() {
  const [companyName, setCompanyName] = useState("");
  const [petrol, setpetrol] = useState("");
  const [pumps, setpumps] = useState("");
  const [crowdUpdate, setCrowdUpdate] = useState("");
  const [address, setAddress] = useState("");

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // You can use the form input values here as needed
    console.log("Company Name:", companyName);
    console.log("Address:", address);
    console.log("Average Petrol Availability:", averageAvailability);
    console.log("Crowd Update:", crowdUpdate);

    // Reset the form fields
    setCompanyName("");
    setAddress("");
    setAverageAvailability("");
    setCrowdUpdate("");
  };
  return (
    <div className="max-w-6xl w-full mx-auto px-4 py-6 justify-start md:px-8">
      <h1 className="font-main text-xl my-4 font-semibold mr-auto md:text-2xl ">
        {" "}
        Company Profile
      </h1>
      <h2 className="text-2xl mb-2 font-MyFont font-bold">
        <span>Deatiled Form (Filled only once)</span>
      </h2>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4 pt-4">
            <label className="font-MyFont font-medium">
              Petrol Company Name
              <input
                placeholder="Enter Your Company Name"
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
                id="petrol"
                name="petrol"
                value={petrol}
                onChange={(e) => setpetrol(e.target.value)}
                required
              />
            </label>
          </div>
          <div className="mb-4">
            <label className="font-MyFont font-medium">
              Crowd Update at Petrol Pump
              <input
                placeholder="Enter Crowd Update"
                className="my-1 block w-full md:pr-10 rounded border-2 border-gray-300 bg-primary py-1 px-2 font-normal outline-skin-accent"
                type="text"
                id="crowdUpdate"
                name="crowdUpdate"
                value={crowdUpdate}
                onChange={(e) => setCrowdUpdate(e.target.value)}
                required
              />
            </label>
          </div>
          <div className="mb-4">
            <label className="font-MyFont font-medium">
              Number of pumps availabe (working:5, notworking:1)
              <input
                placeholder="Enter Crowd Update"
                className="my-1 block w-full md:pr-10 rounded border-2 border-gray-300 bg-primary py-1 px-2 font-normal outline-skin-accent"
                type="text"
                id="pumps"
                name="pumps"
                value={pumps}
                onChange={(e) => setpumps(e.target.value)}
                required
              />
            </label>
          </div>
          <div className="mb-4">
            <label className="font-MyFont font-medium">
              Address
              <textarea
                placeholder="Enter Your Address"
                className="my-1 block w-full md:pr-10 rounded border-2 border-gray-300 bg-primary py-1 px-2 font-normal outline-skin-accent"
                type="text"
                id="address"
                name="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
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
      <hr></hr>
      <div className="pt-4">
        <h2 className="text-2xl mb-2 font-MyFont pt-10 font-bold">
          Ease Inputs:
        </h2>
        <div className="text-xl py-4 font-semibold">
          Filing Condtion:
        </div>
          <Radio/>
      </div>
    </div>
  );
}

// "use client";
// import React, { useState } from 'react';

// export default function Faq() {
//   // State variables to store the form input values
//   const [companyName, setCompanyName] = useState('');
//   const [address, setAddress] = useState('');
//   const [averageAvailability, setAverageAvailability] = useState('');
//   const [crowdUpdate, setCrowdUpdate] = useState('');

//   // Function to handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // You can use the form input values here as needed
//     console.log('Company Name:', companyName);
//     console.log('Address:', address);
//     console.log('Average Petrol Availability:', averageAvailability);
//     console.log('Crowd Update:', crowdUpdate);

//     // Reset the form fields
//     setCompanyName('');
//     setAddress('');
//     setAverageAvailability('');
//     setCrowdUpdate('');
//   };

//   return (
//     <div className="max-w-6xl w-full mx-auto px-4 py-6 justify-start md:px-8">
//       <form onSubmit={handleSubmit}>
//         <div className="mb-4">
//           <label htmlFor="companyName" className="block text-gray-700 text-sm font-bold mb-2">
//             Petrol Company Name
//           </label>
//           <input
//             type="text"
//             id="companyName"
//             name="companyName"
//             value={companyName}
//             onChange={(e) => setCompanyName(e.target.value)}
//             required
//             className="border rounded w-full py-2 px-3"
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="address" className="block text-gray-700 text-sm font-bold mb-2">
//             Address
//           </label>
//           <input
//             type="text"
//             id="address"
//             name="address"
//             value={address}
//             onChange={(e) => setAddress(e.target.value)}
//             className="border rounded w-full py-2 px-3"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="averageAvailability" className="block text-gray-700 text-sm font-bold mb-2">
//             Average Petrol Availability
//           </label>
//           <input
//             type="text"
//             id="averageAvailability"
//             name="averageAvailability"
//             value={averageAvailability}
//             onChange={(e) => setAverageAvailability(e.target.value)}
//             className="border rounded w-full py-2 px-3"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="crowdUpdate" className="block text-gray-700 text-sm font-bold mb-2">
//             Crowd Update at Petrol Pump
//           </label>
//           <input
//             type="text"
//             id="crowdUpdate"
//             name="crowdUpdate"
//             value={crowdUpdate}
//             onChange={(e) => setCrowdUpdate(e.target.value)}
//             required
//             className="border rounded w-full py-2 px-3"
//           />
//         </div>
//         <button
//           type="submit"
//           className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
//         >
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// }
