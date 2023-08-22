
export default function DictionaryEntry(props){
    return(
        <div>
        <div className='entry-button-container'>
            <button className="entry-button" onClick={props.handleClick}>{props.word}</button>
        </div>
        </div>
    )
}