import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "../Templates/home_page/Home.jsx";
import NoMatch from "../Templates/NoMatch/NoMatch.jsx";
import About from "../Templates/About/About.jsx";
import Services from "../Templates/Services/Services.jsx";
import Contacts from "../Templates/Contacts/Contacts.jsx";
import News from "../Templates/News/News.jsx";

import Navigator from "../Components/nav_top/NavTop.jsx";

const App = function(){
    return <>
    <Navigator/>

    <Switch>
        
        <Route exact path='/'>
            <HomePage/>
        </Route>

        <Route exact path='/news'>
            <News/>
        </Route>

        <Route exact path='/cars'>
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
    </>;
}

export default App;