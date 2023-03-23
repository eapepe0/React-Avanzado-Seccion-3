import {createContext} from 'react'
import { useProduct } from "../hooks/useProduct";
import styles from "../styles/styles.module.css";

import { ProductContextProps, ProductCardProps } from '../interfaces/interfaces';
import { ProductTitle } from './ProductTitle';
import { ProductImage } from './ProductImage';
import { ProductButtons } from './ProductButtons';


export const ProductContext = createContext ({} as ProductContextProps); 
const { Provider } = ProductContext;

export const ProductCard = ({ children,product, className}: ProductCardProps) => {

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
 * //* linea 11 :  creamos un contexto para compartir entre padre e hijo
* //*              con el (as) decimos como se vera el context mediante la interface
* //*              lo exportamos asi lo pueden usar los otros componentes
********************  
* //* linea 14 : vamos a recibir el children , el product y opcionalmente el className
* //* linea 16 : extraemos del hook useProduct el counter y la funcion increaseBy
* //* linea 19 : envolvemos todo con el Provider en el value van los valores , los objetos y las funciones que vamos a compartir
* //* linea 20 : concatenamos los estilos propios del componente , y le agregamos unos via className
* //* linea 21 : aca van los otros componentes los cuales vamos a recibir como hijos
 *********************/