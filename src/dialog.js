import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

export default class Diag extends React.Component{
    render(){
        const actions = [
            <FlatButton
                label="Close"
                primary={true}
                onTouchTap={this.props.toggleDiag}
            />
        ];

        return(
            <Dialog
                title="Say Hello"
                actions={actions}
                modal={true}
                open={this.props.open}
            >
                <div>
                    You can contact us at <a href="mailto:hello@radicalgnomes.com?Subject=Hello">hello@radicalgnomes.com</a>
                </div>
            </Dialog>
        )
    }
}