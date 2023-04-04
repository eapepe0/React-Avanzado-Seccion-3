import { useState , useEffect, useRef } from "react";
import { InitialValues, onChangeArgs, Product } from "../interfaces/interfaces";

interface useProductArgs {
  product : Product;
  onChange?: ( args : onChangeArgs ) => void;
  value? : number;
  initialValues? : InitialValues;
}

export const useProduct =  ( {onChange , product , value = 0, initialValues}:useProductArgs) => {
  const [counter, setCounter] = useState<number>(initialValues?.count || value);

  const isControlled = useRef(!!onChange);

  const increaseBy = (value: number) => {

    //* esta controlado?
    if (isControlled.current){
      return onChange!({count : value , product})
    }

    //* no esta controlado
    const newValue = Math.max(counter + value, 0);
    setCounter(newValue)
    onChange && onChange({count : newValue , product });
  };

  useEffect(() => {
    setCounter(value);
  }, [value])
  

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
