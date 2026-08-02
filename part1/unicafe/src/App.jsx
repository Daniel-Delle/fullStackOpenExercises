import { useState } from "react";
import Statistics from "./Components/Statistics";
import Button from "./Components/Button";
import StatisticsLine from "./Components/StatisticsLine";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  //calculating statistics ie all, average, and positive
  const all = good + neutral + bad;
  const average = all === 0 ? 0 : (good - bad) / all;
  const positive = all === 0 ? 0 : (good / all) * 100;

  return (
    <div>
      <h2>Give Feedback</h2>
      <Button
        good={() => setGood(good + 1)}
        neutral={() => setNeutral(neutral + 1)}
        bad={() => setBad(bad + 1)}
      />

      <h2>Statistics</h2>
      <table>
        <tbody>
          {all === 0 ? (
            <tr>
              <td>No feedback given</td>
            </tr>
          ) : (
            <>
              <StatisticsLine text="Good" value={good} />
              <StatisticsLine text="Neutral" value={neutral} />
              <StatisticsLine text="Bad" value={bad} />
              <Statistics all={all} average={average} positive={positive} />
            </>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default App;
