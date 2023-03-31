import {createContext, ReactElement} from 'react'
import { useProduct } from "../hooks/useProduct";
import styles from "../styles/styles.module.css";

import { onChangeArgs, Product, ProductContextProps } from '../interfaces/interfaces';
import { ProductTitle } from './ProductTitle';
import { ProductImage } from './ProductImage';
import { ProductButtons } from './ProductButtons';

export interface Props {
  product: Product;
  children? : ReactElement | ReactElement[];
  className? : string;
  style? : React.CSSProperties;
  onChange?: ( args : onChangeArgs )=> void;
  value? : number;
}

export const ProductContext = createContext ({} as ProductContextProps); 
const { Provider } = ProductContext;

export const ProductCard = ({ children,product, className,style , onChange , value}: Props) => {

  const { counter, increaseBy } = useProduct({onChange , product , value}); 

  return (
    <Provider value={{counter , increaseBy, product }}>
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children}
      </div>
    </Provider>
  );
};


ProductCard.Title   = ProductTitle;   //* importamos ProductTitle de su componente
ProductCard.Image   = ProductImage;   //* importamos ProductImage de su componente
ProductCard.Buttons = ProductButtons; //* importamos ProductButtons de su componente


/******************
* //* linea 10 : definimos la interface de ProductCard
* //* linea 11 : recibira un product
* //* linea 12 : recibimos un children , el cual es un Elemento React que puede ser uno solo o varios (un arreglo)
* //* linea 13 : definimos que reciba un className el cual sera opcional y sera una string
* //* liena 14 : definimos un estilo , que puede existir o no , la cual es una React.CSSProperties
* //* linea 15 : definimos una funcion onChange , que puede existir o no , la cual es una funcion que no devuelve nada 
* //*            recibe unos argumentos , onChangeArgs definidos en el interfaces.ts
* 
* //* linea 18 :  creamos un contexto para compartir entre padre e hijo
* //*              con el (as) decimos como se vera el context mediante la interface
* //*              lo exportamos asi lo pueden usar los otros componentes
********************  
* //* linea 21 : vamos a recibir el children , el product y opcionalmente el className , un style y un onChange
*
* //* linea 23 : extraemos del hook useProduct el counter y la funcion increaseBy y le daremos al hook useProduct una funcion onChange
*
* //* linea 26 - 30 : envolvemos todo con el Provider en el value van los valores , los objetos y las funciones que vamos a compartir
* //* linea 27      : concatenamos los estilos propios del componente , y le agregamos unos via className
* //* linea 28      : aca van los otros componentes los cuales vamos a recibir como hijos
 *********************/