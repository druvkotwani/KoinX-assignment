import { useEffect, useState } from "react";
import About from "./components/AboutCoin/About";
import CoinsDetail from "./components/Coins/CoinsDetail";
import GetStarted from "./components/GetStarted/GetStarted";
import Navbar from "./components/Navbar/Navbar";
import Team from "./components/Team/Team";
import TrendingCoins from "./components/Trending/TrendingCoins";
import Sentiment from "./components/Sentiment/Sentiment";
import Performance from "./components/Performance/Performance";
import TotalSectioins from "./components/Sections/TotalSectioins";
import Tokenomics from "./components/Tokenomics/Tokenomics";
import YouMayAlsoLike from "./components/YouMayAlsoLike/YouMayAlsoLike";

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

      <div className="mx-4 mt-2">
        <span className=' text-sm px-2 text-[#5d667b]'>Cryptocurrencies</span>
        <span className='font-light  text-sm font-mono tracking-[-0.2em] '>{">>"}</span>
        <span className='text-sm px-2 font-semibold font-sans'>Bitcoin</span>
      </div>

      <div className="md:flex justify-between  gap-6 mx-4 my-4">
        <div className="flex flex-col md:w-[60%] lg:w-[70%] xl:w-[75%] w-[100%]  gap-6">
          <CoinsDetail />
          <TotalSectioins />
          <Performance />
          <Sentiment />
          <About />
          <Tokenomics />
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
      <div className="bg-white p-12 mt-12 hidden sm:flex  flex-col gap-4">
        <YouMayAlsoLike trendingCoins={trendingCoins} />
        <YouMayAlsoLike heading='Trending Coins' trendingCoins={trendingCoins} />
      </div>
    </div>
  )
}