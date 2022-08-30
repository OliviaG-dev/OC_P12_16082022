import "./averageScore.css"
import {RadialBarChart, RadialBar, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import PropTypes from "prop-types"

const chartMargin = { top: 30, right: 30, bottom: 30, left: 30 }

const AverageScore = ({scorePercent}) => (

      <div className="score">
        <h2 className="score__title">Score</h2>
        <div className="score__content">
          <h3>{scorePercent * 100}%</h3>
          <p>de votre <br /> objectif</p>
        </div>

        <ResponsiveContainer className="score__container">
        <RadialBarChart
                data={[{ name: "Score", value: scorePercent }]}
                innerRadius="100%"
                barSize={10}
                startAngle={90}
                endAngle={450}
                width={300}
                height={300}
                margin={chartMargin}
            >
                <PolarAngleAxis tick={false} type="number" domain={[0, 1]} />
                <RadialBar
                    fill="#e60000"
                    cornerRadius={999}
                    dataKey={"value"}
                />
            </RadialBarChart>
        </ResponsiveContainer>
      </div>
    
)

AverageScore.propTypes = {
  scorePercent: PropTypes.number,
}


export default AverageScore;

