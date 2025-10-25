import styles from "./styles.module.scss";

interface SummaryItem {
  label: string;
  data: string | number;
  unit?: string;
  className: string;
}

const Summery = () => {
  const config: SummaryItem[] = [
    { label: "ولتاژ (V)", data: 230, unit: "V", className: styles.card },
    { label: "جریان (A)", data: 5.2, unit: "A", className: styles.card },
    { label: "توان (W)", data: 1196, unit: "W", className: styles.card },
    {
      label: "انرژی تولیدی (kWh)",
      data: 12.4,
      unit: "kWh",
      className: styles.card,
    },
    {
      label: "میزان تولید انرژی روزانه",
      data: 12.4,
      unit: "kWh",
      className: `${styles.card} ${styles.item1}`,
    },
    {
      label: "میزان تولید انرژی ماهانه",
      data: 12.4,
      unit: "kWh",
      className: `${styles.card} ${styles.item2}`,
    },
  ];

  return (
    <div className={styles.cards}>
      {config.map((item, index) => (
        <div key={index} className={item.className}>
          <h3 className={styles.label}>{item.label}</h3>
          <p className={styles.data}>
            {item.data} {item.unit}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Summery;
