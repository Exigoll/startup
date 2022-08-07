import styles from "../styles/components/Footer.module.scss";
import { BsFacebook, BsInstagram, BsTelegram, BsTwitter } from "react-icons/bs";
import { SiMaildotru } from "react-icons/si";
import { FaDiscord } from "@react-icons/all-files/fa/FaDiscord";
import Link from "next/link";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <nav className={styles.navigation}>
        <div className={styles.social}>
          <Logo />
          <ul className={styles.social__list}>
            <li className={styles.social__item}>
              <a
                href="https://discord.gg/wfquRdW6"
                target="_blank"
                rel="noreferrer"
              >
                <FaDiscord />
              </a>
            </li>
            <li className={styles.social__item}>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <BsInstagram />
              </a>
            </li>
            <li className={styles.social__item}>
              <a href="https://t.me/bsquests" target="_blank" rel="noreferrer">
                <BsTelegram />
              </a>
            </li>
            <li className={styles.social__item}>
              <a href="https://t.me/bsquests" target="_blank" rel="noreferrer">
                <BsTwitter />
              </a>
            </li>
            <li className={styles.social__item}>
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <BsFacebook />
              </a>
            </li>
            <li className={styles.social__item}>
              <a href="mailto:exigoll@bk.ru" target="_blank" rel="noreferrer">
                <SiMaildotru />
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.info}>
          <ul className={styles.info__list}>
            <li>
              <Link href="/help">
                <a>News</a>
              </Link>
            </li>
            <li>
              <Link href="/knowledgeBase">
                <a>Knowledge base</a>
              </Link>
            </li>
            <li>
              <Link href="/help">
                <a>Help</a>
              </Link>
            </li>
          </ul>
          <ul className={styles.info__list}>
            <li>
              <Link href="/help">
                <a>News</a>
              </Link>
            </li>
            <li>
              <Link href="/knowledgeBase">
                <a>Knowledge base</a>
              </Link>
            </li>
            <li>
              <Link href="/help">
                <a>Help</a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <p className={styles.reserved}>© 2022 B|S Quest. Все права защищены.</p>
    </footer>
  );
};

export default Footer;
