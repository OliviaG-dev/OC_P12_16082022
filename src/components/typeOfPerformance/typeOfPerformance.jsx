import "./typeOfPerformance.css";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";
import PropTypes from "prop-types";

const TypeOfPerformance = ({ performanceData }) => {
  if (!performanceData) {
    return null;
  }
  /**
   *
   * @param {number} value
   * @returns
   */
  function formatPerformance(value) {
    if (value === 1) return "Intensité";
    if (value === 2) return "Vitesse";
    if (value === 3) return "Force";
    if (value === 4) return "Endurance";
    if (value === 5) return "Energie";
    if (value === 6) return "Cardio";
    return value;
  }

  return (
    <div className="performance">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius={90} data={performanceData}>
          <PolarGrid radialLines={false} />
          <PolarAngleAxis
            dataKey="kind"
            stroke="#ffff"
            tickline={false}
            tick={{ fontSize: 11 }}
            tickFormatter={formatPerformance}
            strokeWidth={0}
          />
          <Radar
            dataKey="value"
            stroke="#FF0101"
            fill="#FF0101"
            fillOpacity={0.8}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

TypeOfPerformance.propTypes = {
  performanceData: PropTypes.array,
};

export default TypeOfPerformance;
