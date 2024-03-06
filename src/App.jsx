import CoinsDetail from "./components/Coins/CoinsDetail";
import Fundamentals from "./components/Fundamentals/Fundamentals";
import Navbar from "./components/Navbar/Navbar";
import TrendingCoins from "./components/Trending/TrendingCoins";

export default function App() {
  return (
    <>
      <Navbar />
      <div className="mx-4 mt-2">
        <CoinsDetail />
        <Fundamentals />
      </div>
      <TrendingCoins />
    </>
  )
}