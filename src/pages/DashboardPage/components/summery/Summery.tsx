import styles from "./styles.module.scss";
const Summery = () => {
  const config = [
    {
      label: "ولتاژ",
      data: "",
    },
    {
      label: "جریان",
      data: "",
    },
    {
      label: "توان",
      data: "",
    },
    {
      label: "ولتاژ",
      data: "",
    },
  ];

  return (
    <div>
      <div className={styles.cardGrid}>
        {config.map((item, index) => (
          <div key={index} className={styles.card}>
            <h3>{item.label}</h3>
            <p>{item.data}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Summery;
