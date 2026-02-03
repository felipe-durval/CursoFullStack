import StatisticsLine from "./Statisticline"


const Statistics = ({ good, neutral, bad }) => { 
    const total = good + neutral + bad
    const average = (good - bad) / total
    const positive = (good / total) * 100
    return (total === 0) ? (
        <div>
            <h2>statistics</h2>
            <p>No feedback given</p>
        </div>
    ) : (     
        <div>
            <h2>Statistics</h2>
            <table>
                <tbody>
                <StatisticsLine text="good" value={good} />
                <StatisticsLine text="neutral" value={neutral} />
                <StatisticsLine text="bad" value={bad} />
                <StatisticsLine text="all" value={total} />
                <StatisticsLine text="average" value={average.toFixed(2)} />
                <StatisticsLine text="positive" value={`${positive.toFixed(2)} %`} />  
                </tbody>  
            </table>
        </div>
    )
}   

export default Statistics   