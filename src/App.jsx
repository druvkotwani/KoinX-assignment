import { useEffect, useState } from "react";
import About from "./components/AboutCoin/About";
import CoinsDetail from "./components/Coins/CoinsDetail";
import GetStarted from "./components/GetStarted/GetStarted";
import Navbar from "./components/Navbar/Navbar";
import Team from "./components/Team/Team";
import TrendingCoins from "./components/Trending/TrendingCoins";
import Sentiment from "./components/Sentiment/Sentiment";
import Performance from "./components/Performance/Performance";

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
    <div>

      <Navbar />


      {/* <div className="mx-4 mt-2 flex flex-col gap-6 sm:hidden ">

        <CoinsDetail />
        <Performance />
        <Sentiment />
        <About />
        <Team trendingCoins={trendingCoins} />
        <GetStarted />
      </div> */}

      {/* <TrendingCoins trendingCoins={trendingCoins} /> */}

      <div className="md:flex justify-between  gap-6 mx-4 my-4">
        <div className="flex flex-col md:w-[60%] lg:w-[70%] xl:w-[75%] w-[100%]  gap-6">
          <CoinsDetail />
          <Performance />
          <Sentiment />
          <About />
          <Team trendingCoins={trendingCoins} />
        </div>

        {/* for desktop */}
        <div className=" flex-col  md:w-[40%] lg:w-[30%] xl:w-[25%]  gap-4 hidden md:flex ">
          <GetStarted />
          <TrendingCoins trendingCoins={trendingCoins} />
        </div>
      </div>

      {/* for mobile */}
      <div className="md:hidden mx-4 my-6 ">
        <GetStarted />
      </div>
      <div className="md:hidden">
        <TrendingCoins trendingCoins={trendingCoins} />
      </div>

    </div>
  )
}