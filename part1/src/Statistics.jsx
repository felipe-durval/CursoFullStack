const Statistics = ({ good, neutral, bad }) => { 
    const total = good + neutral + bad
    return (
        <div>
            <h2>statistics</h2>
            <p>good: {good}</p>
            <p>neutral: {neutral}</p>
            <p>bad: {bad}</p>
            <p>total: {total}</p>
            <p>average: {((good - bad) / total || 0).toFixed(2)}</p>
            <p>positive: {((good / total) * 100 || 0).toFixed(2)} %</p>  
        </div>
    )
}   

export default Statistics   