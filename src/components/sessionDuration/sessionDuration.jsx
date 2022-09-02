import "./sessionDuration.css"
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import PropTypes from "prop-types"


/**
 * 
 * @param {boolean} active 
 * @param {array} payload 
 * @returns 
 */
const CustomTooltip = ({ active, payload}) => {
    if (active && payload && payload.length) {
        return (
            <div className="session__tooltip">
                <p className="session__tooltip__txt">{payload[0].value} mn</p>
            </div>
        )
    }
}



const SessionDuration = ({ averageData }) => {
    
    /**
     * 
     * @param {number} value 
     * @returns {string} first letter of days
     */
    function formatXAxis(value) {
        if (value === 1) return 'L'
        if (value === 2) return 'M'
        if (value === 3) return 'M'
        if (value === 4) return 'J'
        if (value === 5) return 'V'
        if (value === 6) return 'S'
        if (value === 7) return 'D'
        return value
    }

    return (
    <div className="session">
        <div className="session__legend">
            <span>Durée moyenne des sessions</span>
        </div>
        <ResponsiveContainer>
            <LineChart
                data={ averageData }
                width={600}
                height={300}
                margin={{ top:80, right:15, left:15, bottom:0 }}
                >
                    
                    <XAxis
                        dataKey="day"
                        tickLine={false}
                        axisLine={false}
                        stroke="#FFFF"
                        domain={[0, 0]}
                        tick={{ fontSize: 12 }}
						minTickGap={3}
                        interval={'preserveStartEnd'}
                        tickFormatter={formatXAxis}
                    />
                    <YAxis hide={true} domain={['dataMin - 40', 'dataMax + 30']} dataKey="sessionLength"  tickLine={false}/>
                    <Tooltip content={<CustomTooltip />} />
                    <Line
                        dataKey="sessionLength"
                        type="natural"
                        dot={false}
                        stroke="#FFFF"
                        activeDot={{
							stroke: 'rgba(255, 255, 255, 0.5)',
							strokeWidth: 10,
							r: 5,
                        }}
                    />
            </LineChart>        
        </ResponsiveContainer>
    </div>
    )
}

/**
 * activityData return a array
 */
SessionDuration.propTypes = {
    activityData: PropTypes.array,
}

export default SessionDuration;