import { useNavigate } from "react-router-dom";
import { useLayout } from "../../../../context/LayoutContext";
import styles from "./styles.module.scss";

const Sidebar = ({ className }: { className: string }) => {
  const navigate = useNavigate();

  const { chartsShow, setChartsShow } = useLayout();

  return (
    <div className={`${styles.sidebar} ${className}`}>
      <button onClick={() => setChartsShow(!chartsShow)}>
        مشاهده نمودار ها
      </button>

      <button>تنظیمات</button>
      <button className={styles.logout} onClick={() => navigate("/")}>
        خروج
      </button>
    </div>
  );
};

export default Sidebar;
