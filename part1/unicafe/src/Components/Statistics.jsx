import React from "react";
import StatisticsLine from "./StatisticsLine";

function Statistics({ all, average, positive }) {
  return (
    <>
      <StatisticsLine text="All" value={all} />
      <StatisticsLine text="Average" value={average} />
      <StatisticsLine text="Positive" value={`${positive} %`} />
    </>
  );
}

export default Statistics;
