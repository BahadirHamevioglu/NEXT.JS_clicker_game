"use client";
import { numberConverter } from "@/libs/numberConverter";

import Image from "next/image";
import styles from "./styles.module.scss";

import { useHomeContext } from "../../useHomeContext";

function Clicker() {
  const { power, profit, clickerButton, increasePower, i } = useHomeContext();

  return (
    <button className={styles.button_clicker} onClick={clickerButton}>
      <div className={styles.button_clicker_image}>
        <Image src="/click.png" alt="clicker button image" fill />
      </div>
      <div className={styles.button_clicker_text}>
        Click to get <b>{numberConverter(Number(i))}</b>
      </div>
      {power > 1 && (
        <div className={styles.button_power}>
          Power: <b>{power}X</b>
        </div>
      )}
      {profit >= 1e12 && (
        <div className={styles.button_powerup} onClick={increasePower}>
          Power up — sacrifice all
        </div>
      )}
    </button>
  );
}
export default Clicker;
