import React from "react";
import ReactDOM  from "react-dom";
import { BrowserRouter } from "react-router-dom";
import './Main.scss';

import App from "../App/App.jsx";

const MAIN = function(){
    return <>
    <BrowserRouter>
        <App/>
    </BrowserRouter>
    </>;
}

ReactDOM.render(
    <MAIN/>,
    document.getElementById('root')
)