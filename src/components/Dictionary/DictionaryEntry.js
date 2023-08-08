import './Dictionary.css'

export default function DictionaryEntry(props){
    return(
        <div>
            <button className="entry-button" onClick={props.handleClick}>{props.word}</button>
        </div>
    )
}