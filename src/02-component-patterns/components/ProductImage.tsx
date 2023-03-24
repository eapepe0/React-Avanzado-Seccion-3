import styles from "../styles/styles.module.css";
import noImage from "../assets/no-image.jpg";
import { useContext } from "react";
import { ProductContext } from "./ProductCard";

export interface PropsImage{
    img? : string;
    className? : string;
    style? : React.CSSProperties;
}
export const ProductImage = ({ img , className , style } : PropsImage)=>{

    const { product } = useContext(ProductContext)

    let imgToShow :string; 

    if(img){ 
      imgToShow = img;
    } else if (product.img){ 
      imgToShow = product.img;
    }else { 
      imgToShow = noImage;
    }

    return(
        <img className={`${styles.productImg} ${className}`} src={imgToShow} alt="Product" style={style}/>
    )
}


/**
 * //* linea 0  : dividimos la imagen en otro pequeño componente para poderle dar mas control al usuario
 * 
 * //* linea 6 : creamos una interface donde recibimos una imagen que puede existir o no que es un string y un className que puede existir o no que es una string
 * 
 * //* linea 9  : extraemos el product del context
 * //* linea 10 : le pasamos un img ,y un className con la interface PropsImage
 * //* linea 11 : definimos que la variable es un string
 * 
 * //* linea 13 : si existe una imagen como prop
 * //* linea 15 : si existe el product.img mostramos eso
 * //* linea 17 : si no cae en ninguna de las anteriores
 * 
 *  //* linea 22 : le decimos al src que si existe el img , lo usamos de lo contrario usamos el noImage
 */