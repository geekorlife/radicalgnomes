import React from 'react';
import FlatButton from 'material-ui/FlatButton';
require('./style/team.scss');

const socialBox = (lkn,gh,tw,blg) => {
    return (
        <div className="socialBox">
            <a href={lkn} alt="Linkedin"><img alt="Linkedin" src="./img/social/linkedin-box.png"/></a>
            <a href={gh} alt="GitHub"><img alt="GitHub" src="./img/social/github-box.png"/></a>
            <a href={tw} alt="Twitter"><img alt="Twitter" src="./img/social/twitter-box.png"/></a>
            <a href={blg} alt="Blog"><img alt="Blog" src="./img/social/web-box.png"/></a>
        </div>
    )
}

class Team extends React.Component{
    render(){
        return (
            <div className="team main-section" id="team">
                <h2><img src="./img/logoico90.png"/>Our Team</h2>
                <div className="row">
                        <div className="col-md-6 col-xs-12">
                            <div className="team-box">
                            Michael<br/>
                            <img src="./img/michael.jpg"/>
                            <p>
                            Seasoned Front end developer, Michael loves  to build fast, responsive, 
                            accessible front-end code, with a strong focus on Vanilla JavaScript, 
                            SVG animations, CSS, HTML5, responsive web design, and performance. 
                            </p>
                            {socialBox('https://www.linkedin.com/in/cleverbaker','https://github.com/cleverbaker','https://twitter.com/mibake','http://mibake.space/')}
                            </div>
                        </div>
                        <div className="col-md-6 col-xs-12">
                            <div className="team-box">
                            Pascal<br/>
                            <img src="./img/pascal.jpg"/>
                            <p>
                            Enthusiast, creative developer and passionate about Front end development, 
                            web design and game development. Always excited by new opportunities, Pascal loves the entrepreneurship 
                            and learn everyday.
                            </p>
                            {socialBox('https://www.linkedin.com/in/pascal-boudier-b7555221/en','https://github.com/geekorlife','https://www.twitter.com/geekorlife','http://www.geekorlife.com')}
                            </div>
                        </div>
                    </div>
            </div>
        )
    }
};

export default Team;