import styles from "../styles/components/Logo.module.scss";
import Image from "next/image";
import LogoIcon from "../public/logoIcon.svg";

const Logo = () => {
  return (
    <div className={styles.logo}>
      <Image src={LogoIcon} />
      <div className={styles.logo__title}>
        <h1>В|S Quest</h1>
        <h2>Figure it out or die</h2>
      </div>
    </div>
  );
};

export default Logo;
