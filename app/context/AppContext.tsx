// app/context/AppContext.tsx
"use client";
import { createContext, useContext, useState, ReactNode, useEffect } from "react";

type Item = { name: string; price: number };
type Billionaire = { name: string; netWorth: number };

type AppContextType = {
  salary: string;
  setSalary: (value: string) => void;
  selectedBillionaire: Billionaire | null;
  setSelectedBillionaire: (b: Billionaire) => void;
  purchasedItems: Item[];
  addItem: (item: Item) => void;
  simulatedBalance: string;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [salary, setSalary] = useState(""); // default value
  const [selectedBillionaire, setSelectedBillionaire] = useState<Billionaire | null>(null);
  const [purchasedItems, setPurchasedItems] = useState<Item[]>([]);

  const addItem = (item: Item) => {
    setPurchasedItems((prev) => [...prev, item]);
  };

  // useEffect(()=>{
  //   setSelectedBillionaire(null);
  //   setPurchasedItems([]);
  // },[salary]);

  const totalSpent = purchasedItems.reduce((sum, item) => sum + item.price, 0);
  const multiplier = selectedBillionaire ? selectedBillionaire.netWorth / Number(salary) : 0;
  // const simulatedBalance = selectedBillionaire ? salary - (totalSpent * salary/selectedBillionaire.netWorth) : salary;
  const simulatedBalance = selectedBillionaire ?  (Number(salary) * totalSpent/selectedBillionaire.netWorth).toFixed(10) : salary;
  
//   console.log({
//   totalSpent,
//   salary,
//   netWorth: selectedBillionaire?.netWorth,
//   calculation: selectedBillionaire ? totalSpent * salary / selectedBillionaire.netWorth : 0,
// });


  return (
    <AppContext.Provider
      value={{
        salary,
        setSalary,
        selectedBillionaire,
        setSelectedBillionaire,
        purchasedItems,
        addItem,
        simulatedBalance,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useAppContext must be inside AppProvider");
  return ctx;
};
