import {HiExternalLink} from "react-icons/hi";
import {FiTwitter} from "react-icons/fi";
import {HiOutlineChatAlt} from "react-icons/hi";
import {BiScan} from "react-icons/bi";
import {BiCopy} from 'react-icons/bi';
import {GiTwoCoins} from 'react-icons/gi';


import GetPrice from "../data/getPrice";
import Get24HChange from "../data/get24HChange";

import GetVol24h from "../data/getVol24h";
import Get24HVolumeChange from "../data/get24HVolumeChange";
import GetVotingButtons from "../voting/getVotingButtons";

const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
}

export default function CurrencyPageHeading({name, contract, symbol, logo, chat, twitter, website}) {
    return (
        <div>
            <div className="lg:flex lg:items-center lg:justify-between">
                <div className="inline-flex">

                    <img className="w-10 h-10 rounded-full flex-shrink-0 object-cover object-center"
                         src={logo} alt=""/>
                    <span className="flex-grow flex flex-col pl-4">
            <span className="title-font font-medium text-gray-900">{name}</span>
            <span className="text-gray-400 text-xs font-bold tracking-widest mt-0.5">{symbol}</span>
          </span>
                </div>

                <div className="mt-5 flex lg:mt-0 lg:ml-4">

                    <div className="flex-1 mx-5">
                        <p className="text-gray-500 font-medium">{symbol} price</p>
                        <div className="flex items-baseline space-x-4">
                            <h2 className="text-xl font-semibold">
                                <GetPrice contractAddress={contract}/>
                            </h2>
                            <Get24HChange contractAddress={contract}/>
                        </div>
                    </div>

                    <div className="hidden sm:block ml-3 flex-1 mx-5">
                        <p className="text-gray-500 font-medium">{symbol} volume (24h)</p>
                        <div className="flex items-baseline space-x-4">
                            <h2 className="text-xl font-semibold">
                                <GetVol24h contractAddress={contract}/>
                            </h2>
                            <Get24HVolumeChange contractAddress={contract}/>
                        </div>
                    </div>


                    <div className="sm:ml-3">
                        <GetVotingButtons symbol={symbol}/>
                    </div>


                </div>
            </div>
            <button type="button"
                    className="my-2 bg-purple-100 text-purple-600 p-2 rounded  leading-none flex items-center"
                    onClick={() => {
                        navigator.clipboard.writeText(contract)
                    }}>
                Contract Addres:
                <span className="mx-2 bg-purple-200 p-1 rounded text-purple-500 text-xs ml-2">{contract}</span>
                <BiCopy/>
            </button>

            <div className="inline-flex">
                <button
                    className="inline-flex items-center bg-purple-200 hover:bg-purple-300 text-purple-700 font-medium py-2 px-4 rounded-l"
                    onClick={() => openInNewTab(website)}>
                    <HiExternalLink/>
                    <span className="mx-2">
                        Website
                    </span>
                </button>
                <button
                    className="inline-flex items-center bg-purple-200 hover:bg-purple-300 text-purple-700 font-medium py-2 px-4"
                    onClick={() => openInNewTab(twitter)}>
                    <FiTwitter/>
                    <span className="mx-2">Twitter</span>
                </button>
                <button
                    className="inline-flex items-center bg-purple-200 hover:bg-purple-300 text-purple-700 font-medium py-2 px-4"
                    onClick={() => openInNewTab(chat)}>
                    <HiOutlineChatAlt/>
                    <span className="mx-2">Chat</span>
                </button>

                <button className="inline-flex items-center bg-purple-200
                hover:bg-purple-300 text-purple-700 font-medium py-2 px-4 rounded-r"
                        onClick={() => openInNewTab(`https://bscscan.com/token/${contract}`)}>
                    <BiScan/>
                    <span className="mx-2">BscScan</span>
                </button>
            </div>
            <div className="my-4">
                <button className="inline-flex items-center bg-yellow-100
                hover:bg-yellow-200 text-yellow-800 font-medium py-2 px-4 rounded-l"
                        onClick={() => openInNewTab(`https://v1exchange.pancakeswap.finance/#/swap?outputCurrency=${contract}`)}>
                    <GiTwoCoins/>
                    <span className="mx-2">Buy on PCS (V1)</span>
                </button>

                <button className="inline-flex items-center bg-yellow-100
                hover:bg-yellow-200 text-yellow-800 font-medium py-2 px-4 rounded-r"
                        onClick={() => openInNewTab(`https://exchange.pancakeswap.finance/#/swap?inputCurrency=${contract}`)}>
                    <GiTwoCoins/>
                    <span className="mx-2">Buy on PCS (V2)</span>
                </button>
            </div>
        </div>
    )
}
