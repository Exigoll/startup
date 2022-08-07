import styles from "../styles/components/Header.module.scss";
import Image from "next/image";
import LogoIcon from "../public/logoIcon.svg";
import Logo from "./Logo";

const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <div></div>
    </header>
  );
};

export default Header;
