// TradingViewWidget.jsx
import React, { useEffect, useRef, memo, useState } from 'react';

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
    const container = useRef();
    const [selectedTimeFrame, setSelectedTimeFrame] = useState('1H');

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
              "style": "3",
              "locale": "en",
              "enable_publishing": false,
              "hide_top_toolbar": true,
              "hide_legend": true,
              "save_image": false,
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
            <div className='flex justify-between items-center mb-4'>
                <p className='text-base font-semibold'>Bitcoin Price Chart {"(USD)"}</p>

                <ul className='flex justify-center items-center gap-2 text-xs'>
                    {
                        timeFrames.map((timeFrame) => (
                            <li onClick={() => {
                                setSelectedTimeFrame(timeFrame.name);
                            }} key={timeFrame.id} className={`cursor-pointer px-2 ${selectedTimeFrame == timeFrame.name ? "bg-[#e2ecfe] text-[#0140fe] rounded-xl px-2 py-1" : "text-[#70788a]"}`}>{timeFrame.name}</li>
                        ))
                    }
                </ul>
            </div>
            <div className="tradingview-widget-container border-none outline-none" ref={container} style={{ height: "100%", width: "100%" }}>
                <div className="tradingview-widget-container__widget border-none outline-none" style={{ height: "calc(100% - 32px)", width: "100%" }}></div>
            </div>
        </>
    );
}

const MemoizedTradingViewWidget = memo(TradingViewWidget);
export default MemoizedTradingViewWidget;
