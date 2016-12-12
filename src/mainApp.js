import React from 'react';
import Nav from './nav';
import WhatWeDo from './whatdo';
import Team from './team';
import Process from './process';
import ContactUs from './contactus';
import Diag from './dialog';
import FlatButton from 'material-ui/FlatButton';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

require('./style/home.scss');

const backGrd = {
    position: 'absolute',
    width:'100%',
    height: '100%',
    left: '0',
    bottom: '0',
    background: "url('./img/back.png') no-repeat",
    backgroundSize: 'contain',
    backgroundPosition: 'bottom'
};

class mainApp extends React.Component{
    constructor(){
        super();
        this.handleScroll = this.handleScroll.bind(this);
        this.toggleDiag = this.toggleDiag.bind(this);
        this.scrollTop = null;
        this.state = {
            clsName: 'contactus-hide',
            addClass: 'nav-bar-top',
            open: false
        }
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    toggleDiag(){
        const newStateDiag = !this.state.open;
        console.log('newStateDiag',newStateDiag);
        this.setState({open: newStateDiag})
    }

    handleScroll(event){
        
        this.scrollTop = event.srcElement.body.scrollTop;
        if(this.scrollTop > window.innerHeight && this.state.clsName !== 'show'){
            this.setState({
                clsName: 'contactus-show',
                addClass: 'nav-bar-fixed'
            })
        }
        else if(this.scrollTop < window.innerHeight && this.state.clsName !== 'hide'){
            this.setState({
                clsName: 'contactus-hide',
                addClass: 'nav-bar-top'
            })
        }
    }

    render(){
        let clsNme =  this.state.clsName;
        
        return(
            <div>
                <div className="stars"></div>
                <div style={backGrd}></div>

                <div className="main container-fluid" id="home">
                    <Nav addClass={this.state.addClass} />
                    <div className="row">
                        <br/>
                        <div className="col-md-6">
                            <div className="logo">RADICAL</div>
                            <div className="logo" style={{marginTop:'-15px'}}>GNOMES</div>
                        </div>

                        <div className="col-md-6">
                            <div className="box">
                                <h1>
                                    We are a team of Front end developers in the Silicon valley.
                                </h1>
                                <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                Lorem Ipsum has been the industry's standard dummy text ever since the 
                                1500s, when an unknown printer took a galley of type and scrambled it to 
                                make a type specimen book.
                                <br/><br/>
                                <FlatButton
                                    label="Contact us"
                                    backgroundColor="#2F3253"
                                    style={{marginRight:'3px'}}
                                    labelStyle={{ color: 'white',float: 'right' }}
                                    onClick={() => {this.toggleDiag()}}
                                />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <WhatWeDo />
                <Team />
                <Process />
                <ContactUs classNme={clsNme} toggleDiag={this.toggleDiag}/>
                <Diag open={this.state.open} toggleDiag={this.toggleDiag}/>
                
            </div>
            
        )
    }
}

export default mainApp;