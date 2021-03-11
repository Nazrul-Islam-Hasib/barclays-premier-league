import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import './Team.css'
import { Link } from 'react-router-dom';

const Team = (props) => {
    const {strTeam, strSport, strTeamBadge, idTeam} = props.team
    return (
        <div className="col-md-4 text-center">
            <div className="card mb-3 mt-3">
                <img className="card-img-top" src={strTeamBadge} alt="Card-img"/>
                <div className="card-body">
                    <h5 className="card-title">{strTeam}</h5>
                    <p className="card-text pb-3">Type: {strSport}</p>
                    <Link to= {`/team/${idTeam}`} className="explore-btn">Explore<FontAwesomeIcon icon={faArrowRight} /></Link>
                </div>
            </div>
        </div>
    );
};

export default Team;