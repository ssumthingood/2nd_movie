import {TVApi} from 'api';
import React from 'react';
import TVPresenter from "./TVPresenter";

export default class extends React.Component{
    state = {
        topRated: null,
        popular: null,
        airingToday: null,
        err:null,
        loading:true
    }
    async componentDidMount(){
        try{
            const {data:{results:topRated}} = await TVApi.topRated();
            const {data:{results:popular}} = await TVApi.popular();
            const {data:{results:airingToday}} = await TVApi.airingToday();
            this.setState({
                topRated,
                popular,
                airingToday
            });
        }catch{
            this.setState({
                err:"Can't get TV information"
            })
        }finally{
            this.setState({loading:false})
        }
    }

    render(){
        const {topRated, popular, airingToday, error, loading} = this.state;
        console.log(this.state);
        return (<TVPresenter 
        topRated = {topRated} 
        airingToday={airingToday} 
        popular={popular}
        error = {error}
        loading={loading}
        />)
    }
}