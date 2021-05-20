import React, {useState, useEffect} from "react";
import axios from "axios";
import PuffLoader from "react-spinners/PuffLoader";

export default function GetPrice({contractAddress}) {
    const [isLoading, setLoading] = useState(true);
    const [price, setPrice] = useState();

    useEffect(() => {
        axios.get(`https://api.dex.guru/v1/tokens/${contractAddress}-bsc/`).then(response => {
            let price = response.data['priceUSD'].toFixed(9);
            setPrice("$" + price);
            setLoading(false);
        });
    },);

    if (isLoading) {
        return <PuffLoader size="20" color="#7b2cbf"/>
    }

    return (<div>{price}</div>)
}
