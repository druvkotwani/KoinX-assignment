import About from "./components/AboutCoin/About";
import CoinsDetail from "./components/Coins/CoinsDetail";
import Fundamentals from "./components/Fundamentals/Fundamentals";
import GetStarted from "./components/GetStarted/GetStarted";
import Navbar from "./components/Navbar/Navbar";
import Team from "./components/Team/Team";
import TrendingCoins from "./components/Trending/TrendingCoins";

export default function App() {
  return (
    <>
      <Navbar />
      <div className="mx-4 mt-2 flex flex-col gap-2 ">
        <CoinsDetail />
        <Fundamentals />
        <About />
        <Team />
        <GetStarted />
      </div>
      <TrendingCoins />
    </>
  )
}