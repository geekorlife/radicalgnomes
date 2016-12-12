import React from 'react';
import FlatButton from 'material-ui/FlatButton';
require('./style/whatwedo.scss');

class WhatWeDo extends React.Component{
    render(){
        return (
            <div className="whatwedo main-section container-fluid" id="whatwedo">
                <h2><img src="./img/logoico90.png"/><span>Our core skills</span></h2>
                <div className="row">
                        <div className="col-md-3 col-xs-6">
                            Javascript<br/>
                            <img src="./img/javascript.png"/>
                        </div>
                        <div className="col-md-3 col-xs-6">
                            CSS3<br/>
                            <img src="./img/css3.png"/>
                        </div>
                        <div className="col-md-3 col-xs-6">
                            ReactJS<br/>
                            <img src="./img/reactjs.png"/>
                        </div>
                        <div className="col-md-3 col-xs-6">
                            NodeJs<br/>
                            <img src="./img/nodejs.png"/>
                        </div>
                        <div className="col-md-3 col-xs-6">
                            Bootstrap<br/>
                            <img src="./img/Bootstrap.png"/>
                        </div>
                        <div className="col-md-3 col-xs-6">
                            MongoDB<br/>
                            <img src="./img/mongodb.png"/>
                        </div>
                        <div className="col-md-3 col-xs-6">
                            Charts visualization<br/>
                            <img src="./img/charts.png"/>
                        </div>
                        <div className="col-md-3 col-xs-6">
                            Mobile Hybride<br/>
                            <img src="./img/mobile.png"/>
                        </div>
                    </div>
            </div>
        )
    }
};

export default WhatWeDo;