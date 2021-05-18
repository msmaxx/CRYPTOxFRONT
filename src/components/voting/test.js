import React, { useState } from 'react';
import axios from "axios";

function Test({id, upVotes, downVotes}) {


    const [loading, setLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [data, setData] = useState(null);


    const handleUpSubmit = () => {
        setLoading(true);
        setIsError(false);
        const newUpVotes = upVotes + 1
        const data = {
            id: {id},
            UpVotes: newUpVotes,
        }
        axios.put(`http://localhost:1337/coin-lists/${id}`, data).then(res => {
            setData(res.data);
            setLoading(false);
        }).catch(err => {
            setLoading(false);
            setIsError(true);
        });
    }

    const handleDownSubmit = () => {
        setLoading(true);
        setIsError(false);
        const newDownVotes = upVotes - 1
        const data = {
            id: {id},
            UpVotes: newDownVotes,
        }
        axios.put(`http://localhost:1337/coin-lists/${id}`, data).then(res => {
            setData(res.data);
            setLoading(false);
        }).catch(err => {
            setLoading(false);
            setIsError(true);
        });
    }

    return (
        <div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleUpSubmit}>
            UP
        </button>

    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleDownSubmit}>
        DOWN
    </button>
        </div>

    );
}

export default Test;