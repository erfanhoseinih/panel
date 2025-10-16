import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import styles from "./styles.module.scss";

const Charts = () => {
  const energyProduced = [
    { month: "فروردین", energy: 120 },
    { month: "اردیبهشت", energy: 150 },
    { month: "خرداد", energy: 200 },
    { month: "تیر", energy: 250 },
  ];

  const voltageCurrent = [
    { month: "فروردین", voltage: 230, current: 5 },
    { month: "اردیبهشت", voltage: 231, current: 5.2 },
    { month: "خرداد", voltage: 232, current: 5.5 },
    { month: "تیر", voltage: 233, current: 6 },
  ];

  const panelStatus = [
    { name: "سالم", value: 85 },
    { name: "خطا", value: 15 },
  ];

  const panelEfficiency = [
    { name: "استفاده", value: 75 },
    { name: "هدررفت", value: 25 },
  ];

  const COLORS = ["#0088FE", "#FF8042"];

  return (
    <div className={styles.charts}>
      <div className={styles.chartCard}>
        <h3>تولید انرژی ماهانه (kWh)</h3>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={energyProduced}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="energy" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className={styles.chartCard}>
        <h3>ولتاژ و جریان میانگین ماهانه</h3>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={voltageCurrent}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="voltage" fill="#82ca9d" name="ولتاژ (V)" />
            <Bar dataKey="current" fill="#8884d8" name="جریان (A)" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className={styles.chartCard}>
        <h3>وضعیت پنل‌ها</h3>
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie
              data={panelStatus}
              cx="50%"
              cy="50%"
              outerRadius={80}
              dataKey="value"
              label
            >
              {panelStatus.map((_, index) => (
                <Cell
                  key={`cell-status-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className={styles.chartCard}>
        <h3>بازدهی پنل‌ها</h3>
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie
              data={panelEfficiency}
              cx="50%"
              cy="50%"
              outerRadius={80}
              dataKey="value"
              label
            >
              {panelEfficiency.map((_, index) => (
                <Cell
                  key={`cell-eff-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Charts;
