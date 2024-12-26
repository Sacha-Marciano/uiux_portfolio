"use client";

import { useRef, useEffect } from "react";
import { Chart } from "chart.js/auto";

export default function DoughnutChart({ data1, data2 }) {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      if (chartRef.current.chart) {
        chartRef.current.chart.destroy();
      }

      // customDataLabels plugin block
      const customDataLabels = {
        id: "customDataLabels",
        afterDatasetsDraw(chart, args, pluginOptions) {
          const {
            ctx,
            data,
            chartArea: { top, bottom, left, righ, width, height },
          } = chart;

          ctx.save();

          const halfWidth = width / 2 + left;
          const halfHeight = height / 2 + top;

          data.datasets[0].data.forEach((datapoint, index) => {
            const { x, y } = chart
              .getDatasetMeta(0)
              .data[index].tooltipPosition();
            const xLine = x >= halfWidth ? x + 25 : x - 25;
            const yLine = y >= halfHeight ? y + 25 : y - 25;

            ctx.font = "bold 12px sans-serif";
            ctx.fillStyle = data.datasets[0].backgroundColor[index];
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";

            ctx.fillText(datapoint, xLine, yLine);
          });
        },
      };
      // get context
      const context = chartRef.current.getContext("2d");
      // chart display
      const newChart = new Chart(context, {
        type: "doughnut",
        data: {
          datasets: [
            {
              data: [data1, data2],
              backgroundColor: ["#FB0160", "#FB016040"],
              borderWidth: 0,
              borderRadius: [5, 0],
              spacing: -2,
            },
          ],
        },
        options: {
          tooltips: {
            callbacks: {
              label: (item) => `${item.dataset.label}%`,
            },
          },
          responsive: true,
          cutout: 50,
          layout: {
            padding: 30,
          },
          plugins: {
            legend: {
              display: false,
            },
          },
        },
        plugins: [customDataLabels],
      });

      chartRef.current.chart = newChart;
    }
  }, []);
  return (
    <div style={{ position: "relative", width: "200px", height: "200px" }}>
      <canvas ref={chartRef} />
    </div>
  );
}
