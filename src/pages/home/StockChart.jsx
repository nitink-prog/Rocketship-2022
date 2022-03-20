import React, { useEffect, useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import Plot from "react-plotly.js";

export default function StockChart() {
  // states for charting
  const [ticker, setTicker] = useState("AAPL");
  const [chartX, setChartX] = useState([1, 3, 6]);
  const [chartY, setChartY] = useState([0, 1, 2]);

  // setting date range to display in chart
  let today = new Date();
  const [startDate, setStartDate] = useState(
    today.getFullYear() -
      1 +
      "-" +
      String(today.getMonth() + 1).padStart(2, "0") +
      "-" +
      String(today.getDate()).padStart(2, "0")
  );
  const [endDate, setEndDate] = useState(
    today.getFullYear() +
      "-" +
      String(today.getMonth() + 1).padStart(2, "0") +
      "-" +
      String(today.getDate()).padStart(2, "0")
  );

  let polygonURL =
    "https://api.polygon.io/v2/aggs/ticker/" +
    ticker +
    "/range/1/day/" +
    startDate +
    "/" +
    endDate +
    "?unadjusted=false&sort=asc&limit=251&apiKey=R5l9TcJ_bCGQqYQ82Ym3iVKM_39u99eG";

  const { data, isPending, error } = useFetch(polygonURL);

  const mapData = () => {
    // let mappedData = [];
    // data.results.map((result) => {
    //   //   mappedData = [...mappedData, result.vw];
    //   console.log(result.vw);
    // });
    // console.log(mappedData);
    // setChartX(mappedData);
    let mappedData = [];
    console.log(mappedData);

    console.log(data.results);
  };

//   useEffect(() => {
//     mapData();
//   }, [data]);

  return (
    <div>
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}

      {data && (
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
      )}

      {data && (
        <ul>
          {data.results.map((result) => (
            <li>{result.vw}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
