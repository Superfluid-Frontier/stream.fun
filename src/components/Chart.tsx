import { dataChart } from "@/mocks/chart.mock";
import ReactApexChart from "react-apexcharts";

export function Chart() {
  return (
    <div className="app">
      <div className="row">
        <div className="mixed-chart">
          <ReactApexChart
            options={dataChart.options as any}
            series={dataChart.series}
            type="candlestick"
            height={350}
          />
        </div>
      </div>
    </div>
  );
}
