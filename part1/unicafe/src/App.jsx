import { useState } from 'react'


const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const StatisticsLine = ({text, value}) => {
  if (text == "positive"){
    return(
      <p>{text} {value} %</p>
    )
  }
  return(
    <p>{text} {value}</p>
  )
}

const Statistics = ({good,neutral,bad}) => {
  if(good==0 && neutral == 0 && bad==0){
    return(
      <p>No feedback given</p>
    )
  }
  return (
    <>
     <tr>
     <td>Hi, I'm your first cell.</td>
     <td>I'm your second cell.</td>
     <td>I'm your third cell.</td>
     <td>I'm your fourth cell.</td>
     </tr>
     <tr>
     <td>Hi, I'm your first cell.</td>
     <td>I'm your second cell.</td>
     <td>I'm your third cell.</td>
     <td>I'm your fourth cell.</td>
     </tr>
     <StatisticsLine text={"good"} value={good}/>
     <StatisticsLine text={"neutral"} value={neutral}/>
     <StatisticsLine text={"bad"} value={bad}/>
     <StatisticsLine text={"total"} value={good+neutral+bad}/>
     <StatisticsLine text={"average"} value={(good*1+neutral*0-bad)/(good+neutral+bad)}/>
     <StatisticsLine text={"positive"} value={100*good/(good+neutral+bad)}/>
     </>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

const handleGoodClick = () =>{
  setGood(good+1)
}
const handleNeutralClick = () =>{
  setNeutral(neutral+1)
}
const handleBadClick = () =>{
  setBad(bad+1)
}

  return (
    <div>
     <h1>give feedback</h1>
     <Button text="good" handleClick={handleGoodClick}/> <Button 
     text="neutral" handleClick={handleNeutralClick}/> <Button 
     text="bad" handleClick={handleBadClick}/>
     <h1>statistics</h1>
     <Statistics good={good} neutral={neutral} bad={bad}></Statistics>
    
    </div>
  )
}

export default App