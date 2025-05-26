"use client";
import { useAppContext } from "../context/AppContext";

import {useState } from "react";

export default function SalaryInput() {
  const { salary, setSalary } = useAppContext();
const [displaySalary, setDisplaySalary] = useState("");


function formatNumberWithCommas(num: string) {
  // Remove all non-digit characters except decimal point (if you want decimals)
  const cleanNumStr = num.replace(/[^0-9.]/g, '');

  if (cleanNumStr === '') return '';

  const number = Number(cleanNumStr);
  if (isNaN(number)) return '';

  setDisplaySalary((Number(number)).toLocaleString('en-US'));
  setSalary(cleanNumStr);
}


  
return (
  <div className="w-full  mx-auto flex flex-row items-center rounded-lg shadow-md p-2 bg-white">
  
    <input
      id="salary"
      type="numeric"
      value={displaySalary}
      onChange={(e) => formatNumberWithCommas(e.target.value)}
      min={0}
      className="w-full p-3 text-6xl border border-blue-300 bg-blue-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition text-center"
      placeholder="Your Net Worth in $"
      autoFocus
    />
  </div>
);


}
