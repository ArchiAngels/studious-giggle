import React from "react";
import { Link} from "react-router-dom";

const NoMatch = function(){
    return <>
        <h2>404</h2>
        <Link to='/'>Home</Link>
    </>
}

export default NoMatch;