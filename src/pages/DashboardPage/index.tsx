import styles from "./styles.module.scss";
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
import Sidebar from "./components/sidebar/Sidebar";
import Summery from "./components/summery/Summery";
import Header from "./components/header/Header";

export default function DashboardPage() {
  const userGrowth = [
    { month: "فروردین", users: 80 },
    { month: "اردیبهشت", users: 120 },
    { month: "خرداد", users: 200 },
    { month: "تیر", users: 300 },
  ];

  const revenueData = [
    { month: "فروردین", income: 1500000 },
    { month: "اردیبهشت", income: 2200000 },
    { month: "خرداد", income: 3100000 },
    { month: "تیر", income: 4230000 },
  ];

  const notificationData = [
    { name: "خوانده‌شده", value: 60 },
    { name: "خوانده‌نشده", value: 40 },
  ];

  const COLORS = ["#0088FE", "#FF8042"];

  return (
    <div className={styles.container}>
      <Header className={styles.header} />
      <Sidebar className={styles.sidebar} />

      <div className={styles.workspace}>
        <Summery />

        <div className={styles.charts}>
          <div className={styles.chartCard}>
            <h3>رشد کاربران</h3>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={userGrowth}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="users" stroke="#8884d8" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className={styles.chartCard}>
            <h3>درآمد ماهانه</h3>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="income" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className={styles.chartCard}>
            <h3>وضعیت اعلان‌ها</h3>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={notificationData}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label
                >
                  {notificationData.map((_, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className={styles.chartCard}>
            <h3>درآمد ماهانه</h3>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="income" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
