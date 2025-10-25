import Sidebar from "./components/sidebar/Sidebar";
import Summery from "./components/summery/Summery";
import Header from "./components/header/Header";
import Charts from "./components/charts/Charts";

import styles from "./styles.module.scss";

import { useLayout } from "../../context/LayoutContext";
import { useState } from "react";

export default function DashboardPage() {
  const { chartsShow } = useLayout();
  const [showSidebar, setShowSidebar] = useState(true);
  return (
    <div className={styles.container}>
      <Header
        className={styles.header}
        showSidebar={showSidebar}
        setShowSidebar={setShowSidebar}
      />
      <Sidebar
        className={`${styles.sidebar} ${!showSidebar && styles.disable}`}
      />

      <div className={`${styles.workspace} ${showSidebar && styles.disableSidebar}`}>
        <Summery />
        {chartsShow && <Charts />}
      </div>
    </div>
  );
}
