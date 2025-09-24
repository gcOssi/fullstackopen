import { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const StatisticLine = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>  
)

const Statistics = ({ good, neutral, bad }) => {
  const total = good+neutral+bad
  if (total === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }
  const average = (good * 1 + neutral * 0 + bad * -1) / total;
  const positive = (good / total) * 100;
  return (
    <table>
      <tbody>
        <StatisticLine text="good" value={good} />
        <StatisticLine text="neutral" value={neutral} />
        <StatisticLine text="bad" value={bad} />
        <StatisticLine text="all" value={total} />
        <StatisticLine text="average" value={average.toFixed(1)} />
        <StatisticLine text="positive" value={`${positive.toFixed(1)} %`} />
      </tbody>
    </table>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  const goodClick = () => {
    const updatedGood = good + 1
    setGood(updatedGood)    
  }

  const neutralClick = () => {
    const updatedNeutral = neutral + 1
    setNeutral(updatedNeutral)
  }

  const badClick = () => {
    const updatedBad = bad + 1
    setBad(updatedBad)
  }

  return (
    <div>
      <h1>Greetings</h1>
        <Button handleClick={goodClick} text='good' />
        <Button handleClick={neutralClick} text='neutral' />
        <Button handleClick={badClick} text='bad' />
      
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App