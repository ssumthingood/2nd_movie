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

    handleSubmit = (event) =>{
        event.preventDefault();
        const {searchTerm} = this.state;  
        if(searchTerm !== ""){
            this.searchByTerm();
        }
    }

    updateTerm =(event) =>{
        const {target:{value}} = event;
        console.log(value);
        this.setState({
            searchTerm:value
        });
    }

    searchByTerm=async() =>{
        const {searchTerm} = this.state;
        this.setState({loading:true});
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
        const {movieResults, tvResults, searchTerm, err, loading} = this.state;
        console.log(this.state);
        return (<SearchPresenter 
        movieResults = {movieResults} 
        tvResults={tvResults} 
        searchTerm={searchTerm}
        err = {err}
        loading={loading}
        handleSubmit = {this.handleSubmit}
        updateTerm = {this.updateTerm}
        />)
    }
}