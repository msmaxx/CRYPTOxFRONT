import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PuffLoader from "react-spinners/PuffLoader";

import PageBody from "./pageBody";
import CurrencyPageHeading from "./pageHeading";

export default function CoinPage(props) {
    const initialCoinState = {
        coin: {},
        loading: true,
    }

    const [coin, setCoin] = useState(initialCoinState)

    useEffect(() => {
        const getCoin = async () => {
            const { data } = await axios(
                `http://localhost:1337/coin-lists/?Symbol=${props.match.params.id}`,
            )
            setCoin(data)
        }
        getCoin()
    }, [])


    return coin.loading ? (
        <PuffLoader size="20" color="#7b2cbf"/>
    ) : (
        <div className="container mx-auto my-5">
            {coin.map((token) => (
                <div key={token.Symbol}>
                    <CurrencyPageHeading
                        name={token.Name}
                        contract={token.Contract}
                        symbol={token.Symbol}
                        logo={token.Logo}
                        website={token.WebsiteLink}
                        twitter={token.TwitterLink}
                        chat={token.ChatLink}
                    />
                    <PageBody
                        name={token.Name}
                        descrption={token.Description}
                        symbol={token.Symbol}
                    />
                </div>
                ))}
        </div>
    )
}