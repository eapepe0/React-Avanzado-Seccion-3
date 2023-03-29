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

export const ShoppingPage = () => {
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
          <ProductCard key= { producto.id }product={producto} className='bg-dark'>
              <ProductImage className="custom-image"/>
              <ProductTitle className="text-white text-center text-bold" />
              <ProductButtons className="custom-button"/>
          </ProductCard>
        ))
        }
      </div>

      <div className="shopping-cart">
      <ProductCard product={product2} className='bg-dark' style={{width : "100px"}}>
        <ProductImage className="custom-image"/>
        <ProductTitle className="text-white text-center text-bold" style={{fontSize : "0.58rem"}} />
        <ProductButtons className="custom-button"/>
      </ProductCard>
      </div>
    </div>
  );
};


/**
 * //* linea 3  :creamos el objeto product
 * //* linea 11 : creamos otro objeto product
 * //* linea 19 : creamos un arreglo de productos
 * 
 * //* linea 35 - 42 : mostramos los productos mapeando el array de productos
 * 
 * //* linea 45 - creamos otro productCard pero esta vez es la misma que las del map , pero en miniatura , tenemos que lograr que si aumentamos
 * //*            un item en el ProductCard, se agregue a la miniatura y si lo agregamos en la miniatura se agregue en el ProductCard
 */