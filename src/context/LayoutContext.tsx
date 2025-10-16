import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

interface LayoutData {
  energyProduced: { month: string; energy: number }[];
  voltageCurrent: { month: string; voltage: number; current: number }[];
  panelStatus: { name: string; value: number }[];
  panelEfficiency: { name: string; value: number }[];
}

interface LayoutContextProps extends LayoutData {
  setLayoutData: React.Dispatch<React.SetStateAction<LayoutData>>;
  chartsShow: boolean;
  setChartsShow: React.Dispatch<React.SetStateAction<boolean>>;
}

// Context
const LayoutContext = createContext<LayoutContextProps | undefined>(undefined);

// Provider
export const LayoutProvider = ({ children }: { children: ReactNode }) => {
  const [layoutData, setLayoutData] = useState<LayoutData>({
    energyProduced: [
      { month: "فروردین", energy: 120 },
      { month: "اردیبهشت", energy: 150 },
      { month: "خرداد", energy: 200 },
      { month: "تیر", energy: 250 },
    ],
    voltageCurrent: [
      { month: "فروردین", voltage: 230, current: 5 },
      { month: "اردیبهشت", voltage: 231, current: 5.2 },
      { month: "خرداد", voltage: 232, current: 5.5 },
      { month: "تیر", voltage: 233, current: 6 },
    ],
    panelStatus: [
      { name: "سالم", value: 85 },
      { name: "خطا", value: 15 },
    ],
    panelEfficiency: [
      { name: "استفاده", value: 75 },
      { name: "هدررفت", value: 25 },
    ],
  });

  const [chartsShow, setChartsShow] = useState(false);

  return (
    <LayoutContext.Provider
      value={{ ...layoutData, setLayoutData, chartsShow, setChartsShow }}
    >
      {children}
    </LayoutContext.Provider>
  );
};

export const useLayout = () => {
  const context = useContext(LayoutContext);
  if (!context) {
    throw new Error("useLayout must be used within a LayoutProvider");
  }
  return context;
};
