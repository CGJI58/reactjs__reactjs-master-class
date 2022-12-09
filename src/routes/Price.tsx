import { useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

const Durations = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 30px;
`;

const Duration = styled.button`
  width: 100%;
  margin: 0px 2px;
  text-align: center;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 400;
  color: ${(props) => props.theme.textColor};
  border: none;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 9px 0px;
  border-radius: 10px;
  :hover {
    cursor: pointer;
    color: ${(props) => props.theme.accentColor};
  }
`;

const PriceResult = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.textColor};
  * {
    margin: 0px 5px;
  }
`;

const PriceNow = styled.div`
  font-size: 48px;
`;

const PriceChange = styled.div`
  box-sizing: border-box;
  height: 100%;
  display: flex;
  flex-direction: column;
  font-size: 20px;
  * {
    margin: 1px 0px;
  }
`;

// const PriceChangeRel = styled.div<{ duration: string }>``;
const PriceChangeRel = styled.div``;
const PriceChangeAbs = styled.div``;

interface Istate {
  tickerData: {
    id: string;
    name: string;
    symbol: string;
    rank: number;
    circulating_supply: number;
    total_supply: number;
    max_supply: number;
    beta_value: number;
    first_data_at: string;
    last_updated: string;
    quotes: {
      USD: {
        ath_date: string;
        ath_price: number;
        market_cap: number;
        market_cap_change_24h: number;
        percent_change_15m: number;
        percent_change_30m: number;
        percent_change_1h: number;
        percent_change_6h: number;
        percent_change_12h: number;
        percent_change_24h: number;
        percent_change_7d: number;
        percent_change_30d: number;
        percent_change_1y: number;
        percent_from_price_ath: number;
        price: number;
        volume_24h: number;
        volume_24h_change_24h: number;
      };
    };
  };
}

function Price() {
  const { state } = useLocation<Istate>();
  const data = state.tickerData.quotes.USD;
  const durationsArray = ["24h", "7d", "30d", "1y"];
  const [duration, setDuration] = useState<string>("24h");
  return (
    <>
      <Durations>
        {durationsArray.map((item) => (
          <Duration onClick={() => setDuration(item)}>{item}</Duration>
        ))}
      </Durations>
      <span>{duration.toUpperCase()}</span>
      <PriceResult>
        <PriceNow>{`$ ${data.price.toFixed(3)}`}</PriceNow>
        <PriceChange>
          <PriceChangeRel>
            {`${
              duration === "24h"
                ? data.percent_change_24h
                : duration === "7d"
                ? data.percent_change_7d
                : duration === "30d"
                ? data.percent_change_30d
                : duration === "1y"
                ? data.percent_change_1y
                : 0
            }%`}
          </PriceChangeRel>
          <PriceChangeAbs>{`${(
            data.price -
            data.price /
              (1 +
                (duration === "24h"
                  ? data.percent_change_24h
                  : duration === "7d"
                  ? data.percent_change_7d
                  : duration === "30d"
                  ? data.percent_change_30d
                  : duration === "1y"
                  ? data.percent_change_1y
                  : 0) *
                  0.01)
          ).toFixed(3)}$`}</PriceChangeAbs>
        </PriceChange>
      </PriceResult>
    </>
  );
}

export default Price;
