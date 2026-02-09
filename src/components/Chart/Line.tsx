import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  type ChartOptions,
} from "chart.js";
import { lineChartData } from "../../constants/chartData";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

export function LineGraph() {
  const options: ChartOptions<"line"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        enabled: true,
        backgroundColor: "#1F2937",
        titleColor: "#fff",
        bodyColor: "#fff",
        padding: 12,
        cornerRadius: 8,
        displayColors: false,
        intersect: false,
        mode: "index",
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
          drawOnChartArea: false,
        },
        border: {
          display: false,
        },
        ticks: {
          color: "#fff",
          font: {
            size: 11,
          },
          padding: 10,
          maxRotation: 0,
          minRotation: 0,
          autoSkip: true,
          maxTicksLimit: 5,
        },
      },
      y: {
        display: false,
        min: 0,
      },
    },
    layout: {
      padding: {
        left: 0,
        right: 0,
        top: 20,
        bottom: 0,
      },
    },
    elements: {
      line: { tension: 0.5 },
      point: {
        radius: 0,
        hitRadius: 50,
        hoverRadius: 6,
      },
    },
  };

  return (
    <div className="h-45 w-full">
      <Line options={options} data={lineChartData} />
    </div>
  );
}
