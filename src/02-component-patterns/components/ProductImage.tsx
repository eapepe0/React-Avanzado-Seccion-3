import styles from "../styles/styles.module.css";
import noImage from "../assets/no-image.jpg";
import { useContext } from "react";
import { ProductContext } from "./ProductCard";


export const ProductImage = ({img=''})=>{

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
        <img className={styles.productImg} src={imgToShow} alt="Product" />
    )
}


/**
 * //* linea 0 : dividimos la imagen en otro pequeño componente para poderle dar mas control al usuario
 * 
 * //* linea 9 : extraemos el product del context
 * //* linea 11 : definimos que la variable es un string
 * 
 * //* linea 13 : si existe una imagen como prop
 * //* linea 15 : si existe el product.img mostramos eso
 * //* linea 17 : si no cae en ninguna de las anteriores
 * 
 *  //* linea 22 : le decimos al src que si existe el img , lo usamos de lo contrario usamos el noImage
 */