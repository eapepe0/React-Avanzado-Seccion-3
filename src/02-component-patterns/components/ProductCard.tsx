import { useProduct } from "../hooks/useProduct";

import styles from "../styles/styles.module.css";
import noImage from "../assets/no-image.jpg";

//* definimos como se verian las props , en este caso recibimos un product, el cual se ve como la interface Product
interface Props {
  product: Product;
}

//* definimos como se veria el producto
interface Product {
  id: string; //* el id sera una string
  title: string; //* el titulo sera una string
  img?: string; //*la imagen puede o no existir (?) , sera una string
}

//* dividimos la imagen en otro pequeño componente para poderle dar mas control al usuario
export const ProductImage = ({img=''})=>{
    return(
        //* le decimos al src que si existe el img , lo usamos de lo contrario usamos el noImage
        <img className={styles.productImg} src={img ? img : noImage} alt="Product" />
    )
}

//* cuando es una sola una propiedad no conviene crear una interface sino agregarlo asi {title : string}
export const ProductTitle= ({title} : {title : string}) =>{
    return(
        <span className={styles.productDescription}>{title}</span>
    )
}

//* creamos un interface donde counter es un numero , 
//* increaseBy es una funcion que tiene un valor de un numero , y no tiene return
interface ProductButtonProps{
    counter :number;
    increaseBy : (value:number)=> void ;
}

//* en los botones , desestructuramos counter e increaseBy y usamos la interface

export const ProductButtons = ({ counter , increaseBy }:ProductButtonProps) =>{
    return (
    <div className={styles.buttonsContainer}>
        <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>
          -
        </button>
        <div className={styles.countLabel}>{counter}</div>
        <button className={styles.buttonAdd} onClick={() => increaseBy(+1)}>
          +
        </button>
    </div>
    );
}

export const ProductCard = ({ product }: Props) => {

  const { counter, increaseBy } = useProduct();

  return (
    <div className={styles.productCard}>
      <ProductImage img={product.img}/>
      <ProductTitle title = {product.title}/>
      <ProductButtons counter={counter} increaseBy={increaseBy}/>
      
    </div>
  );
};
