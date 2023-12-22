import "./Warning.css"


export default function Warning({message}){

    return (
        <div className="warning_block">
            <div className="warning_block_empty"></div>
            <div className="warning_block_message">{message}</div>
        </div>
    );
}