import React from 'react';

require('./style/nav.scss');

class Nav extends React.Component{
    render(){
        const addClass = "nav-bar "+this.props.addClass;
        return (
            <div className={addClass}>
                <div className="nav-img">
                    <a href="#home"><img src="./img/logoico90.png"/></a>
                </div>
                <ul>
                    <li><a href="#whatwedo">Skills</a></li>
                    <li><a href="#team">The team</a></li>
                    <li><a href="#process">Unique Work flow</a></li>
                </ul>
            </div>
        )
    }
}

export default Nav;