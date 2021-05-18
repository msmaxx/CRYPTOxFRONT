import React, {useEffect, useState} from "react";
import axios from "axios";
import PuffLoader from "react-spinners/PuffLoader";

export default function GetVotingButtons({symbol, id, upVotes, downVotes}) {

    const [loading, setLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [data, setData] = useState(null);

    const initialCoinDataState = {
        coin: {},
        loading: true,
    }

    const [coinData, setCoinData] = useState(initialCoinDataState)


    useEffect(() => {
        const getCoinData = async () => {
            const {data} = await axios(
                `https://cryptox-backend.herokuapp.com/coin-lists/?Symbol=${symbol}`,
            )
            setCoinData(data)
        }
        getCoinData()
    }, [])

    function refreshPage() {
        window.location.reload(false);
    }

    const handleDownSubmit = () => {
        setLoading(true);
        setIsError(false);
        const newDownVotes = downVotes + 1
        const data = {
            id: {id},
            DownVotes: newDownVotes,
        }
        axios.put(`https://cryptox-backend.herokuapp.com/coin-lists/${id}`, data).then(res => {
            setData(res.data);
            setLoading(false);
            localStorage.setItem(symbol, 'DOWN');
            refreshPage();
        }).catch(err => {
            setLoading(false);
            setIsError(true);
        });
    }

    const handleUpSubmit = () => {
        setLoading(true);
        setIsError(false);
        const newUpVotes = upVotes + 1
        const data = {
            id: {id},
            UpVotes: newUpVotes,
        }
        axios.put(`https://cryptox-backend.herokuapp.com/coin-lists/${id}`, data).then(res => {
            setData(res.data);
            setLoading(false);
            localStorage.setItem(symbol, 'UP');
            refreshPage();
        }).catch(err => {
            setLoading(false);
            setIsError(true);
        });
    }

    if (localStorage.getItem(symbol) !== null) {
        return coinData.loading ? (
            <PuffLoader size="20" color="#7b2cbf"/>
        ) : (
            <div>
                {coinData.map((token) => (
                    <ul className="flex">
                        <li className="mx-1 px-3 py-2 bg-gray-200 hover:bg-gray-700 rounded-lg">
                            <a className="flex items-center cursor-not-allowed">
                                <span className="mx-1"> 👎 </span>
                            </a>
                        </li>
                        <li className="mx-1 px-3 py-2 bg-gray-200 text-gray-700 text-l font-bold rounded-lg">
                            <a className="font-medium">{token.UpVotes - token.DownVotes}</a>
                        </li>

                        <li className="mx-1 px-3 py-2 bg-gray-200  hover:bg-gray-700 rounded-lg">
                            <a className="flex items-center cursor-not-allowed">
                                <span className="mx-1"> 👍 </span>
                            </a>
                        </li>
                    </ul>
                ))}
            </div>

        )
    } else {
        return coinData.loading ? (
            <PuffLoader size="20" color="#7b2cbf"/>
        ) : (
            <div>
                {coinData.map((token) => (
                    <ul className="flex">
                        <li className="mx-1 px-3 py-2 bg-gray-200 hover:bg-gray-700 rounded-lg">
                            <a className="flex items-center cursor-pointer" onClick={handleDownSubmit}>
                                <span className="mx-1"> 👎 </span>
                            </a>
                        </li>
                        <li className="mx-1 px-3 py-2 bg-gray-200 text-gray-700 text-l font-bold rounded-lg">
                            <a className="font-medium">{token.UpVotes - token.DownVotes}</a>
                        </li>

                        <li className="mx-1 px-3 py-2 bg-gray-200  hover:bg-gray-700 rounded-lg">
                            <a className="flex items-center cursor-pointer" onClick={handleUpSubmit}>
                                <span className="mx-1"> 👍 </span>
                            </a>
                        </li>
                    </ul>
                ))}
            </div>

        )
    }

}