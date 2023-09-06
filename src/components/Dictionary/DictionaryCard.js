import { useEffect } from "react"

export default function DictionaryCard(props) {

    const playAudio = audio => {
        const audioToPlay = new Audio(audio)
        audioToPlay.play()
    }

    useEffect(()=>{
        if(props.word&&props.isCard){
                    playAudio(props.word.wordAudio)
        }
    })
    
    return (
        props.word ?
            <div className="dictionaryCard card-float">
                <div className="flexbox justyfy-center">
                    <h2>{props.word.word}</h2>
                    <button className="no-button-decoration" onClick={()=>playAudio(props.word.wordAudio)}><img className="playButton" src="/media/headphone.svg" alt="play button" /><audio src={props.word} /></button>
                </div>
                <img className="meme" src={props.word.meme} alt="meme"/>
                {props.word.category === 1 ? <p className="font-red">🌶️Attention! This is cursing!🌶️</p> : <></>}
                <div className="scroll">
                <h3 >Explanation</h3>
                <p className="cardText dark-blue">{props.word.explainFrench}</p>
                <p className="cardText">-</p>
                <p className="cardText">{props.word.explainForeign}</p>
                <h3 >Examples</h3>
                {
                    props.word.exampleList.map(example => {
                        return (
                            <div>
                            <p className="cardText dark-blue">{example.exampleFrench}</p>
                            <p className="cardText">{example.exampleForeign}</p>
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