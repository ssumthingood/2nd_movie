import React, { Component } from "react";
import Router from "Components/Router";
import GlobalStyles from "Components/GlobalStyles";

class App extends Component{
  render(){
    return(
    <>
    <Router />
    <GlobalStyles/>
    </>//render는 하나의 컴포넌트에만 가능하기 때문에 빈 컴포넌트위 형태로 보여주고자 하는 모든 것들을 묶어준다.
    );
  }
}

export default App;
