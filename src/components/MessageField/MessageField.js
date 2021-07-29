import './MessageField.css';

function MessageField(props) {




    return (
        <div className="direct-chat-msg">
            <div className="direct-chat-text">
                {props.author} : {props.text}
            </div>
        </div>
    );


}

export default MessageField;
