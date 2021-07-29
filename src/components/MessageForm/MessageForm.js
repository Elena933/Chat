import React from 'react';
import './MessageForm.css';


export class MessageForm extends React.Component{


    constructor(props){

        super(props);

        this.updateValue = this.updateValue.bind(this);
        this.clearValue = this.clearValue.bind(this);
        this.sendDataToParent = this.sendDataToParent.bind(this);
        this.clearParentData = this.clearParentData.bind(this);

        this.state = {
            value: ''
        };

    }

    updateValue = (e) => {
        this.setState({value: e.target.value});
    }

    clearValue = () => {
        this.setState({value: ''});
    }

    sendDataToParent = () => {
        this.props.updateData(this.state.value);
        this.setState({value: ''});
    }

    clearParentData = () => {
        this.props.clearMessageList();
        this.setState({value: ''});
    }

    render() {
        return (
            <div className="box-footer">
                <div className="input-group">
                    <input type="text" name="message" placeholder="Type here"
                           className="form-control" value={this.state.value} onChange={this.updateValue}/>
                    <button type="button" className="btn btn-warning btn-flat"
                            onClick={this.sendDataToParent}>Send
                    </button>
                </div>
                <button type="button" className="btn btn-error btn-flat"
                        onClick={this.clearParentData}>Clear all
                </button>
            </div>
        );
    }
}

export default MessageForm;
