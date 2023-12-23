import "./Warning.css"

export default function WarningImportant({message}){

    return (
        <div className="warning_block">
            <div className="warning_block_empty_red"></div>
            <div className="warning_block_message">{message}</div>

        </div>
    );
}