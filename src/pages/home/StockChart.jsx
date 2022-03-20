import React, { useState } from "react";
import Plot from "react-plotly.js";

export default function StockChart() {
  const [ticker, setTicker] = useState("AAPL");
  const [chartX, setChartX] = useState([1, 3, 6]);
  const [chartY, setChartY] = useState([0, 1, 2]);

  const [endDate, setEndDate] = useState();

  return (
    <div>
      <Plot
        data={[
          {
            x: chartX,
            y: chartY,
            type: "scatter",
            mode: "lines",
          },
        ]}
        layout={{ title: ticker }}
      />
    </div>
  );
}
