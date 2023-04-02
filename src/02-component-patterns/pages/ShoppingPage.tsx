import { useState } from "react";
import { ProductCard, ProductButtons, ProductImage, ProductTitle } from "../components";
import { Product } from "../interfaces/interfaces";

import '../styles/custom-styles.css'

const product = {
  id: "1",
  title: "Coffee Mug - Card",
  img: "./coffee-mug.png",
};

const product2 = { 
  id: "2",
  title: "Coffee Mug - Meme",
  img : "./coffee-mug2.png"
};


const products : Product[] =[ product, product2 ];
interface ProductInCart extends Product{
  count : number;
} 

export const ShoppingPage = () => {

  const [shoppingCart, setShoppingCart] = useState<{[ key : string ] : ProductInCart}>({
  /*   '1':{...product , count : 10},
    '2':{...product2 , count : 2}, */
  }); 

  const onProductCountChange = ({count , product } : {count : number , product : Product})=>{
    setShoppingCart( oldShoppingCart =>{
      
    const productInCart : ProductInCart  = oldShoppingCart[product.id] || {...product, count : 0};

    if (Math.max(productInCart.count + count , 0) > 0){
      productInCart.count += count ;
      return{
        ...oldShoppingCart,[product.id] : productInCart		
      }
    }

    const {[product.id] : toDelete, ...rest} = oldShoppingCart  
        return{
          ...rest
        }
  })
}

  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <div style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
        }}>
        

        {
        products.map (producto => (
          <ProductCard key= { producto.id } product={producto} className='bg-dark' onChange={onProductCountChange} value={shoppingCart[producto.id]?.count || 0}>
              <ProductImage className="custom-image"/>
              <ProductTitle className="text-white text-center text-bold" />
              <ProductButtons className="custom-button"/>
          </ProductCard>
        ))
        }
      </div>

      <div className="shopping-cart">
        {
          Object.entries(shoppingCart).map(([ key , product ])=>(

          <ProductCard key={key} product={product} className='bg-dark' style={{width : "100px"}} value={product.count} onChange={onProductCountChange}>
            <ProductImage className="custom-image"/>    
            <ProductTitle className="text-white text-center text-bold" style={{fontSize : "0.58rem"}} />
            <ProductButtons className="custom-button"/>
        </ProductCard>
        
          ))
        }
      
      </div>
      
    </div>
  );
};


/**
 * //* linea 3  : creamos el objeto product
 * //* linea 11 : creamos otro objeto product
 * //* linea 19 : creamos un arreglo de productos
 * //* linea 21 : es un producto que tiene una nueva propiedad , extiende el Product , tiene las mismas propiedades de Product mas lo que le agregamos
 * 
 * //* linea 27 : Creamos un objeto , para poder barrer mas rapido sus propiedades , 
 * //*            nuestro id es la llave que apunta a un objeto en el cual tenemos el producto , y la cantidad
 * //*           [] dice que vienen x cantidad de llaves , las cuales son string , los valores son ProductInCart
 * 
 * //* linea 32 : funcion que llamaremos cuando cambie algo en el carro
 * //* linea 49 - 54 : mostramos los productos mapeando el array de productos
 * //* linea 50 : tenemos la prop onProductChange
 * 
 * //* linea 59 - creamos otro productCard pero esta vez es la misma que las del map , pero en miniatura , tenemos que lograr que si aumentamos
 * //*            un item en el ProductCard, se agregue a la miniatura y si lo agregamos en la miniatura se agregue en el ProductCard
 * //*            tendra como prop el onChange que disparara la funcion onProductChange
 */