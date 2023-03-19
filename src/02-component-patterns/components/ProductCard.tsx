import styles from "../styles/styles.module.css";
import noImage from "../assets/no-image.jpg";
import { useState } from "react";

export const ProductCard = () => {
  const [counter, setCounter] = useState(0);

  //* funcion incrementa o decrementa depende del valor dado (+1/-1) el contador , pero no llega a irse al numeros negativos
  const increaseBy = (value: number) => {
    setCounter((prev) => Math.max(prev + value, 0));
  };
  return (
    <div className={styles.productCard}>
      {/* <img className={styles.productImg} src={noImage} alt="Coffee Mug" /> */}
      {/* producto sin imagen */}
      <img
        className={styles.productImg}
        src="./coffee-mug.png"
        alt="Coffee Mug"
      />
      <span className={styles.productDescription}>Coffee Mug</span>
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
