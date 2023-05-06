import React from 'react';
import Row from './Row'
import requests from './requests';
import Banner from './Banner';
import Header from './Header';
import Nav from './Nav';

function Home() {
  return (
    <>
    <Nav/>
     <Banner/>
     <Header/>  

    <Row endpoint ={requests.fetchNetflixOriginals}
     heading='Netfilx Original'
     isBigger={true}
     />
    <Row endpoint={requests.fetchTrending} heading ='Trending Now'/>
    <Row endpoint={requests.fetchTopRated} heading ='Top Rated'/>
    <Row endpoint={requests.fetchActionMovies} heading ='Action Moive'/>
    <Row endpoint={ requests.fetchComedyMovies} heading ='comedy moive'/>
    <Row endpoint={ requests. fetchHorrorMovies} heading ='horror moive'/>
    <Row endpoint={requests.fetchRomanceMovies} heading ='romantic'/>
    <Row endpoint={requests. fetchDocumentaries} heading ='Document'/>
    </>
  )
}

export default Home;