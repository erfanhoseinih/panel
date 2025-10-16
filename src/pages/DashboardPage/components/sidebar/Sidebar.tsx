import styles from "./styles.module.scss";

const Sidebar = ({ className }: { className: string }) => {
  return (
    <div className={`${styles.sidebar} ${className}`}>
      <div className={styles.logo}>
        <p>Solar Panels</p> <img src="/images/logo.svg" />
      </div>
      <button>مشاهده نمودار ها</button>

      <button>تنظیمات</button>
    </div>
  );
};

export default Sidebar;
