import React from "react";
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";//HashRouter로도 사용가능 / exact는 주소가 path와 완전히 일치할 경우로 한정
import Home from "Routes/Home";
import Search from "Routes/Search";
import TV from "Routes/TV";
import Header from "Components/Header";
import Detail from "Routes/Detail";

//Switch는 한번에 하나의 Route만 render할수 있게 한다.(그냥 Route들을 묶어준다는 소리 아닐까)
export default () => (
    <Router>
        <>
        <Header/>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/tv" exact component={TV} />
            <Route path="/tv/popular" render={()=> <h1>Popular</h1>}/>
            <Route path="/search" component={Search} />
            <Route path="/movie/:id" component={Detail}/>
            <Route path="/tv/:id" component={Detail}/>
            <Redirect from="*" to="/" />
        </Switch>
        </>
    </Router>
)