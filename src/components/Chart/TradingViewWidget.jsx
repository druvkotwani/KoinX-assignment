// TradingViewWidget.jsx
import React, { useEffect, useRef, memo, useState } from 'react';
import { useParams } from 'react-router-dom';
const timeFrames = [
    { id: 1, name: '1H' },
    { id: 2, name: '24H' },
    { id: 3, name: '7D' },
    { id: 4, name: '1M' },
    { id: 5, name: '6M' },
    { id: 6, name: '1Y' },
    { id: 7, name: 'ALL' },
];

function TradingViewWidget() {
    const { coinName } = useParams();
    const container = useRef();
    const [selectedTimeFrame, setSelectedTimeFrame] = useState('1M');

    useEffect(
        () => {
            const script = document.createElement("script");
            script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
            script.type = "text/javascript";
            script.async = true;
            script.innerHTML = `
            {
              "autosize": true,
              "symbol": "NASDAQ:AAPL",
              "interval": "D",
              "timezone": "Etc/UTC",
              "theme": "light",
              "style": "2",
              "locale": "en",
              "enable_publishing": false,
              "hide_top_toolbar": true,
              "hide_legend": true,
              "calendar": false,
              "hide_volume": true,
              "support_host": "https://www.tradingview.com"
            }`;
            container.current.appendChild(script);
        },
        []
    );

    return (
        <>
            <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4'>
                <p className='text-base font-semibold'>{coinName} Price Chart {"(USD)"}</p>

                <ul className='flex justify-center items-center gap-1 sm:gap-2 text-xs'>
                    {
                        timeFrames.map((timeFrame) => (
                            <li onClick={() => {
                                setSelectedTimeFrame(timeFrame.name);
                            }} key={timeFrame.id} className={`cursor-pointer text-xs sm:text-sm px-1 sm:px-2  ${selectedTimeFrame == timeFrame.name ? "bg-[#e2ecfe] text-[#0140fe] rounded-xl p-1 sm:px-2 sm:py-1" : "text-[#70788a]"}`}>{timeFrame.name}</li>
                        ))
                    }
                </ul>
            </div>
            <div className="tradingview-widget-container border-none outline-none mb-4 h-full" ref={container} style={{ height: "100%", width: "100%", outline: "none", border: 'none' }}>
                <div className="tradingview-widget-container__widget border-none outline-none h-full" style={{ height: "calc(100% - 32px)", width: "100%", outline: "none", border: 'none' }}></div>
            </div>


        </>
    );
}

const MemoizedTradingViewWidget = memo(TradingViewWidget);
export default MemoizedTradingViewWidget;
