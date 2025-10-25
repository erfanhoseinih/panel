import { useState, useEffect } from "react";
import styles from "./styles.module.scss";

const Header = ({
  className,
  showSidebar,
  setShowSidebar,
}: {
  className: string;
  showSidebar: boolean;
  setShowSidebar: (v: boolean) => void;
}) => {
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
      <div
        className={styles.logo}
        onClick={() => {
          setShowSidebar(!showSidebar);
        }}
      >
        <p>Solar Panels</p> <img src="/images/logo.svg" />
      </div>
    </div>
  );
};

export default Header;
