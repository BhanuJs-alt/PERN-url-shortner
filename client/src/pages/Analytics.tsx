import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export function Analytics() {
  return (
    <div className="analytics">
      {/* Summary Cards */}
      <div className="stats-grid">
        <div className="stat-card">
          <h3>Total Clicks</h3>
          <p>{24}</p>
        </div>

        <div className="stat-card">
          <h3>Unique Visitors</h3>
          <p>{12}</p>
        </div>

        <div className="stat-card">
          <h3>Returning Visitors</h3>
          {/* <p>
            {visitorData.filter(
              (visitor) => visitor.visits > 1
            ).length}
          </p> */}
        </div>
      </div>

      {/* Country Chart */}
      <div className="chart-card">
        <h2>Visitors by Country</h2>

        <ResponsiveContainer width="100%" height={300}>
          <BarChart>
            <XAxis dataKey="country" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="clicks" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Visitor Chart */}
      <div className="chart-card">
        <h2>Visitor Activity</h2>

        <ResponsiveContainer width="100%" height={300}>
          <BarChart>
            <XAxis dataKey="visitor" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="visits" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default Analytics;
