import React, { useState, useEffect } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
const App = () => {
  const [goals, setGoals] = useState("");
  const [productivityData, setProductivityData] = useState([]);
  const saveGoal = () => {
    chrome.storage.sync.set({ dailyGoal: goals }, () => {
      alert("Goal Saved!");
    });
  };
  const fetchData = () => {
    setProductivityData([
      { name: "Website A", time: 2 },
      { name: "Website B", time: 4 },
      { name: "Website C", time: 3 },
    ]);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div style={{ padding: "30px", fontFamily: "Arial" }}>
      <h1>Personal Productivity Tracker</h1>
      <div>
        <h2>Set Your Daily Goal</h2>
        <input
          type="text"
          value={goals}
          onChange={(e) => setGoals(e.target.value)}
          placeholder="Enter daily goal"
        />
        <button onClick={saveGoal}>Save Goal</button>
      </div>
      <div>
        <h2>Productivity Trends</h2>
        <LineChart
          width={500}
          height={300}
          data={productivityData}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="time" stroke="#8884d8" />
        </LineChart>
      </div>
    </div>
  );
};
export default App;