import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components/ProductCard";

//* creamos el objeto product

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
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {/* typescript nos dice que tenemos que mandarle algo llamado product */}
        <ProductCard product={product} >
        {/* Si al padre le mando un producto , eso se tendria que heredar a los hijos y que no hiciera falta de usar product.img o product.title */}
            <ProductCard.Image img={product.img}/>
            <ProductCard.Title title={"pepito"}/>

            {/* si comentamos el componente button podemos ver que el programa funciona */}
            {/* pero por que no funciona */}
            {/* En el componente Button , tenemos referencias a una funcion y a un estado el cual ni siquiera esta en el mismo componente sino en ProductCard */}

             <ProductCard.Buttons/>

        </ProductCard>



        <ProductCard product={productNoImage} >
            <ProductImage/>
            <ProductTitle title={"Producto sin imagen"}/>
            <ProductButtons />
        </ProductCard>
        
      </div>
    </div>
  );
};
