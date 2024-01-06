import styles from "./contact.module.css";
import Image from "next/image";

function page() {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/contact.png" alt="" fill className={styles.img}></Image>
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <input type="text" placeholder="Nombre y apellido" />
          <input type="text" placeholder="Correo electrónico" />
          <input type="text" placeholder="Número de telefono (Opcional)" />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Mensaje"
          ></textarea>
          <button>Enviar</button>
        </form>
      </div>
    </div>
  );
}

export default page;
