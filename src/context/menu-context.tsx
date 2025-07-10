import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

interface AppContextType {
  menu: boolean;
  setMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useAppContext = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useAppContext must be used within AppProvider");
  }

  return context;
};

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [menu, setMenu] = useState(false);

  return (
    <AppContext.Provider value={{ menu, setMenu }}>
      {children}
    </AppContext.Provider>
  );
};
