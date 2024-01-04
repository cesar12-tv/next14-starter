import Image from "next/image";
import styles from "./about.module.css";

function AboutPage() {
  return (
    <div>
      {/* importacion de imagen con next */}
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/10223476/pexels-photo-10223476.jpeg"
          alt=""
          fill
        />
      </div>
    </div>
  );
}

export default AboutPage;
