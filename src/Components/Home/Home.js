import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Team from '../Team/Team';

const Home = () => {
    const [team,setTeam] = useState([]);
    useEffect(()=>{
        fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League')
        .then(res => res.json())
        .then(data => setTeam(data.teams))
    },[])
    const url = "https://cdn.pixabay.com/photo/2017/08/10/01/38/grass-2616911_960_720.jpg";
    return (
        <div>
            <Header headerTxt = {"Barclays Premier League"} headerImg = {url}></Header>
            <div className="container">
                <div className="row">
                    {
                        team.map(element => <Team team = {element} key= {element.idTeam}></Team>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;