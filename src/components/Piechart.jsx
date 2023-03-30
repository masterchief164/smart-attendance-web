import React, { useState } from "react";
import { Chart as ChartJs, Tooltip, Title, ArcElement, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
ChartJs.register(Tooltip, Title, ArcElement, Legend);

export const Piechart = ({piedata}) => {
  return (
    <div className="Piechart">
      <Pie data={piedata} />
    </div>
  );
};
