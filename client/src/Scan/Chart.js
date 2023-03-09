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
        backgroundColor: [
          "rgba(255, 0, 0, 1)",
          "rgba(12, 235, 220, 1)",
          "rgba(247, 185, 12, 1)",
          "rgba(19, 150, 5, 1)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
        ],
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
