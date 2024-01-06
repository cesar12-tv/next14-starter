import Image from "next/image";
import styles from "./about.module.css";

function AboutPage() {
  return (
    <div className={styles.container}>
      {/* importacion de imagen con next */}
      <div className={styles.txtContainer}>
        <h2 className={styles.subtitle}>acerca de la agencia</h2>
        <h1 className={styles.title}>
          Creamos ideas digitales que son más grandes, más audaces, más
          valientes y mejores.
        </h1>
        <p className={styles.desc}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. A quo veniam
          possimus beatae optio ut quod consequatur voluptatum totam deleniti
          temporibus vitae quaerat, ipsa iste eligendi. Beatae, quod similique
          velit deleniti aspernatur ipsa eligendi vel excepturi eaque quos
          corrupti voluptas sit quidem ea, rerum nobis dolores a odit nam
          perspiciatis omnis maiores. Minima sit, dolorem dolore accusamus nisi
          ut quas culpa aperiam, animi veritatis consectetur numquam.
          Aspernatur, cum fugit facere eos laborum illo quae ratione tenetur
          eaque dicta placeat nisi ullam beatae necessitatibus, libero et!
        </p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Años de experiencia.</p>
          </div>
          <div className={styles.box}>
            <h1>234 K+</h1>
            <p>Años de experiemcia.</p>
          </div>
          <div className={styles.box}>
            <h1>5 K+</h1>
            <p>Años de experiemcia.</p>
          </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image
          src="/about.png"
          alt="About image"
          fill
          className={styles.img}
        ></Image>
      </div>
    </div>
  );
}

export default AboutPage;
