import {createContext, ReactElement} from 'react'
import { useProduct } from "../hooks/useProduct";
import styles from "../styles/styles.module.css";

import { Product, ProductContextProps } from '../interfaces/interfaces';
import { ProductTitle } from './ProductTitle';
import { ProductImage } from './ProductImage';
import { ProductButtons } from './ProductButtons';

export interface Props {
  product: Product;
  children? : ReactElement | ReactElement[];
  className? : string;
}

export const ProductContext = createContext ({} as ProductContextProps); 
const { Provider } = ProductContext;

export const ProductCard = ({ children,product, className}: Props) => {

  const { counter, increaseBy } = useProduct(); 

  return (
    <Provider value={{counter , increaseBy, product }}>
      <div className={`${styles.productCard} ${className}`}>
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
 * //* linea 16 :  creamos un contexto para compartir entre padre e hijo
* //*              con el (as) decimos como se vera el context mediante la interface
* //*              lo exportamos asi lo pueden usar los otros componentes
********************  
* //* linea 14 : vamos a recibir el children , el product y opcionalmente el className
* //* linea 16 : extraemos del hook useProduct el counter y la funcion increaseBy
* //* linea 19 : envolvemos todo con el Provider en el value van los valores , los objetos y las funciones que vamos a compartir
* //* linea 20 : concatenamos los estilos propios del componente , y le agregamos unos via className
* //* linea 21 : aca van los otros componentes los cuales vamos a recibir como hijos
 *********************/