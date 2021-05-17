import React, {useEffect, useState} from "react";
import axios from "axios";
import PuffLoader from "react-spinners/PuffLoader";


export default function GetVotingButtons({symbol}){

    const initialCoinDataState = {
        coin: {},
        loading: true,
    }

    const [coinData, setCoinData] = useState(initialCoinDataState)


    useEffect(() => {
        const getCoinData = async () => {
            const { data } = await axios(
                `http://localhost:1337/coin-lists/?Symbol=${symbol}`,
            )
            setCoinData(data)
        }
        getCoinData()
    }, [])

    const votes = {
        Symbol: {symbol},
        UpVotes: + 1
    }


    return coinData.loading ? (
        <PuffLoader size="20" color="#7b2cbf"/>
    ) : (
        <div>
            {coinData.map((token) => (
                <ul className="flex">
                    <li className="mx-1 px-3 py-2 bg-gray-200 hover:bg-gray-700 rounded-lg">
                        <a className="flex items-center">
                            <span className="mx-1">👎</span>
                        </a>
                    </li>
                    <li className="mx-1 px-3 py-2 bg-gray-200 text-gray-700 rounded-lg">
                        <a className="font-medium">{token.UpVotes - token.DownVotes}</a>
                    </li>

                    <li className="mx-1 px-3 py-2 bg-gray-200  hover:bg-gray-700 rounded-lg">
                        <a className="flex items-center font-bold" href="#">
                            <span className="mx-1">👍</span>
                        </a>
                    </li>
                </ul>
            ))}
        </div>
    )
}