import React from "react";
import {Link} from "react-router-dom";
import PuffLoader from "react-spinners/PuffLoader";

import GetPrice from "../data/getPrice";
import GetVol24h from "../data/getVol24h";
import Get24HChange from "../data/get24HChange";
import Get24HVolumeChange from "../data/get24HVolumeChange";
import GetVotingButtons from "../voting/getVotingButtons";

const BestCoinsTable = (props) => {
    const {coins} = props;

    if (!coins || coins.length === 0) return <PuffLoader size="30" color="#7b2cbf"/>;
    return (
        <table className="w-full text-left">
            <thead>
            <tr className="text-gray-400">
                <th className="font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800">NAME</th>
                <th className="font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800">PRICE</th>
                <th className="font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800 hidden md:table-cell">PRICE
                    CHANGE (24H)
                </th>
                <th className="font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800 hidden md:table-cell">VOLUME
                    (24H)
                </th>
                <th className="font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800 hidden md:table-cell">VOL.
                    CHANGE (24H)
                </th>
                <th className="font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800 hidden md:table-cell">LAUNCH
                    DATE
                </th>
                <th className="font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800">VOTES</th>
            </tr>
            </thead>
            <tbody className="bg-green-50 text-gray-600 dark:text-gray-100">
            {coins.map((token => (
                <tr>
                    <td className="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800">
                        <div className="flex items-center">
                            <div className="flex items-center">
                                <div className="flex-shrink-0 h-10 w-10">
                                    <Link to={`/currencies/${token.Symbol}`}>
                                        <img className="h-10 w-10 rounded-full cursor-pointer"
                                             src={token.Logo} alt=""/>
                                    </Link>
                                </div>
                                <div className="ml-4">
                                    <Link to={`/currencies/${token.Symbol}`}>
                                        <div
                                            className="text-sm font-medium text-gray-900 cursor-pointer">{token.Name}</div>
                                    </Link>
                                    <span
                                        className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-200 text-gray-800">
                                                {token.Symbol}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </td>
                    <td className="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800">
                        <div className="text-sm text-gray-500"><GetPrice contractAddress={token.Contract}/></div>
                    </td>
                    <td className="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 md:table-cell hidden">
                        <Get24HChange contractAddress={token.Contract}/>
                    </td>
                    <td className="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 md:table-cell hidden">
                        <div className="text-sm text-gray-500"><GetVol24h contractAddress={token.Contract}/></div>
                    </td>
                    <td className="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 md:table-cell hidden">
                        <div className="text-sm text-gray-500"><Get24HVolumeChange contractAddress={token.Contract}/>
                        </div>
                    </td>
                    <td className="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 md:table-cell hidden">
                        <div className="text-sm text-gray-500">
                            {token.LaunchDate}
                        </div>
                    </td>
                    <td className="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 text-red-500">
                        <GetVotingButtons symbol={token.Symbol} id={token.id} upVotes={token.UpVotes} downVotes={token.DownVotes}/>
                    </td>
                </tr>
            )))}
            </tbody>
        </table>
    )
}

export default BestCoinsTable;