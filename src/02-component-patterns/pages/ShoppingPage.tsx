import { ProductCard, ProductButtons, ProductImage, ProductTitle } from "../components";

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
        
        <ProductCard product={product} className="bg-dark" >
            <ProductCard.Image className="custom-image"/>
            <ProductCard.Title title={"Coffee Mug Card"} className='text-bold text-white text-center'/>
             <ProductCard.Buttons className="custom-button"/>
        </ProductCard>



        <ProductCard product={product2} className='bg-dark'>
            <ProductImage className="custom-image"/>
            <ProductTitle className="text-white text-center text-bold" />
            <ProductButtons className="custom-button"/>
        </ProductCard>
      </div>
    </div>
  );
};


/**
 * //* linea 3  :creamos el objeto product
 * //* linea 11 : creamos otro objeto product
 *  
 * //* linea 22 : agregamos unos estilos en linea , style={{}}
 * 
 * 
 * 
 */