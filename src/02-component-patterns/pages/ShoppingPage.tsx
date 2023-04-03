import { ProductCard, ProductButtons, ProductImage, ProductTitle } from "../components";
import { products } from "../data/products";
import { useShoppingCart } from "../hooks/useShoppingCart";


import '../styles/custom-styles.css'

export const ShoppingPage = () => {

  const { shoppingCart , onProductCountChange } = useShoppingCart();
  
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