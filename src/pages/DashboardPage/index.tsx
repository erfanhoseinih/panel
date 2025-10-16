import Sidebar from "./components/sidebar/Sidebar";
import Summery from "./components/summery/Summery";
import Header from "./components/header/Header";
import Charts from "./components/charts/Charts";

import styles from "./styles.module.scss";

import { useLayout } from "../../context/LayoutContext";

export default function DashboardPage() {
  const { chartsShow } = useLayout();
  return (
    <div className={styles.container}>
      <Header className={styles.header} />
      <Sidebar className={styles.sidebar} />

      <div className={styles.workspace}>
        <Summery />
        {chartsShow && <Charts />}
      </div>
    </div>
  );
}
