import React, { useState, useEffect } from "react";
import axios from "axios";
import PuffLoader from "react-spinners/PuffLoader";

export default function GetVol24h({contractAddress}) {
    const [isLoading, setLoading] = useState(true);
    const [volume, setVolume] = useState();

    useEffect(() => {
            axios.get(`https://api.dex.guru/v1/tokens/${contractAddress}-bsc/`).then(response => {
            let volume = response.data['volume24hUSD'].toFixed(2)
            setVolume("$" + volume  );
            setLoading(false);
        });
    }, []);

    if (isLoading) {
        return <PuffLoader size="20" color="#7b2cbf"/>
    }
    return volume
}
