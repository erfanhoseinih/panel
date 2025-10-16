import { useNavigate } from "react-router-dom";
import styles from "./styles.module.scss";

const Header = ({ className }: { className: string }) => {
  const navigate = useNavigate();

  return (
    <div className={`${styles.header} ${className}`}>
      <h1 className={styles.title}>داشبورد</h1>
      <button className={styles.logout} onClick={() => navigate("/")}>
        خروج
      </button>
    </div>
  );
};

export default Header;
