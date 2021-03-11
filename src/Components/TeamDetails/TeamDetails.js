import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Header from '../Header/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faYoutube, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faFutbol, faMars, faFlag, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons"
import './TeamDetails.css';

const TeamDetails = () => {
    const { id } = useParams();
    const [teamDetails, setTeamDetails] = useState([]);
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setTeamDetails(data.teams));
    }, [id])
    let name = [];
    let founded = [];
    let type = [];
    let country = [];
    let gender = [];
    let logo = [];
    let description = [];
    let teamImg = [];
    let teamImgAlt = [];
    let fb = [];
    let twitter = [];
    let youTube = [];
    let banner = [];
    teamDetails.map(element => {
        name.push(element.strTeam);
        founded.push(element.intFormedYear);
        country.push(element.strCountry);
        type.push(element.strSport);
        gender.push(element.strGender);
        logo.push(element.strTeamBadge);
        description.push(element.strDescriptionEN);
        teamImg.push(element.strTeamFanart3);
        teamImgAlt.push(element.strTeamFanart4);
        fb.push(element.strFacebook);
        twitter.push(element.strTwitter);
        youTube.push(element.strYoutube);
        banner.push(element.strStadiumThumb);
        return [];
    })
    return (
        <div>
            <Header teamBanner={banner} teamLogo={logo}></Header>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="team-card mt-5 mb-3">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="team-card-text">
                                        <h2> {name}</h2>
                                        <p><FontAwesomeIcon icon={faMapMarkerAlt} /> Founded at: {founded}</p>
                                        <p><FontAwesomeIcon icon={faFlag} /> Country: {country}</p>
                                        <p><FontAwesomeIcon icon={faFutbol} /> Type: {type}</p>
                                        <p><FontAwesomeIcon icon={faMars} /> Gender: {gender}</p>
                                    </div>
                                </div>
                                <div className="col-md-6 text-center position-relative">
                                    <div className="team-card-img">
                                        {
                                            gender.toString() === "Male" ?
                                                <img src={teamImg} alt="teamImg" /> : <img src={teamImgAlt} alt="teamImg" />
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <div className="team-description">
                            <p>{description}</p>
                        </div>
                    </div>
                </div>

                <div className="row text-center">
                    <div className="col-md-12">
                        <div className="team-social mb-3">
                            <a href={`https://${fb}`} rel="noreferrer" target="_blank" id="fb">
                                <FontAwesomeIcon icon={faFacebook} />
                            </a>
                            <a href={`https://${twitter}`} rel="noreferrer" target="_blank" id="twitter">
                                <FontAwesomeIcon icon={faTwitter} />
                            </a>
                            <a href={`https://${youTube}`} rel="noreferrer" target="_blank" id="youtube">
                                <FontAwesomeIcon icon={faYoutube} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamDetails;