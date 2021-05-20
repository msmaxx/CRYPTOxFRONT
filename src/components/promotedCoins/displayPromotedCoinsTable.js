import React, {useEffect, useState} from 'react';
import PromotedCoinsTable from "./promotedCoinsTable";
import WithTableLoading from "../withTableLoading";
import axios from "axios";

function DisplayPromotedCoinsTable() {
    const ListLoading = WithTableLoading(PromotedCoinsTable);
    const [appState, setAppState] = useState({
        loading: false,
        coins: null,
    });

    useEffect(() => {
        axios.get("https://cryptox-backend.herokuapp.com/coin-lists/?_sort=UpVotes:Desc&Promoted=true").then(response => {
            setAppState({loading: false, coins: response.data});
        });
    }, [setAppState]);

    return (
        <ListLoading isLoading={appState.loading} coins={appState.coins}/>
    );
}

export default DisplayPromotedCoinsTable;