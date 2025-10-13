import { useNavigate } from "react-router-dom";
import styles from "./styles.module.scss";

export default function DashboardPage() {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>داشبورد</h1>
        <button className={styles.logout} onClick={() => navigate("/")}>
          خروج
        </button>
      </div>

      <div className={styles.cardGrid}>
        <div className={styles.card}>
          <h3>کاربران</h3>
          <p>۱۲۴ کاربر فعال</p>
        </div>
        <div className={styles.card}>
          <h3>درآمد</h3>
          <p>۴٬۲۳۰٬۰۰۰ تومان</p>
        </div>
        <div className={styles.card}>
          <h3>اعلان‌ها</h3>
          <p>۵ اعلان جدید</p>
        </div>
      </div>
    </div>
  );
}
