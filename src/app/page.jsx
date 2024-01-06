import React from "react";
import styles from "./home.module.css";
import Image from "next/image";

function HomePage() {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Agencia de pensamientos creativos. </h1>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque ullam
          sed neque. Totam voluptate rerum nobis quo accusantium ex inventore
        </p>
        <div className={styles.buttons}>
          <button className={styles.button}>Aprende más</button>
          <button className={styles.button}>Contactanos</button>
        </div>
        <div className={styles.brands}>
          <Image
            src="/brands.png"
            alt=""
            fill
            className={styles.brands}
          ></Image>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/hero.gif" fill className={styles.heroImg}></Image>
      </div>
    </div>
  );
}

export default HomePage;
