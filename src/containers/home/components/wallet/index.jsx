import { numberConverter } from "@/libs/numberConverter";

import styles from "./styles.module.scss";

import { useHomeContext } from "../../useHomeContext";

function Wallet() {
  let { balance } = useHomeContext();

  return (
    <section className={styles.section}>
      <div className={styles.title}>Current balance</div>
      <div className={styles.balance}>
        <span>$</span>
        {numberConverter(balance)}
      </div>
    </section>
  );
}

export default Wallet;
