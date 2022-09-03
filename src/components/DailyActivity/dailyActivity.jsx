import "./dailyActivity.css";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

/**
 * 
 * @param {boolean} active 
 * @param {array} payload 
 * @returns 
 */
const CustomTooltip = ({ payload, active }) => {
  if (active && payload && payload.length) {
    return (
      <div className="customTooltip">
        <p className="desc">{payload[0].value + "kg"}</p>
        <p className="desc">{payload[1].value + "Kcal"}</p>
      </div>
    );
  }
  return null;
};


const DailyActivity = (props) => {
  let formatedProps = props.sessions?.map((item) => ({
    day: item.day.toString().slice(-1),
    kilogram: item.kilogram,
    calories: item.calories,
  }));

  return (
    <div className="barChart">
      <div className="barChart__title">
        <p className="barChart__title__name">Activité quotidienne</p>
        <div className="barChart__legend">
          <div className="legend__kilogram">
            <div className="legend__kilogram--blackRound"></div>
            <span>Poids (kg)</span>
          </div>
          <div className="legend__calories">
            <div className="legend__calorie--redRound"></div>
            <span>Calories brûlées (kg)</span>
          </div>
        </div>
      </div>

      <div style={{ width: "100%", height: 200 }}>
        <ResponsiveContainer>
          <BarChart data={formatedProps}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              domain={["dataMin", "dataMax"]}
              tick={{ stroke: "#9B9EAC" }}
            />

            <YAxis
              orientation="right"
              tickCount={3}
              domain={["dataMin - 1", "dataMax"]}
              dataKey="kilogram"
              axisLine={false}
              tickLine={false}
              tickMargin={30}
              tick={{ stroke: "#9B9EAC" }}
            />
            <YAxis
              tickCount={6}
              domain={[0, 600]}
              dataKey="calories"
              axisLine={false}
              tickLine={false}
              tick={false}
              hide={true}
              yAxisId="cl"
            />
            <Tooltip
              cursor={{ fill: "#C4C4C4", opacity: "0.5" }}
              content={<CustomTooltip />}
              offset={35}
            />

            <Bar
              dataKey="kilogram"
              fill="#282D30"
              radius={[10, 10, 0, 0]}
              unit="kg"
              barSize={10}
            />
            <Bar
              dataKey="calories"
              fill="#E60000"
              radius={[10, 10, 0, 0]}
              unit="kCal"
              yAxisId="cl"
              barSize={10}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default DailyActivity;
