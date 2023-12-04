import { useReactToPrint } from "react-to-print";
import { useRef } from "react";

export const usePrint = () => {
  const componentRef = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return { componentRef, handlePrint };
};
