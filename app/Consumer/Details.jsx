// "use client";
// import React, {useState} from "react";
// import { RiSendPlaneLine } from "react-icons/ri";
// export default function Details() {
 
//   const [companyName, setCompanyName] = useState("");
//   const [address, setAddress] = useState("");
//   const [averageAvailability, setAverageAvailability] = useState("");
//   const [crowdUpdate, setCrowdUpdate] = useState("");

//   // Function to handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // You can use the form input values here as needed
//     console.log("Company Name:", companyName);
//     console.log("Address:", address);
//     console.log("Average Petrol Availability:", averageAvailability);
//     console.log("Crowd Update:", crowdUpdate);

//     // Reset the form fields
//     setCompanyName("");
//     setAddress("");
//     setAverageAvailability("");
//     setCrowdUpdate("");
//   };
//   return (
//     <div className="max-w-6xl w-full mx-auto px-4 py-6 justify-start md:px-8">
//        <div className="flex justify-between text-2xl font-main font-semibold pt-12">
//           <span>Company: Indian Oil Corporation</span>
//           <span>Address: Sarkhej,Ahmedabad</span>
//         </div>
//         <div className="flex flex-col font-MyFont py-4 text-lg">
//           <span>Refilling condition: <span className="pl-4">Fueled, Can visit</span></span>
//           <span>Traffic conditions: <span className="pl-4">Not crowded</span></span>
//           <span>No. of pumps available: <span className="pl-4">5</span></span>
//           <span>No. of pumps opened or working: <span className="pl-4">4</span></span>
//         </div>
//         <div className="flex justify-between text-2xl font-main font-semibold pt-12">
//           <span>User Feedback form</span>

//         </div>
//         <div className="flex flex-col font-MyFont py-4 text-lg">
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4 pt-4">
//             <label className="font-MyFont font-medium">
//               Petrol Company Name
//               <input
//                 placeholder="Enter Your Valid Email"
//                 className="my-1 block w-full md:pr-10 rounded border-2 border-gray-300 bg-primary py-1 px-2 font-normal outline-skin-accent"
//                 type="text"
//                 id="companyName"
//                 name="companyName"
//                 value={companyName}
//                 onChange={(e) => setCompanyName(e.target.value)}
//                 required
//               />
//             </label>
//           </div>
//           <div className="mb-4">
//             <label className="font-MyFont font-medium">
//               Average Petrol Availability
//               <input
//                 placeholder="Enter Average Petrol Availability "
//                 className="my-1 block w-full md:pr-10 rounded border-2 border-gray-300 bg-primary py-1 px-2 font-normal outline-skin-accent"
//                 type="text"
//                 id="companyName"
//                 name="companyName"
//                 value={companyName}
//                 onChange={(e) => setCompanyName(e.target.value)}
//                 required
//               />
//             </label>
//           </div>
//           <div className="mb-4">
//             <label className="font-MyFont font-medium">
//               Overall Review
//               <input
//                 placeholder="Enter Overall Review"
//                 className="my-1 block w-full md:pr-10 rounded border-2 border-gray-300 bg-primary py-1 px-2 font-normal outline-skin-accent"
//                 type="text"
//                 id="review"
//                 name="review"
//                 value={crowdUpdate}
//                 onChange={(e) => setCrowdUpdate(e.target.value)}
//                 required
//               />
//             </label>
//           </div>
//           <div className="mb-4">
//             <label className="font-MyFont font-medium">
//               Address
//               <textarea
//                 placeholder="Enter Your Address"
            
//                 className="my-1 block w-full md:pr-10 rounded border-2 border-gray-300 bg-primary py-1 px-2 font-normal outline-skin-accent"
//                 type="text"
//                 id="address"
//                 name="address"
//                 value={address}
//                 onChange={(e) => setAddress(e.target.value)}
//                 required
//               ></textarea>
//             </label>
//           </div>

//           <button
//             type="button"
//             className="bg-textgray text-white w-full flex justify-center py-2 px-2 mt-2 font-MyFont text-lg font-medium md:rounded md:py-1"
//           >
//             <RiSendPlaneLine className="mt-1 text-white mr-3" />
//             <span>Send</span>
//           </button>
//         </form>
//         </div>
//     </div>
//    );
// }
