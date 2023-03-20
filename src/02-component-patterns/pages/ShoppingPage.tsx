import { ProductCard } from "../components/ProductCard";

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
        <ProductCard product={product} />
        <ProductCard product={product} />
        <ProductCard product={productNoImage} />
        <ProductCard product={product} />
        <ProductCard product={productNoImage} />
        <ProductCard product={product} />
        <ProductCard product={product} />
        <ProductCard product={productNoImage} />
      </div>
    </div>
  );
};
