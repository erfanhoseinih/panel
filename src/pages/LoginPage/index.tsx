import { useNavigate } from "react-router-dom";
import styles from "./styles.module.scss";

export default function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // fake auth
    navigate("/dashboard");
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h2 className={styles.title}>ورود به پنل</h2>
        <form onSubmit={handleLogin}>
          <input
            className={styles.input}
            type="text"
            placeholder="نام کاربری"
            required
          />
          <input
            className={styles.input}
            type="password"
            placeholder="رمز عبور"
            required
          />
          <button type="submit" className={styles.button}>
            ورود
          </button>
        </form>
        <p className={styles.link}>رمز خود را فراموش کرده‌اید؟</p>
      </div>
    </div>
  );
}
