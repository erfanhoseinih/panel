import styles from "./styles.module.scss";

interface SummaryItem {
  label: string;
  data: string | number;
  unit?: string;
}

const Summery = () => {
  const config: SummaryItem[] = [
    { label: "ولتاژ (V)", data: 230, unit: "V" },
    { label: "جریان (A)", data: 5.2, unit: "A" },
    { label: "توان (W)", data: 1196, unit: "W" },
    { label: "انرژی تولیدی (kWh)", data: 12.4, unit: "kWh" },
  ];

  return (
    <div className={styles.cardGrid}>
      {config.map((item, index) => (
        <div key={index} className={styles.card}>
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
