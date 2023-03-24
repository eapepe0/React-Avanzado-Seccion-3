import { Props as ProductCardProps } from '../components/ProductCard';
import { Props as ProductTitleProps } from '../components/ProductTitle'
import { PropsImage as ProductImageProps } from '../components/ProductImage'
import { Props as ProductButtonProps } from '../components/ProductButtons'

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
    Title   : (Props : ProductTitleProps) => JSX.Element ,  
    Image   : (Props : ProductImageProps)=> JSX.Element, 
    Buttons : (Props : ProductButtonProps) => JSX.Element , 
}

/**
 * 
 * //* linea 5 : definimos como se veria el producto (Product)
 * //* linea 6 :  el id sera una string
 * //* linea 7 :  el titulo sera una string
 * //* linea 8 : la imagen puede o no existir (?) , sera una string
 * 
 * //* linea 11 : definimos como se vera el Context
 * //* linea 12 : counter es un numero
 * //* linea 13 : es una funcion que no devuelve nada
 * //* linea 14 : producto se define como la interface de Product
 * 
 * //* linea 17 : interface de ProductCardHOC
 * //* linea 18 : recibe un children y un producto , el cual tiene como interface ProductCardProps, es un elemento JSX
 * //* linea 19 : el title , recive un title el cual es opcional , y es una string , devuelve un elemento JSX
 * //* linea 20 : el image , recibe un img el cual es opcional y es una string , devuelve un elemento JSX
 * //* linea 21 : buttons, es una funcion, que recibe un className , el cual es opcional y es un string , la funcion devuelve un elemento JSX
 * 
 */