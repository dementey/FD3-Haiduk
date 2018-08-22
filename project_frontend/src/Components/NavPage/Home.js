import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import '../css/Home.css';
import img from '../../Image/frontPage.png';

const Home = () =>
    <div className="home-box">
        <img src={img} alt="logo" className="home-logo"/>
        <SearchForm fire={true}/>
    </div>;


export default Home;
