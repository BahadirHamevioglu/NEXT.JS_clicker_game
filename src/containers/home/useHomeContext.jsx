"use client";
import { useEffect, useMemo, createContext, useContext, useState } from "react";
import { useLocalStorage } from "@/hooks/useLocalStorage";

import { MINES } from "@/libs/data";

const HomeContext = createContext();

export const HomeProvider = ({ children }) => {
  const [balance, setBalance] = useLocalStorage("balance", 0);
  const [profit, setProfit] = useLocalStorage("profit", 0);
  const [upgrades, setUpgrades] = useLocalStorage("upgrades", MINES);
  const [power, setPower] = useLocalStorage("power", 1);
  const [i, setI] = useLocalStorage("i", (1 + profit) * power);

  const [balanceState, setBalanceState] = useState(0);
  const [profitState, setProfitState] = useState(0);
  const [iState, setIState] = useState(i);

  useEffect(() => {
    if (upgrades.length === 0) {
      setUpgrades(MINES);
    }
    setBalanceState(balance);
    setProfitState(profit);
    setIState(i);
  }, [balance, balanceState, profit, profitState, iState]);

  const clickerButton = () => {
    setBalance((prev) => prev + i);
    setBalanceState((prev) => prev + i);
  };

  const increasePower = () => {
    setPower((prev) => prev * 2);
    setBalance(0);
    setProfit(0);
    console.log("Power up!");
  };

  const purchaseUpgrade = (canPurchasable, price, id) => {
    let upgrade = upgrades.find((upg) => upg.id === id);

    if (canPurchasable === true && balance >= price && balance - price >= 0) {
      setBalance((prev) => prev - price);
      setProfit((prev) => prev + upgrade.profit);
      upgrade.quantity += 1;
      upgrade.profit *= 1.1;

      upgrade.isSacrifice = false;
      setUpgrades([...upgrades]);
    }

    if (upgrade.quantity === 10) {
      upgrade.sacrifice++;
      upgrade.quantity = 1;
      upgrade.profit *= 2;

      upgrade.isSacrifice = true;
      setUpgrades([...upgrades]);
    }

    setI((1 + profit) * power);
    setIState((1 + profit) * power);
  };

  const data = useMemo(() => {
    return {
      balance,
      profit,
      upgrades,
      power,
      clickerButton,
      increasePower,
      i,
      purchaseUpgrade,

      balanceState,
      profitState,
      iState,
    };
  }, [balance, profit, upgrades, power, i, balanceState, profitState, iState]);

  return <HomeContext.Provider value={data}>{children}</HomeContext.Provider>;
};

export const useHomeContext = () => {
  const context = useContext(HomeContext);
  if (!context || context === undefined || context === null) {
    throw new Error(
      "useHomeContext must be used within a HomeProvider. Wrap a parent component in <HomeProvider> to fix this error."
    );
  }
  return context;
};
