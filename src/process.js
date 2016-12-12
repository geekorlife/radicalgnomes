import React from 'react';
import FlatButton from 'material-ui/FlatButton';
require('./style/process.scss');

class Process extends React.Component{
    render(){
        return (
            <div className="process main-section container-fluid" id="process">
                <h2><img src="./img/logoico90.png"/><span>Specific work flow</span></h2>
                <div className="row">
                        <div className="col-md-6 col-xs-12">
                            <h3>We do micro-sprints</h3>
                            <p>
                            - 2-day, 4-day, 7-day<br/><br/>
                            - kickoff call<br/><br/>
                            - development updates<br/><br/>
                            - delivery, demo call, payment<br/><br/>
                            - pre-auth credit/debit cards
                            </p>
                        </div>
                        <div className="col-md-6 col-xs-12">
                            <h3>Payment</h3>    
                            <p>
                            - Pre-auth credit/debit cards<br/><br/>
                            - We accept bitcoin
                            </p>
                        </div>
                    </div>
            </div>
        )
    }
};

export default Process;