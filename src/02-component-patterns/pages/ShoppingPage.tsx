import { ProductCard, ProductButtons, ProductImage, ProductTitle } from "../components";

import '../styles/custom-styles.css'

const product = {
  id: "1",
  title: "Coffee Mug - Card",
  img: "./coffee-mug.png",
};

const productNoImage = { 
  id: "1",
  title: "Coffee Mug - Card",
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
        
        <ProductCard product={product} >
            <ProductCard.Image />
            <ProductCard.Title title={"pepito"}/>
             <ProductCard.Buttons/>
        </ProductCard>



        <ProductCard product={product} className='bg-dark'>
            <ProductImage className="custom-image"/>
            <ProductTitle className="text-white text-center text-bold" />
            <ProductButtons className="custom-button"/>
        </ProductCard>
        
      </div>
    </div>
  );
};


/**
 * //* linea 3 :creamos el objeto product
 * //* linea 9 creamos un producto el cual no tenga una imagen , solamente para probar
 * 
 * //* linea 19 : agregamos unos estilos en linea , style={{}}
 * 
 * //* linea 26 : TypeScript nos dice que tenemos que mandarle algo llamado product 
 * 
 */