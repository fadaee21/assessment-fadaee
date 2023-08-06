import { useContext } from "react";
import RegContext from "./registerContext";

const useReg = () => {
  const context = useContext(RegContext);
  if (context === undefined) {
    throw new Error("useReg must be used within a RegProvider");
  }
  return context;
};

export default useReg;
