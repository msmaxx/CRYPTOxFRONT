import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import nightwind from "nightwind/helper"


import App from "./App";

ReactDOM.render(
    <React.StrictMode>
        <script dangerouslySetInnerHTML={{ __html: nightwind.init() }} />
            <App/>
    </React.StrictMode>,
    document.getElementById('root')
);
