import React, { useEffect, useState } from "react";
import Plot from "react-plotly.js";

export default function StockChart() {
  const [ticker, setTicker] = useState("AAPL");

  const [chartX, setChartX] = useState([1, 3, 6]);
  const [chartY, setChartY] = useState([0, 1, 2]);

  let today = new Date();
  const [startDate, setStartDate] = useState(
    today.getFullYear() -
      1 +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate()
  );
  const [endDate, setEndDate] = useState(
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate()
  );

  console.log(startDate, endDate);

  //   const API_KEY = "R5l9TcJ_bCGQqYQ82Ym3iVKM_39u99eG";
  //   let polygonURL =
  //     "https://api.polygon.io/v2/aggs/ticker/" +
  //     ticker +
  //     "/range/1/day/" +
  //     lastyear +
  //     "/" +
  //     yestdate +
  //     "?unadjusted=false&sort=asc&limit=251&apiKey=" +
  //     API_KEY;

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
