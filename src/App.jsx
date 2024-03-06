import CoinsDetail from "./components/Coins/CoinsDetail";
import Fundamentals from "./components/Fundamentals/Fundamentals";
import Navbar from "./components/Navbar/Navbar";

export default function App() {
  return (
    <>
      <Navbar />
      <div className="mx-4 mt-2">
        <CoinsDetail />
        <Fundamentals />
      </div>
    </>
  )
}