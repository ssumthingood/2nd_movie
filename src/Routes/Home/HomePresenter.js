import React from 'react';
import PropTypes, { array } from 'prop-types';
import styled from 'styled-components';
import Section from "Components/Section";
import Loader from "Components/Loader"
import Message from 'Components/Message';
import Poster from 'Components/Poster';
import Helmet from "react-helmet";

const Container = styled.div`
padding:20px;
`;

const HomePresenter = ({nowPlaying, upComing, popular, err, loading}) => (
    <>
    <Helmet>
        <title>Movies | Hongfilx</title>
    </Helmet>
    {loading ? (
    <Loader/>
        ):(
    <Container>
        {nowPlaying && nowPlaying.length>0 && (
        <Section title="Now Playing">
            {nowPlaying.map(movie =>
            // <span key = {movie.id}>{movie.title}</span>
            <Poster 
            key={movie.id} 
            id={movie.id} 
            title = {movie.original_title} 
            imageUrl ={movie.poster_path}
            rating = {movie.vote_average}
            isMovie = {true}
            year = {movie.release_date.substring(0,4)}
            />
            )}
        </Section>
        )}
        
        {popular && popular.length>0 && (
        <Section title="Popular Movies">
            {popular.map(movie =>
            // <span key = {movie.id}>{movie.title}</span>
            <Poster 
            key={movie.id} 
            id={movie.id} 
            title = {movie.original_title} 
            imageUrl ={movie.poster_path}
            rating = {movie.vote_average}
            isMovie = {true}
            year = {movie.release_date.substring(0,4)}
            />
            )}
        </Section>
        )}

        {upComing && upComing.length>0 && (
        <Section title="UpComing">
            {upComing.map(movie =>
            // <span key = {movie.id}>{movie.title}</span>
            <Poster
            key={movie.id} 
            id={movie.id} 
            title = {movie.original_title} 
            imageUrl ={movie.poster_path}
            rating = {movie.vote_average}
            isMovie = {true}
            year = {movie.release_date.substring(0,4)}
            />
            )}
        </Section>
        )}
        {err && <Message color="#e74c3c" text={err}/>}
    </Container>
    )}
    </>
);
    

HomePresenter.propTypes={
    nowPlaying:PropTypes.array, 
    upComing:PropTypes.array,
    popular:PropTypes.array, 
    err:PropTypes.string, 
    loading:PropTypes.bool.isRequired
}

export default HomePresenter;