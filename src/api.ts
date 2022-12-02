const BASE_URL = "https://api.coinpaprika.com/v1";
const CHART_URL = "https://ohlcv-api.nomadcoders.workers.dev";

export async function fetchCoins() {
  const json = await (await fetch(`${BASE_URL}/coins`)).json();
  return json;
}

export async function fetchCoinInfo(coinId: string) {
  const json = await (await fetch(`${BASE_URL}/coins/${coinId}`)).json();
  return json;
}

export async function fetchCoinTicker(coinId: string) {
  const json = await (await fetch(`${BASE_URL}/tickers/${coinId}`)).json();
  return json;
}

export async function fetchCoinHistory(coinId: string) {
  const json = await (await fetch(`${CHART_URL}?coinId=${coinId}`)).json();
  return json;
}
