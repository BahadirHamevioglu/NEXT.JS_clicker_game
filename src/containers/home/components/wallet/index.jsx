"use client";
import { numberConverter } from "@/libs/numberConverter";

import styles from "./styles.module.scss";

import { useHomeContext } from "../../useHomeContext";

function Wallet() {
  let { balance, balanceState } = useHomeContext();

  return (
    <section className={styles.section}>
      <div className={styles.title}>Current balance</div>
      <div className={styles.balance}>
        <span>$</span>
        {numberConverter(balanceState)}
      </div>
    </section>
  );
}

export default Wallet;
