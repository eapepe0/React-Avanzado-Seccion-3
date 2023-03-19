import { useState } from "react";

export const useProduct = () => {
  const [counter, setCounter] = useState(0);

  //* funcion incrementa o decrementa depende del valor dado (+1/-1) el contador , pero no llega a irse al numeros negativos
  const increaseBy = (value: number) => {
    setCounter((prev) => Math.max(prev + value, 0));
  };

  return {
    counter,
    increaseBy,
  };
};
