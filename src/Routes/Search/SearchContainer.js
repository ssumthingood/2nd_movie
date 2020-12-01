import { moviesApi, TVApi } from 'api';
import React from 'react';
import SearchPresenter from "./SearchPresenter";

export default class extends React.Component{
    state = {
        movieResults: null,
        tvResults: null,
        searchTerm:"",
        err:null,
        loading:false
    }

    handlesubmit = () =>{
        const {searchTerm} = this.state;
        this.setState({loading:true});
        if(searchTerm !== ""){
            this.searchByTerm();
        }
    }

    searchByTerm=async() =>{
        const {searchTerm} = this.state;
        try{
            const {data:{results:movieResults}} = await moviesApi.search(searchTerm);
            const {data:{results:tvResults}} = await TVApi.search(searchTerm);
            this.setState({
                movieResults,
                tvResults
            });
        }catch{
            this.setState({err:"can't find result"});
        }finally{
            this.setState({loading:false})
        }
    }
    render(){
        const {movieResults, tvResults, searchTerm, error, loading} = this.state;
        console.log(this.state);
        return (<SearchPresenter 
        movieResults = {movieResults} 
        tvResults={tvResults} 
        searchTerm={searchTerm}
        error = {error}
        loading={loading}
        handlesubmit = {this.handlesubmit}
        />)
    }
}