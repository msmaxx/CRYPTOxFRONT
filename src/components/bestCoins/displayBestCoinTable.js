import React, { useEffect, useState } from 'react';
import BestCoinsTable from "./bestCoinsTable";
import WithTableLoading from "../withTableLoading";
import axios from "axios";


function DisplayBestCoinTable() {
    const ListLoading = WithTableLoading(BestCoinsTable);
    const [appState, setAppState] = useState({
        loading: false,
        coins: null,
    });

    useEffect(() => {
        axios.get("https://cryptox-backend.herokuapp.com/coin-lists/?_sort=UpVotes:Desc&Promoted=false").then(response => {
            setAppState({loading: false, coins: response.data});
        });
    }, [setAppState]);


    return (
         <ListLoading isLoading={appState.loading} coins={appState.coins} />

    );
}

export default DisplayBestCoinTable;