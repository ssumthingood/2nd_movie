import React from 'react';
import PropTypes, { array } from "prop-types";
import styled from 'styled-components';
import Section from "Components/Section";
import Loader from 'Components/Loader';
import Message from "Components/Message";
import Poster from 'Components/Poster';
import Helmet from "react-helmet";

const Container = styled.div`
padding:20px;
`;

const TVPresenter = ({topRated, airingToday, popular, err, loading}) => (
    <>
    <Helmet>
        <title>TV | Hongfilx</title>
    </Helmet>
    {loading ? (
    <Loader/>
        ):(
    <Container>
        {topRated && topRated.length>0 && (
        <Section title="Top Rated">
            {topRated.map(show =>
            // <span key = {show.id}>{show.name}</span>
            <Poster
            key={show.id} 
            id={show.id} 
            title = {show.original_name} 
            imageUrl ={show.poster_path}
            rating = {show.vote_average}
            year = {show.first_air_date.substring(0,4)}
            />
            )}
        </Section>
        )}
        
        {popular && popular.length>0 && (
        <Section title="Popular Show">
            {popular.map(show =>
            // <span key = {show.id}>{show.name}</span>
            <Poster
            key={show.id} 
            id={show.id} 
            title = {show.original_name} 
            imageUrl ={show.poster_path}
            rating = {show.vote_average}
            year = {show.first_air_date.substring(0,4)}
            />
            )}
        </Section>
        )}

        {airingToday && airingToday.length>0 && (
        <Section title="Airing Today">
            {airingToday.map(show =>
            // <span key = {show.id}>{show.name}</span>
            <Poster
            key={show.id} 
            id={show.id} 
            title = {show.original_name} 
            imageUrl ={show.poster_path}
            rating = {show.vote_average}
            year = {show.first_air_date.substring(0,4)}
            />
            )}
        </Section>
        )}
        {err && <Message color="#e74c3c" text={err}/>}
    </Container>
    )}
    </>
    );

TVPresenter.propTypes={
    topRated:PropTypes.array, 
    popular:PropTypes.array,
    airingToday:PropTypes.array, 
    err:PropTypes.string, 
    loading:PropTypes.bool.isRequired
}

export default TVPresenter;