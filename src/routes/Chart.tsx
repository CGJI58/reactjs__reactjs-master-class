import { useQuery } from "@tanstack/react-query";
import { fetchCoinHistory } from "../api";
import ApexChart from "react-apexcharts";
import { theme } from "../theme";

interface IChartProps {
  coinId: string;
}

interface IHistoricalData {
  time_open: number;
  time_close: number;
  open: string;
  high: string;
  low: string;
  close: string;
  volume: string;
  market_cap: number;
}

function Chart({ coinId }: IChartProps) {
  const { isLoading, data } = useQuery<IHistoricalData[]>(
    ["ohlcv", coinId],
    () => fetchCoinHistory(coinId)
  );
  try {
    return (
      <>
        {isLoading ? (
          "Loading chart..."
        ) : (
          <ApexChart
            options={{
              chart: {
                type: "candlestick",
                toolbar: {
                  show: false,
                },
                background: "transparent",
              },
              grid: {
                show: true,
              },
              xaxis: {
                type: "datetime",
                categories: data?.map(
                  (item) => new Date(item.time_close * 1000 ?? 0)
                ),
                labels: {
                  show: true,
                  datetimeFormatter: {
                    month: "MMM 'yy",
                  },
                  style: {
                    colors: theme.textColor,
                  },
                },
              },
              yaxis: {
                show: true,
                tooltip: {
                  enabled: true,
                },
                labels: {
                  formatter: (value) =>
                    `$${
                      value >= 1000
                        ? value.toFixed(0)
                        : value >= 100
                        ? value.toFixed(1)
                        : value >= 10
                        ? value.toFixed(2)
                        : value.toFixed(3)
                    }`,
                  style: {
                    colors: theme.textColor,
                  },
                },
              },
              tooltip: {
                enabled: true,
                theme: "dark",
              },
            }}
            series={[
              {
                name: "candle",
                data:
                  data?.map((item) => {
                    return {
                      x: new Date(item.time_open * 1000 ?? 0),
                      y: [
                        Number(item.open),
                        Number(item.high),
                        Number(item.low),
                        Number(item.close),
                      ],
                    };
                  }) ?? [],
              },
            ]}
            type="candlestick"
            height={350}
          ></ApexChart>
        )}
      </>
    );
  } catch (error) {
    console.log(error);
    return <>Price data not found. 😢</>;
  }
}

export default Chart;
