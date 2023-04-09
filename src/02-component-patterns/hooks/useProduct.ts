import { useState , useEffect, useRef } from "react";
import { InitialValues, onChangeArgs, Product } from "../interfaces/interfaces";

interface useProductArgs {
  product : Product;
  onChange?: ( args : onChangeArgs ) => void;
  value? : number;
  initialValues?: InitialValues;
}

export const useProduct =  ( { onChange , product , value = 0, initialValues }:useProductArgs) => {
  const [counter, setCounter] = useState<number>( initialValues?.count || value );
  console.log(initialValues?.count)
  const isMounted = useRef(false); 

  const increaseBy = (value: number ) => {
    
    let newValue = Math.max(counter + value, 0);
    if (initialValues?.maxCount){
      newValue = Math.min(newValue , initialValues.maxCount);
    }
    setCounter(newValue)
    onChange && onChange({count : newValue , product });
  };

  const reset = () =>{
    setCounter(initialValues?.count || value)
  }
  useEffect(() => {
    if(!isMounted.current) return;
      setCounter(value);
  }, [value])
  
  useEffect(()=>{
    isMounted.current = true; 
  },[])

  return {
    counter,
    isMaxCountReached : !!initialValues?.count && initialValues.maxCount === counter,
    maxCount : initialValues?.maxCount,
    increaseBy,
    reset,
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
