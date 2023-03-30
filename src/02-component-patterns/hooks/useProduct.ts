import { useState } from "react";

export const useProduct =  ( onChange? : ()=> void ) => {
  const [counter, setCounter] = useState(0);

  const increaseBy = (value: number) => {
    setCounter((prev) => Math.max(prev + value, 0));
    onChange && onChange();
  };

  return {
    counter,
    increaseBy,
  };
};


//* Tenemos el hook useProduct
//* linea 3 : exportamos la funcion useProduct = la cual recibe o no (?) una funcion onChange, 
//*          [ : () => void ] , le decimos a TypeScript que es una funcion

//* linea 4 : creamos un estado que cuente, inicializamos en 0
//* linea 6 : funcion incrementa o decrementa depende del valor dado (+1/-1) el contador , pero no llega a irse al numeros negativos , llega a 0
//*           (value : number) , le decimos a TypeScript que recibimos un valor numerico

//* linea 8 : despues de hacer la parte del contador , ejecutamos la funcion onChange solamente si existe para eso el &&
//*           si existe onChange && ejecutamos onChange();
