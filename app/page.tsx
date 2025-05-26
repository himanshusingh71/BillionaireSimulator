"use client";

import SalaryInput from "./logicComponents/SalaryInput";
import BillionaireCarousel from "./logicComponents/BillionaireCarousel";
import BalanceDisplay from "./logicComponents/BalanceDisplay";
import ItemShop from "./logicComponents/ItemShop";
import { useAppContext } from "./context/AppContext";
import Description from "./logicComponents/Description";

export default function HomePage() {
  const {salary, selectedBillionaire} = useAppContext();
  return (
<main className="max-w-6xl  mx-auto p-4 flex flex-col items-center justify-center w-full">
  <Description/>
  <SalaryInput />
  <BillionaireCarousel />
  
  {/* Sticky BalanceDisplay */}
  <div className="sticky top-0 w-full bg-white z-40">
    <BalanceDisplay />
  </div>
  
  {Number(salary) > 0 && selectedBillionaire && <ItemShop />}



</main>

  );
}