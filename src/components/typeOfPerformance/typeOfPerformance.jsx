import "./typeOfPerformance.css";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer} from "recharts";

let stat = {
              cardio : "Cardio",
              energy : "Energie",
              endurance : "Endurance",
              strength: "Force",
              speed: "Vitesse",
              intensity: "Intensité"
              }



const TypeOfPerformance = (props) => {

    let dataActivity = props.data?.map((item) => ({
                      value: item.value,
                      kind: stat[props.kind[item.kind]]
    }))

    return (
      <div className="performance">
        <ResponsiveContainer  width="100%" height="100%">
          <RadarChart
            cx="50%"
            cy="50%"
            outerRadius={90}
            startAngle={-150}
            endAngle={210}
            data={dataActivity}
          >
          <PolarGrid 
            radialLines={false}
          />
          <PolarAngleAxis
            dataKey="kind"
            stroke="#ffff"
            tickline={false}
            tick={{ fontSize: 11}}
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
    )
}


export default TypeOfPerformance;