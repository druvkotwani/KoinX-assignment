import About from "./components/AboutCoin/About";
import CoinsDetail from "./components/Coins/CoinsDetail";
import Fundamentals from "./components/Fundamentals/Fundamentals";
import GetStarted from "./components/GetStarted/GetStarted";
import Navbar from "./components/Navbar/Navbar";
import TrendingCoins from "./components/Trending/TrendingCoins";

export default function App() {
  return (
    <>
      <Navbar />
      <div className="mx-4 mt-2">
        <CoinsDetail />
        <Fundamentals />
        <About />
        <GetStarted />
      </div>
      <TrendingCoins />
    </>
  )
}