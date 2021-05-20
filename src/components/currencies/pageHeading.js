import {HiExternalLink} from "react-icons/hi";
import {FiTwitter} from "react-icons/fi";
import {HiOutlineChatAlt} from "react-icons/hi";
import {BiScan} from "react-icons/bi";
import {BiCopy} from 'react-icons/bi';
import {GiTwoCoins} from 'react-icons/gi';

import GetPrice from "../data/getPrice";
import Get24HChange from "../data/get24HChange";
import GetTxns24h from "../data/getTxns24h";
import GetVol24h from "../data/getVol24h";
import Get24HVolumeChange from "../data/get24HVolumeChange";
import GetVotingButtons from "../voting/getVotingButtons";
import GetLiquidityUSD from "../data/getLiquidityUSD";


const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
}

export default function CurrencyPageHeading({
                                                name,
                                                contract,
                                                symbol,
                                                logo,
                                                chat,
                                                twitter,
                                                website,
                                                descrption,
                                                id,
                                                upVotes,
                                                downVotes
                                            }) {
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
                        <p className="text-gray-500 font-medium">{symbol} Price</p>
                        <div className="flex items-baseline space-x-4">
                            <h2 className="text-xl font-semibold">
                                <GetPrice contractAddress={contract}/>
                            </h2>
                            <div className="hidden sm:block ml-3 flex-1 mx-5">
                                <Get24HChange contractAddress={contract}/>
                            </div>
                        </div>
                    </div>
                    <div className="hidden sm:block ml-3 flex-1 mx-5">
                        <p className="text-gray-500 font-medium">{symbol} Volume (24h)</p>
                        <div className="flex items-baseline space-x-4">
                            <h2 className="text-xl font-semibold">
                                <GetVol24h contractAddress={contract}/>
                            </h2>
                            <Get24HVolumeChange contractAddress={contract}/>
                        </div>
                    </div>

                    <div className="flex-wrap">
                        <GetVotingButtons symbol={symbol} id={id} upVotes={upVotes} downVotes={downVotes}/>
                    </div>
                </div>
            </div>
            <div className="flex-nowrap">
                <button className="flex-wrap my-2 bg-purple-100 text-purple-600 p-2 rounded flex items-center"
                        onClick={() => {
                            navigator.clipboard.writeText(contract)
                        }}> Contract:
                    <span className="mx-2 bg-purple-200 p-1 rounded text-purple-500 text-xs ml-2">{contract}</span>
                    <BiCopy/>
                </button>
            </div>
            <div className="flex-nowrap">
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


            <div className="flex-nowrap my-2">
                <button className="inline-flex items-center bg-yellow-100
                hover:bg-yellow-200 text-yellow-800 font-medium py-2 px-4 rounded-l"
                        onClick={() => openInNewTab(`https://v1exchange.pancakeswap.finance/#/swap?outputCurrency=${contract}`)}>
                    <GiTwoCoins/>
                    <span className="mx-2">Buy on PCS (V1)</span>
                </button>

                <div>
                    <button className="inline-flex items-center bg-yellow-100
                hover:bg-yellow-200 text-yellow-800 font-medium py-2 px-4 rounded-r"
                            onClick={() => openInNewTab(`https://exchange.pancakeswap.finance/#/swap?inputCurrency=${contract}`)}>
                        <GiTwoCoins/>
                        <span className="mx-2">Buy on PCS (V2)</span>
                    </button>
                </div>

                <div className="my-6 w-full">
                    <h1 className="my-4 sm:text-3xl text-2xl font-medium title-font  text-gray-900">About {name}</h1>
                    <div className="h-1 w-20 bg-purple-200 rounded"/>
                </div>
                <p className="my-4 w-full leading-relaxed text-gray-500">{descrption}</p>
            </div>

            <div className="flex-auto mx-4">
                <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                    <div className="px-4 py-5 sm:px-6">
                        <p className="mt-1 max-w-2xl text-sm font-bold text-gray-500">{symbol} Price Statistics</p>
                    </div>
                    <div className="border-t border-gray-200">
                        <dl>
                            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-bold text-gray-500">{symbol} price</dt>
                                <dd className="mt-1 text-sm text-gray-900 font-bold sm:mt-0 sm:col-span-2"><GetPrice
                                    contractAddress={contract}/></dd>
                            </div>
                            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Transactions (24H)</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"><GetTxns24h
                                    contractAddress={contract}/>
                                </dd>
                            </div>
                            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Liquidity</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"><GetLiquidityUSD
                                    contractAddress={contract}/></dd>
                            </div>
                            {/*<div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">Market Cap</dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">$120,000</dd>
                                </div>*/}
                        </dl>
                    </div>
                </div>
            </div>
        </div>
    )
}
