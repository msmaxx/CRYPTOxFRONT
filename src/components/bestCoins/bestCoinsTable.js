import {Link} from "react-router-dom";

import GetPrice from "../data/getPrice";
import GetVol24h from "../data/getVol24h";
import Get24HChange from "../data/get24HChange";
import Get24HVolumeChange from "../data/get24HVolumeChange";
import GetVotingButtons from "../voting/getVotingButtons";

const BestCoinsTable = (props) => {
    const {coins} = props;

    if (!coins || coins.length === 0) return <p>No best coins.</p>;
    return (

        <div className="flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200 dark: dark:bg-black">
                            <thead className="bg-gray-50">
                            <tr>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    NAME
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    PRICE
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    PRICE CHANGE (24H)
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    VOLUME (24H)
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    VOLUME CHANGE (24H)
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    LAUNCH DATE
                                </th>
                                <th scope="col" className="relative px-6 py-3">
                                    <span className="sr-only"/>
                                </th>

                            </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                            {coins.map((token) => (
                                <tr key={token.Symbol}>
                                    <td className="px-6 py-4 whitespace-nowrap">
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
                                                    className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800">
                                                {token.Symbol}
                                                </span>

                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-500"><GetPrice contractAddress={token.Contract}/></div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-500"><Get24HChange contractAddress={token.Contract}/></div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-500"><GetVol24h contractAddress={token.Contract}/></div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div
                                            className="text-sm text-gray-500"><Get24HVolumeChange contractAddress={token.Contract}/></div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div
                                            className="text-sm text-gray-500">{token.LaunchDate}</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                        <GetVotingButtons symbol={token.Symbol}/>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BestCoinsTable;