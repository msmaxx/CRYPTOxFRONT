import React, {useState, useEffect} from "react";
import axios from "axios";
import PuffLoader from "react-spinners/PuffLoader";


export default function GetLiquidityUSD({contractAddress}) {
    const [isLoading, setLoading] = useState(true);
    const [liquidityUSD, setliquidityUSD] = useState();
    const [liquidityUSDChange, setliquidityUSDChange] = useState();

    useEffect(() => {
        axios.get(`https://api.dex.guru/v1/tokens/${contractAddress}-bsc/`).then(response => {
            let liquidity = response.data['liquidityUSD'].toFixed(3)
            let liquidityChange = response.data['liquidityChange24h'].toFixed(3)
            setliquidityUSD(liquidity);
            setliquidityUSDChange(liquidityChange)
            setLoading(false);
        });
    },);

    if (isLoading) {
        return <PuffLoader size="20" color="#7b2cbf"/>
    }

    if (liquidityUSDChange < 0) {
        return (
            <div className="flex items-baseline space-x-4">
                <h2 className="text-sm">
                    ${liquidityUSD}
                </h2>
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                        {liquidityUSDChange}
            </span>
            </div>
        )
    } else {
        return (
            <div className="flex items-baseline space-x-4">
                <h2 className="text-sm">
                    ${liquidityUSD}
                </h2>
                <span
                    className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        {liquidityUSDChange}
            </span>
            </div>
        )
    }
}
