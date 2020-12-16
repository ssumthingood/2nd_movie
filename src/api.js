import axios from "axios";

const api = axios.create({
    baseURL:"https://api.themoviedb.org/3/",
    params:{
        api_key : "40f91f8c1fcb3743cba488ad4d6ade90",
        language : "en-US"
    }
})

export const TVApi = {
    airingToday:() => api.get("tv/airing_today"),
    topRated:() =>api.get("tv/top_rated"),
    popular:() => api.get("tv/popular"),
    showDetail: (id) =>
        api.get(`tv/${id}`,{//``를 사용해 문자열 안에 javascript요소를 넣을 수 있다.
          params:{
               append_to_response:"videos"
          }
          
        }),
    search:(term) =>api.get("search/tv", {
        params:{
           query: encodeURIComponent(term),
        }
    })
};

export const moviesApi = {
    nowPlaying:() => api.get("movie/now_playing"),
    upComing:() =>api.get("movie/upcoming"),
    popular:() => api.get("movie/popular"),
    movieDetail: (id) => 
        api.get(`movie/${id}`,{//``를 사용해 문자열 안에 javascript요소를 넣을 수 있다.
            params:{
                append_to_response:"videos"
            }
        }),
    search:(term) =>api.get("search/movie", {
        params:{
            query: encodeURIComponent(term),

        }
    })
};