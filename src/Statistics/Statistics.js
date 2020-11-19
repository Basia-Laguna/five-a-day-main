import React from "react";
import Paper from "@material-ui/core/Paper";
import {
  Chart,
  BarSeries,
  Title,
  ArgumentAxis,
  ValueAxis,
} from "@devexpress/dx-react-chart-material-ui";

import { Animation } from "@devexpress/dx-react-chart";
import moment from "moment";
import picture from "./statistics-picture.png";

const mockData = [
  {
    day: moment().subtract(6, "days").format("DD/MM").toString(),
    portion: 5,
  },
  {
    day: moment().subtract(5, "days").format("DD/MM").toString(),
    portion: 4,
  },
  {
    day: moment().subtract(4, "days").format("DD/MM").toString(),
    portion: 6,
  },
  {
    day: moment().subtract(3, "days").format("DD/MM").toString(),
    portion: 4,
  },
  {
    day: moment().subtract(2, "days").format("DD/MM").toString(),
    portion: 5,
  },
  {
    day: moment().subtract(1, "days").format("DD/MM").toString(),
    portion: 3,
  },
];

const Statistics = () => {
  //   localStorage.removeItem("statistics");
  if (localStorage.getItem("statistics") === null) {
    localStorage.setItem("statistics", JSON.stringify(mockData));
  }
  const data = JSON.parse(localStorage.getItem("statistics"));

  return (
    <Paper>
      <Chart data={data}>
        <ArgumentAxis />
        <ValueAxis max={7} />

        <BarSeries valueField="portion" argumentField="day" />
        <Title text="How did it go?" />
        <Animation />
      </Chart>
      <Picture />
    </Paper>
  );
};

function Picture() {
  console.log(picture);
  return (
    <div className="Illustration">
      <img src={picture} alt="happy-carrot-person" height={250} />
    </div>
  );
}

export default Statistics;
