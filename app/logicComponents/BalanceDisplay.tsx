"use client";
import { useAppContext } from "../context/AppContext";


export default function BalanceDisplay() {
  const { simulatedBalance, selectedBillionaire } = useAppContext();
  const {salary} = useAppContext();

  if (!selectedBillionaire) return <p className="p-4 text-2xl text-center">Enter your net worth and select a billionaire to start buying!</p>;

  return (
    <>
    <div className="p-4 text-center text-4xl font-semibold bg-green-200">
      {/* Money spent as {selectedBillionaire.name}: ${simulatedBalance.toLocaleString(undefined, { maximumFractionDigits: 0 })}
   <br /> */}
    {/* Current Balance : ${salary - simulatedBalance} */}

Current Balance : $ {(Number(salary - simulatedBalance).toFixed(5)).toLocaleString('en-US')}
    </div>
 <div className="p-4 text-center text-4xl font-semibold bg-green-200"> Money Spent : $ {(Number(simulatedBalance).toFixed(5)).toLocaleString('en-US')}  </div>
        </>
  );
}
