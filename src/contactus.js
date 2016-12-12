import React from 'react';
import FlatButton from 'material-ui/FlatButton';


class Contact extends React.Component {
    constructor(){
        super();
        console.log('props',this.props);
    }

    render() {
        let clsNme = "contactus "+this.props.classNme;
        
        return (
            <div className={clsNme}>
                <FlatButton
                    label="Contact us"
                    backgroundColor="#2F3253"
                    style={{ marginRight: '3px' }}
                    labelStyle={{ color: 'white', float: 'right' }}
                    onClick={(e) => { this.props.toggleDiag() } }
                    />
            </div>
        )
    }
}

export default Contact;