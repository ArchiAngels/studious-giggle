import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "../Templates/home_page/Home.jsx";
import NoMatch from "../Templates/NoMatch/NoMatch.jsx";
import About from "../Templates/About/About.jsx";
import Services from "../Templates/Services/Services.jsx";
import Contacts from "../Templates/Contacts/Contacts.jsx";

import Navigator_TOP from "../Components/nav_top/NavTop.jsx";
import Navigator_RIGHT from "../Components/nav_right/Nav_right.jsx";

const App = function(){
    return <>
    <Navigator_TOP/>

    <Switch>
        
        <Route exact path='/'>
            <HomePage/>
        </Route>

        <Route exact path='/about'>
            <About/>
        </Route>

        <Route exact path='/services'>
            <Services/>
        </Route>

        <Route exact path='/contacts'>
            <Contacts/>
        </Route>

        <Route path='*'>
            <NoMatch/>
        </Route>
    </Switch>
    
    <Navigator_RIGHT/>
    </>;
}

export default App;