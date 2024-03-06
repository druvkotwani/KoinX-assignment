import { useEffect, useState } from "react";
import About from "./components/AboutCoin/About";
import CoinsDetail from "./components/Coins/CoinsDetail";
import Fundamentals from "./components/Fundamentals/Fundamentals";
import GetStarted from "./components/GetStarted/GetStarted";
import Navbar from "./components/Navbar/Navbar";
import Team from "./components/Team/Team";
import TrendingCoins from "./components/Trending/TrendingCoins";
import Sentiment from "./components/Sentiment/Sentiment";

export default function App() {
  const [trendingCoins, setTrendingCoins] = useState([])
  useEffect(() => {
    fetch('https://api.coingecko.com/api/v3/search/trending')
      .then(response => response.json())
      .then(data => {
        setTrendingCoins(data.coins)
      })
  }, [])
  return (
    <>
      <Navbar />
      <div className="mx-4 mt-2 flex flex-col gap-2 ">
        <CoinsDetail />
        <Sentiment />
        <About />
        <Team trendingCoins={trendingCoins} />
        <GetStarted />
      </div>
      <TrendingCoins trendingCoins={trendingCoins} />
    </>
  )
}