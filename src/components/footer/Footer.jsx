import styles from "./footer.module.css";

function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>logo</div>
      <div className={styles.text}> Lorem ipsum dolor sit amet.</div>
    </div>
  );
}

export default Footer;
