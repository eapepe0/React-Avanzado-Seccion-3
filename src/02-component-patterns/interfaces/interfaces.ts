import { ReactElement} from 'react'


export interface ProductCardProps {
    product: Product;
    children?: ReactElement | ReactElement[];
  }

  export interface Product {
    id: string; 
    title: string; 
    img?: string; 
  }

 export interface ProductContextProps {
    counter : number; 
    increaseBy : (value : number) => void; 
    product : Product; 
  }
  

/**
 * //* linea 4 : definimos como se verian las props , en este caso recibimos un product, el cual se ve como la interface Product
 * //* linea 6 : recibimos un children , el cual es un Elemento React que puede ser uno solo o varios (un arreglo)
 * 
 * //* linea 9 : definimos como se veria el producto (Product)
 * //* linea 10 :  el id sera una string
 * //* linea 11 :  el titulo sera una string
 * //* linea 12 : la imagen puede o no existir (?) , sera una string
 * 
 * //* linea 15 : definimos como se vera el Context
 * //* linea 16 : counter es un numero
 * //* linea 17 : es una funcion que no devuelve nada
 * //* linea 18 : producto se define como la interface de Product
 */