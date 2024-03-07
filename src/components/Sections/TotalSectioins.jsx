import React, { useState } from 'react'
import '../../App.css'
const allSections = ['Overview', 'Fundamentals', 'News', 'Sentiments', 'Team', 'Technicals', 'Tokenomics']

const TotalSectioins = () => {
    const [activeSection, setActiveSection] = useState('Overview')

    return (
        <div className="flex space-x-7 lg:space-x-10 text-base font-medium text-[#3E424A] overflow-x-auto border-b hide-scrollbar">
            {
                allSections.map((section, index) => {
                    return (
                        <div key={index} className="cursor-pointer" onClick={() => setActiveSection(section)}>
                            <div className={`pb-4 ${activeSection === section ? 'text-[#0141CF] border-[#0052FE] border-b-4' : ''}`}>{section}</div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default TotalSectioins
