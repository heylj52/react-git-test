import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [price, setPrice] = useState(0);
  const [result, setResult] = useState(0);
  const [selected, setSelected] = useState();

  const onChange = (event) => {
    setPrice(event.target.value);
    setResult(event.target.value / selected);
  };
  const kindCoin = (event) => setSelected(coins[event.target.selectedIndex - 1].quotes.USD.price);

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []); // 처음 한번만 가져오므로 빈 array

  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>      
      {
        loading ? <strong>Loading...</strong> : <select onChange={kindCoin}>
          <option>종류를 선택하세요</option>
          {
            coins.map((coin) => 
                <option key={coin.id}>
                  {coin.name} ({coin.symbol}): {coin.quotes.USD.price} USD
                </option>
            )
          }
        </select>
      }
      <br />
      <input onChange={onChange} value={price} type="text" placeholder="가진 금액을 입력하세요." />
      {result} 개 살 수 있어요!
    </div>
  );
}

export default App;
