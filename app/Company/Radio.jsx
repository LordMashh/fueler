"use client";
import React, { useState } from "react";

export default function Radio() {
  const [selectedTopping, setSelectedTopping] = useState("Cash");
  return (
    <div className="flex  font-MyFont gap-x-12  ">
      <label htmlFor="Cash" className="flex">
        <input
          type="radio"
          name="payment"
          value="Cash"
          id="Cash"
          className="h-5 w-5 mt-2  border-2 border-black cursor-default rounded-full shadow-bggray  focus-within:border-2 focus-within:border-skin-accent"
          checked={selectedTopping === "Cash"}
          onChange={(e) => setSelectedTopping(e.target.value)}
        />
        <h1 className="ml-2 w-11/12 mt-2 text-left  leading-none text-skin-dark">
          Available{" "}
        </h1>
      </label>

      <label htmlFor="Cash" className="flex">
        <input
          type="radio"
          name="payment"
          value="Bank"
          id="Bank"
          className="h-5 w-5 mt-2  border-2 border-black cursor-default rounded-full shadow-bggray  focus-within:border-2 focus-within:border-skin-accent"
          checked={selectedTopping === "Bank"}
          onChange={(e) => setSelectedTopping(e.target.value)}
        />
        <h1 className=" ml-2 w-11/12 mt-2 text-left leading-none text-skin-dark">
          Refilling
        </h1>
      </label>
 
    </div>
  );
}
