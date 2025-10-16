import { useState, useEffect } from "react";
import styles from "./styles.module.scss";

const Header = ({ className }: { className: string }) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formattedTime = time.toLocaleTimeString("fa-IR");

  return (
    <div className={`${styles.header} ${className}`}>
      <h1 className={styles.title}>{formattedTime}</h1>
    </div>
  );
};

export default Header;
