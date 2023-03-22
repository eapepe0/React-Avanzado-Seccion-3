import {createContext, ReactElement, useContext} from 'react'
import { useProduct } from "../hooks/useProduct";

import styles from "../styles/styles.module.css";
import noImage from "../assets/no-image.jpg";

//* definimos como se verian las props , en este caso recibimos un product, el cual se ve como la interface Product
interface Props {
  product: Product;
  children?: ReactElement | ReactElement[];
  //* recibimos un children , el cual es un Elemento React que puede ser uno solo o varios (un arreglo)
}

//* definimos como se veria el producto
interface Product {
  id: string; //* el id sera una string
  title: string; //* el titulo sera una string
  img?: string; //*la imagen puede o no existir (?) , sera una string
}

//* definimos como se vera el Context
interface ProductContextProps {
  counter : number; //* counter es un numero
  increaseBy : (value : number) => void; //* es una funcion que no devuelve nada
  product : Product; //* producto se define como la interface de Product
}


//* creamos un contexto para compartir entre padre e hijo
//* con el (as) decimos como se vera el context mediante la interface
const ProductContext = createContext ({} as ProductContextProps); 
const { Provider } = ProductContext;


//* dividimos la imagen en otro pequeño componente para poderle dar mas control al usuario
export const ProductImage = ({img=''})=>{

    const { product } = useContext(ProductContext)

    let imgToShow :string; //* definimos que la variable es un string

    if(img){ //* si existe una imagen como prop
      imgToShow = img;
    } else if (product.img){ //* si existe el product.img mostramos eso
      imgToShow = product.img;
    }else { //* si no cae en ninguna de las anteriores
      imgToShow = noImage;
    }

    return(
        //* le decimos al src que si existe el img , lo usamos de lo contrario usamos el noImage
        <img className={styles.productImg} src={imgToShow} alt="Product" />
    )
}

//* cuando es una sola una propiedad no conviene crear una interface sino agregarlo asi {title : string} , la cual es opcional? sino toma el titulo del producto
export const ProductTitle= ({title} : {title? : string}) =>{

  //* extraemos el product del context
  const { product } = useContext(ProductContext);


  //* si existe el titulo lo mostramos sino el product.title
    return(
        <span className={styles.productDescription}>{title ? title : product.title}</span>
    )
}

//* creamos un interface donde counter es un numero , 
//* increaseBy es una funcion que tiene un valor de un numero , y no tiene return
/* interface ProductButtonProps{
    counter :number;
    increaseBy : (value:number)=> void ;
} */

//* en los botones , desestructuramos counter e increaseBy y usamos la interface

export const ProductButtons = () =>{

     const { increaseBy , counter } = useContext(ProductContext)
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
//* vamos a recibir el children y el product
export const ProductCard = ({ children,product }: Props) => {

  const { counter, increaseBy } = useProduct();

  //* envolvemos todo con el provider
  //* el value van los valores que vamos a compartir
  return (
    <Provider value={{
      counter , 
      increaseBy,
      product
    }}>
    <div className={styles.productCard}>
     {children}
    </div>
    </Provider>
  );
};


ProductCard.Title = ProductTitle;
ProductCard.Image = ProductImage;
ProductCard.Buttons = ProductButtons;