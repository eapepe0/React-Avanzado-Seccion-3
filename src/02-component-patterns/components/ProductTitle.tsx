import { useContext } from "react";
import { ProductContext } from "./ProductCard";

import styles from "../styles/styles.module.css";

export const ProductTitle= ({title} : {title? : string}) =>{

    const { product } = useContext(ProductContext);

      return(
          <span className={styles.productDescription}>{title ? title : product.title}</span>
      )
}

/**
 * //* linea 6 : recibimos un titulo el cual es una string , pero puede no existir
 * //* cuando es una sola una prop no conviene crear una interface sino agregarlo asi {title : string} , la cual es opcional? sino toma el titulo del producto
 * 
 * //* linea 8 : extraemos el product del context
 * 
 *//* linea 11 : si existe el titulo lo mostramos sino el product.title
 */