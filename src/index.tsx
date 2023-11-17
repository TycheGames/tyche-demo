import React from 'react'
import ReactDOM from 'react-dom'
import { createRoot } from 'react-dom/client'

import './index.css'
// import App from './App'
import App2 from './App2'
import reportWebVitals from './reportWebVitals'
import Header from './components/Header'
import Rank from './components/Rank'
import { WagmiConfig } from 'wagmi'
import { arbitrum, mainnet, polygon } from 'wagmi/chains'
import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi/react'

// 1. Get projectId
const projectId = '2a48edeb16a10c801ec21cee2943cd43'

// 2. Create wagmiConfig
const metadata = {
    name: 'newland',
    description: 'newland',
    url: 'https://newland.club',
    icons: ['/next.svg'],
}

const chains = [mainnet, arbitrum, polygon]
const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata })

// 3. Create modal
createWeb3Modal({ wagmiConfig, projectId, chains })

ReactDOM.render(
    <React.StrictMode>
        <WagmiConfig config={wagmiConfig}>
            <div className=" flex h-screen  flex-col  items-center  w-full  bg-black">
                <Header />
                <div className="flex flex-row  mt-[50px]">
                    <App2 />
                    <Rank />
                </div>

                {/* <button className="   from-neutral-50">
                <p className=" font-bold  text-white">点击发射</p>
            </button> */}
            </div>
        </WagmiConfig>
    </React.StrictMode>,
    document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
