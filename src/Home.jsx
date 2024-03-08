
import Navbar from './components/Navbar/Navbar'
import { Link } from 'react-router-dom'

const Home = () => {

    return (
        <div>
            <Navbar />

            <div className="mx-4  flex justify-center items-center  gap-6 mt-6 flex-col sm:flex-row">
                <Link to="/coin/Bitcoin" className="text-lg p-4 px-6 text-white bg-sky-600 rounded-md">/bitcoin</Link>
                <Link to="/coin/Ethereum" className="text-lg p-4 px-6 text-white bg-sky-600 rounded-md">/ethereum</Link>
                <Link to="/coin/Dogecoin" className="text-lg p-4 px-6 text-white bg-sky-600 rounded-md">/dogecoin</Link>
            </div>
            <div className="text-center mt-4 text-lg font-semibold">Click on any of the above coins to see the details</div>

            <footer className="fixed bottom-0 footer w-full flex items-center justify-center p-4 bg-base-100  border-t-2">
                <aside className="items-center grid-flow-col">
                    <span className="text-sm source-code-pro bold">Assignment done with
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-rose-500"> ❤️ </span>
                        by
                        <a href='https://dhruvkotwani.me/' className='text-sky-600  '> Dhruv Kotwani</a>
                    </span>
                </aside>
            </footer >
        </div>
    )
}

export default Home