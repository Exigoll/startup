import styles from "../styles/components/Header.module.scss";
import Image from "next/image";
import LogoIcon from "../public/logoIcon.svg";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`${styles.header__title} ${styles.titleHeader}`}>
        <Image src={LogoIcon} />
        <div className={styles.titleHeaderWrapper}>
          <h1>В|S Quest</h1>
          <h2>Figure it out or die</h2>
        </div>
      </div>
      <div></div>
    </header>
  );
};

export default Header;
