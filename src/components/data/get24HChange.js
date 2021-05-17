import React, {useState, useEffect} from "react";
import axios from "axios";
import PuffLoader from "react-spinners/PuffLoader";

export default function Get24HChange({contractAddress}) {

    const [isLoading, setLoading] = useState(true);
    const [priceChange, setpricChange] = useState();

    useEffect(() => {
        axios.get(`https://api.dex.guru/v1/tokens/${contractAddress}-bsc/`).then(response => {
            let change = response.data['priceChange24h'].toFixed(3);
            setpricChange(change);
            setLoading(false);
        });
    }, []);

    if (isLoading) {
        return <PuffLoader size="20" color="#7b2cbf"/>
    }

    if (priceChange < 0) {
        return (
            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                        {priceChange}
            </span>
        )
    } else {
        return (
            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        {priceChange}
            </span>
        )
    }
}
