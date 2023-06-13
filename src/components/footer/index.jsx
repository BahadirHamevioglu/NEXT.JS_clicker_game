import Link from "next/link";

import styles from "./footer.module.scss";
function Footer() {
  return (
    <footer className={styles.footer}>
      inspired from 
      <Link href="https://react-clicker-game.netlify.app/">this game!</Link>
    </footer>
  );
}

export default Footer;
