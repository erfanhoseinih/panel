import styles from "./styles.module.scss";
import { Link } from "react-router-dom";

export default function SettingsPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>تنظیمات</h1>
      <Link to="/dashboard">بازگشت به داشبورد</Link>
    </div>
  );
}
