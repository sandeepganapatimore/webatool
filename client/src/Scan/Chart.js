import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

function chartConfig(arr) {
  return {
    labels: ["Violations", "In Applicable", "In Complete", "Passes"],
    datasets: [
      {
        // label: "# of Votes",
        data: arr,
        backgroundColor: ["#8C1D18", "#938F99", "#FFD8E4", "#D0BCFF"],
        borderColor: ["#8C1D18  ", "#938F99", "#FFD8E4", "#D0BCFF"],
        borderWidth: 1,
      },
    ],
  };
}

export default function PieChart(props) {
  const { results } = props;
  const arr = [
    results?.violations?.length,
    results?.inapplicable?.length,
    results?.incomplete?.length,
    results?.passes?.length,
  ];
  return <Pie data={chartConfig(arr)} />;
}
