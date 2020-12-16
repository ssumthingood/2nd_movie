import { moviesApi, TVApi } from 'api';
import React from 'react';
import DetailPresenter from "./DetailPresenter";

export default class extends React.Component{
    constructor(props){
        super(props);
        const{location:{pathname}} = props;
        this.state = {
        result:null,
        err:null,
        loading:true,
        isMovie:pathname.includes("/movie/")
    }
    }
    

    async componentDidMount(){
        const {match:{
            params:{id}
            },
            history:{push},
        } = this.props;
        const {isMovie} = this.state;
        const parsedId = parseInt(id);
        if(isNaN(parsedId)){
            return push("/");
        }
        let result = null;
        try{
        if(isMovie){
            ({data:result} = await moviesApi.movieDetail(parsedId));
        }else{
            const request = await TVApi.showDetail(parsedId);//({data:result})를 쓰는 방법과 request를 다 쓸수있다.
            result = request.data;
        }
        }catch{
        this.setState({err:"can't find anything"})
        }finally{
        this.setState({loading:false, result});
        }
    }

    render(){
        const {result, err, loading} = this.state;
        console.log(result);
        return (<DetailPresenter 
        result={result}
        err = {err}
        loading={loading}
        />)
    }
}