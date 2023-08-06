import { createContext, useState } from "react";
import { Children, RegContextType, userResponse } from "../type";

const RegContext = createContext<RegContextType>(null!);

export const RegProvider = ({ children }: Children) => {
  const [userContext, setUserContext] = useState<userResponse | undefined>(
    undefined
  );
  return (
    <RegContext.Provider value={{ userContext, setUserContext }}>
      {children}
    </RegContext.Provider>
  );
};

export default RegContext;
