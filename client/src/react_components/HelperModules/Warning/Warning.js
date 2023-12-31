import "./Warning.css"

//React Module to put in the content of pages
//****************Acts as a text highlight with a yellow indicator
export default function Warning({message}){

    return (
        <div className="warning_block">
            <div className="warning_block_empty"></div>
            <div className="warning_block_message">{message}</div>
        </div>
    );
}

