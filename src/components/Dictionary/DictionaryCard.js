export default function DictionaryCard(props) {

    const playAudio = audio => {
        const audioToPlay = new Audio(audio)
        audioToPlay.play()
    }
    
    return (
        props.word ?
            <div className="categoryCard card-float">
                <div className="flexbox justyfy-center">
                    <h2>{props.word.word}</h2>
                    <button className="no-button-decoration" onClick={()=>playAudio(props.word.wordAudio)}><img className="playButton" src="/media/headphone.svg" alt="play button" /><audio src={props.word} /></button>
                </div>
                <img className="meme" src={props.word.meme} alt="meme"/>
                <div className="scroll">
                <h3 >Explanation</h3>
                <p className="cardText dark-blue">{props.word.explaination.fr}</p>
                <p className="cardText">-</p>
                <p className="cardText">{props.word.explaination.en}</p>
                <h3 >Examples</h3>
                {
                    props.word.examples.map(example => {
                        return (
                            <div>
                            <p className="cardText dark-blue">{example.fr}</p>
                            <p className="cardText">{example.en}</p>
                            <p className="cardText">-</p>
                            </div>
                        )
                    })
                }
                </div>
                <button onClick={props.handleClick}>x</button>
            </div>
        : <></> 
        )
}