import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {useState} from 'react'

const root = ReactDOM.createRoot(document.getElementById('root'));

const Title = ({title}) => <h1>{title}</h1>

const WarningNotUsed = () => <div><p>No feedback given</p></div>

const INITIAL_STATE = {
  good: 0,
  neutral: 0,
  bad: 0, 
  sum: 0
}

const App = () => {

  const [counters, setCounters] = useState(INITIAL_STATE)

  const [clicks, setClicks] = useState([])

  const handleClickGood = () => {
    setCounters({
      ...counters,
      good: counters.good + 1,
      sum: counters.sum + 1
    })
    setClicks((prevClicks) => [...prevClicks, 1 ])
  }

  const handleClickNeutral = () => {
    setCounters({
      ...counters,
      neutral: counters.neutral + 1,
    })
    setClicks((prevClicks) => [...prevClicks, 0 ])
  }

  const handleClickBad = () => {
    setCounters({
      ...counters,
      bad: counters.bad + 1,
      sum: counters.sum - 1
    })
    setClicks((prevClicks) => [...prevClicks, -1 ])
  }

  const handleReset = () => {
    setCounters(INITIAL_STATE)
    setClicks([])
  }

  let sumar = counters.good + counters.bad + counters.neutral
  let avg = (counters.sum) / sumar
  let per = (counters.good * 100) / sumar

  return (
    <div>
      <Title title="Give Feedback" />
      <button onClick={handleClickGood}>Good</button>
      <button onClick={handleClickNeutral}>Neutral</button>
      <button onClick={handleClickBad}>Bad</button>
      <p><button onClick={handleReset}>RESET</button></p>
      <Title title="Statics" />
      { clicks.length === 0 
      ? (<WarningNotUsed />) 
      : (<div>
        <table>
          <tr>
            <th>Good</th>
            <td>{counters.good}</td>
          </tr>
          <tr>
            <th>Neutral</th>
            <td>{counters.neutral}</td>
          </tr>
          <tr>
            <th>Bad</th>
            <td>{counters.bad}</td>
          </tr>
          <tr>
            <th>All</th>
            <td>{clicks.length}</td>
          </tr>
          <tr>
            <th>Average</th>
            <td>{avg}</td>
          </tr>
          <tr>
            <th>Positive</th>
            <td>{per} %</td>
          </tr>
      </table>
      </div>) }
    </div>
  )
}

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();