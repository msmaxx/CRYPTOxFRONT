import React, {useState, useEffect} from "react";
import axios from "axios";
import PuffLoader from "react-spinners/PuffLoader";
import GetPrice from "./getPrice";
import Get24HChange from "./get24HChange";

export default function GetTxns24h({contractAddress}) {
    const [isLoading, setLoading] = useState(true);
    const [txns24h, setTxns24h] = useState();
    const [txns24hChange, setTxns24hChange] = useState();

    useEffect(() => {
        axios.get(`https://api.dex.guru/v1/tokens/${contractAddress}-bsc/`).then(response => {
            let txns = response.data['txns24h']
            let txnsChange = response.data['txns24hChange'].toFixed(3)
            setTxns24h(txns);
            setTxns24hChange(txnsChange)
            setLoading(false);
        });
    },);

    if (isLoading) {
        return <PuffLoader size="20" color="#7b2cbf"/>
    }

    if (txns24hChange < 0) {
        return (
            <div className="flex items-baseline space-x-4">
                <h2 className="text-sm">
                    {txns24h}
                </h2>
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                        {txns24hChange}
            </span>
            </div>
        )
    } else {
        return (
            <div className="flex items-baseline space-x-4">
                <h2 className="text-sm">
                    {txns24h}
                </h2>
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        {txns24hChange}
            </span>
            </div>
        )
    }
}
