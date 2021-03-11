import React from 'react';
import './Header.css';

const Header = (props) => {
    const{headerTxt, teamLogo, teamBanner, headerImg} = props;
    const headerStyle ={
        'backgroundImage': `url(${teamBanner? teamBanner: headerImg})`
    }
    return (
        <div className="header-area" style={headerStyle}>
            <div className="container">
                <div className="row text-center">
                    <div className="col-md-12">
                        {
                            teamLogo? <img src={teamLogo} alt="logo"/>: <h2>{headerTxt}</h2>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Header;