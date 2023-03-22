import { ProductCard as ProductCardHOC } from "./ProductCard"; 

import { ProductButtons } from "./ProductButtons";
import { ProductImage } from "./ProductImage";
import { ProductTitle } from "./ProductTitle";
import { ProductCardHOCProps } from "../interfaces/interfaces";



export { ProductButtons } from "./ProductButtons";
export { ProductImage } from "./ProductImage";
export { ProductTitle } from "./ProductTitle";

export const ProductCard: ProductCardHOCProps = Object.assign(ProductCardHOC , {
    Title   : ProductTitle , 
    Image   : ProductImage ,
    Buttons : ProductButtons,
})  

export default ProductCard;
/**
 * //* linea 1 : importamos el componente ProductCard y lo renombramos como ProductCardHOC (high order component)
 * 
 * //* linea 13 : ProductCard ahora es un objeto , lo cual tiene que tener un titulo , una imagen y unos botones
 * //*           en JavaScript todo es un objeto excepto los primitivos , por eso le agregaremos al objeto ProductCard nuevas propiedades
 * //*           usaremos la interface creada en el archivo interfaces.ts
 * 
 * //* linea 14 : Lo ponemos en mayuscula por que es un componente
 * 
 */