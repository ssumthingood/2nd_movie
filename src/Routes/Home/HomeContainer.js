import React from 'react';
import HomePresenter from "./HomePresenter";
import {moviesApi} from "api";

export default class extends React.Component{
    state = {
        nowPlaying: null,
        upComing: null,
        popular: null,
        err:null,
        loading:true
    };

    async componentDidMount(){
        try{
            const {data:{results:nowPlaying}} = await moviesApi.nowPlaying();
            const {data:{results:upComing}} = await moviesApi.upComing();
            const {data:{results:popular}} = await moviesApi.popular();

            this.setState({
                nowPlaying,//자바스크립트는 nowPlaying 을 nowPlaying(클래스의 state):(try 내 변수)nowPlying으로 인식
                upComing,
                popular
            })
        }catch{
            this.setState({
                err:"Can't get Movies information"
            })
        }finally{
            this.setState({
                loading:false
            })
        }
    }

    render(){
        const {nowPlaying, upComing, popular, err, loading} = this.state;//구조분해할당
        console.log(this.state);
        return (<HomePresenter 
        nowPlaying = {nowPlaying} 
        upComing={upComing} 
        popular={popular}
        err = {err}
        loading={loading}
        />)
    }
}