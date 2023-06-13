import Image from "next/image";
import { numberConverter } from "@/libs/numberConverter";
import { priceCalculator } from "@/libs/priceCalculator";

import styles from "../styles.module.scss";

import { useHomeContext } from "@/containers/home/useHomeContext";

function DashboardButton({
  image = "/iron.png",
  title = "NO MINE",
  profit = 0,
  canPurchasable = false,
  quantity = 0,
  sacrifice = 0,
  isSacrifice = false,
  onClick = () => {},
  price = priceCalculator(profit, quantity, sacrifice),
  id,
}) {
  const { balance } = useHomeContext();

  const handleClick = () => {
    onClick?.(canPurchasable, price, id, isSacrifice);
  };

  if (price <= balance) canPurchasable = true;
  return (
    <button
      className={`${styles.dashboard_upgrade_button} ${
        canPurchasable ? "" : styles.dashboard_upgrade_button_disabled
      }`}
      onClick={handleClick}
    >
      <div className={styles.dashboard_upgrade_button_image}>
        <Image src={image} alt="upgrade button image" fill />
      </div>
      <div className={styles.dashboard_upgrade_button_texts}>
        <div className={styles.dashboard_upgrade_button_title}>
          <span>Extra $</span>
          <span>{numberConverter(profit)}</span>
          <span>/click</span>
        </div>
        <div className={styles.dashboard_upgrade_button_value}>{title}</div>
      </div>
      <div className={styles.dashboard_upgrade_button_background_images}>
        <Image
          src={image}
          alt="upgrade button image"
          width={64}
          height={64}
          className={`${styles.dashboard_upgrade_button_background_image} ${styles.dashboard_upgrade_button_background_image_top}`}
        />
        <Image
          src={image}
          alt="upgrade button image"
          width={64}
          height={64}
          className={`${styles.dashboard_upgrade_button_background_image} ${styles.dashboard_upgrade_button_background_image_bottom}`}
        />
      </div>
      <div className={styles.dashboard_upgrade_button_buy}>
        <span>$</span>
        <span>{numberConverter(price)}</span>
      </div>
      <div className={styles.dashboard_upgrade_button_upgrades}>
        {sacrifice > 0 && (
          <div className={styles.dashboard_upgrade_button_sacrifice}>
            {sacrifice}
          </div>
        )}
        {quantity > 0 && (
          <div className={styles.dashboard_upgrade_button_quantity}>
            {quantity}
          </div>
        )}
      </div>
      {isSacrifice && (
        <div className={styles.dashboard_upgrade_button_sacrifice_button}>
          <div
            className={styles.dashboard_upgrade_button_sacrifice_button_title}
          >
            SACRIFICE
          </div>
          <div
            className={styles.dashboard_upgrade_button_sacrifice_button_value}
          >
            +{numberConverter(profit * 2)} ekstra profit
          </div>
        </div>
      )}
    </button>
  );
}

export default DashboardButton;
