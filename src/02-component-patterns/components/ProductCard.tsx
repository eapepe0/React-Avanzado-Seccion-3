import { useProduct } from "../hooks/useProduct";

import styles from "../styles/styles.module.css";
import noImage from "../assets/no-image.jpg";

//* definimos como se verian las props , en este caso recibimos un product, el cual se ve como la interface Product
interface Props {
  product: Product;
}

//* definimos como se veria el producto
interface Product {
  id: string; //* el id sera una string
  title: string; //* el titulo sera una string
  img?: string; //*la imagen puede o no existir (?) , sera una string
}

export const ProductCard = ({ product }: Props) => {
    
  const { counter, increaseBy } = useProduct();

  return (
    <div className={styles.productCard}>
      <img
        className={styles.productImg}
        src={product.img ? product.img : noImage} //* le decimos al src que si existe el img , lo usamos de lo contrario usamos el noImage
        alt="Coffee Mug"
      />
      <span className={styles.productDescription}>{product.title}</span>{" "}
      {/*  mostramos el titulo*/}
      <div className={styles.buttonsContainer}>
        <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>
          -
        </button>
        <div className={styles.countLabel}>{counter}</div>
        <button className={styles.buttonAdd} onClick={() => increaseBy(+1)}>
          +
        </button>
      </div>
    </div>
  );
};
