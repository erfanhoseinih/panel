import { useNavigate } from "react-router-dom";
import styles from "./styles.module.scss";
import { useState } from "react";

export default function LoginPage() {
  const navigate = useNavigate();
  const [user, setUser] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (user === "admin" && password === "1234") {
      navigate("/dashboard");
    }
  };

  return (
    <div className={styles.container}>
      <img src="/images/panel.png" alt="" />
      <div className={styles.card}>
        <h2 className={styles.title}>ورود به پنل</h2>
        <form onSubmit={handleLogin}>
          <input
            className={styles.input}
            type="text"
            placeholder="نام کاربری"
            required
            onChange={(e) => setUser(e.target.value)}
          />
          <input
            className={styles.input}
            type="password"
            placeholder="رمز عبور"
            required
            onChange={(e) => setPassword(e.target.value)}
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
