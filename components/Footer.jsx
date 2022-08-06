import styles from "../styles/components/Footer.module.scss";
import { BsGithub, BsInstagram, BsTelegram } from "react-icons/bs";
import { SiMaildotru } from "react-icons/si";
import { FaDiscord } from "@react-icons/all-files/fa/FaDiscord";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      {/*TODO: сделать ахуительные иконки, которые при наведении будут уезжать вправо на 50px и будет показываться
         называние соц сети*/}
      <nav className={styles.navigation}>
        <div className={styles.navigation__list}>
          <h3>Community:</h3>
          <a
            href="https://discord.gg/wfquRdW6"
            target="_blank"
            rel="noreferrer"
          >
            <FaDiscord />
          </a>
        </div>
        <div className={styles.navigation__list}>
          <h3>Social:</h3>
          <a href="" target="_blank" rel="noreferrer">
            <BsInstagram />
          </a>
          <a href="https://t.me/bsquests" target="_blank" rel="noreferrer">
            <BsTelegram />
          </a>
        </div>
        <div className={styles.navigation__list}>
          <h3>Info:</h3>
          <div>
            <a
              href="https://github.com/Exigoll/startup"
              target="_blank"
              rel="noreferrer"
            >
              <BsGithub />
            </a>
            <a href="mailto:exigoll@bk.ru" target="_blank" rel="noreferrer">
              <SiMaildotru />
            </a>
          </div>
        </div>
      </nav>
      <div className={styles.info}>
        <Link href="/help">
          <a></a>
        </Link>
      </div>
      <p className={styles.reserved}>© 2022 B|S Quest. Все права защищены.</p>
    </footer>
  );
};

export default Footer;
