import { ReactElement} from 'react'



export interface ProductCardProps {
    product: Product;
    children? : ReactElement | ReactElement[];
    className? : string;
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
  
export interface ProductCardHOCProps{ 
    ({children , product}:ProductCardProps):JSX.Element, 
    Title   : ({title} : {title? : string}) => JSX.Element ,  
    Image   : ({img} : {img? : string})=> JSX.Element, 
    Buttons : ({className} : {className? : string}) => JSX.Element , 
}

/**
 * //* linea 5 : definimos como se verian las props , en este caso recibimos un product, el cual se ve como la interface Product
 * //* linea 7 : recibimos un children , el cual es un Elemento React que puede ser uno solo o varios (un arreglo)
 * //* linea 8 : definimos que reciba un className el cual sera opcional y sera una string
 * 
 * //* linea 11 : definimos como se veria el producto (Product)
 * //* linea 12 :  el id sera una string
 * //* linea 13 :  el titulo sera una string
 * //* linea 14 : la imagen puede o no existir (?) , sera una string
 * 
 * //* linea 17 : definimos como se vera el Context
 * //* linea 18 : counter es un numero
 * //* linea 19 : es una funcion que no devuelve nada
 * //* linea 20 : producto se define como la interface de Product
 * 
 * //* linea 23 : interface de ProductCardHOC
 * //* linea 24 : recibe un children y un producto , el cual tiene como interface ProductCardProps, es un elemento JSX
 * //* linea 25 : el title , recive un title el cual es opcional , y es una string , devuelve un elemento JSX
 * //* linea 26 : el image , recibe un img el cual es opcional y es una string , devuelve un elemento JSX
 * //* linea 27 : buttons, es una funcion, que recibe un className , el cual es opcional y es un string , la funcion devuelve un elemento JSX
 * 
 */