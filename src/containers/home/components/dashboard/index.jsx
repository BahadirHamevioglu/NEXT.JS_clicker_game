"use client";
import styles from "./styles.module.scss";

import DashboardButton from "./components/dashboard_button";

import { useHomeContext } from "../../useHomeContext";

function Dashboard() {
  const { upgrades, purchaseUpgrade } = useHomeContext();
  return (
    <section className={styles.section}>
      <div className={styles.dashboard}>
        {upgrades.map((mine) => (
          <DashboardButton
            key={mine.id}
            image={`/${mine.image}`}
            title={mine.title}
            profit={mine.profit}
            canPurchasable={mine.canPurchasable}
            quantity={mine.quantity}
            sacrifice={mine.sacrifice}
            isSacrifice={mine.isSacrifice}
            id={mine.id}
            onClick={purchaseUpgrade}
          />
        ))}
      </div>
    </section>
  );
}

export default Dashboard;
