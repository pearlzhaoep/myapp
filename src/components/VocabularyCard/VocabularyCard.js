import { useState } from "react";
import './VocabularyCard.css';

export default function VocabulalryCard(props) {
    let wordList = props.wordList;
    const [currentIndex, setCurrentIndex] = useState(0)

    const playAudio = audio => {
        const audioToPlay = new Audio(audio)
        audioToPlay.play()
    }
    console.log(wordList)
    return (
        wordList ? 
            <div className="margin-auto">
            <div className="flexbox justify-between">
            <div>
            <button className="no-button-decoration" style={currentIndex === 0 ? {display: "none"} : {display: "block"}} onClick={() => {let i = currentIndex; i--; setCurrentIndex(i)}} >←</button>
            <button className="no-button-decoration" style={currentIndex === wordList.length-1 ? {display: "none"} : {display: "block"}} onClick={() => {let i = currentIndex; i++; setCurrentIndex(i)}}>→</button>
            </div>
            <button className="no-button-decoration" onClick={props.handleClick} >X</button>
            </div>
            <div className="vocabCard">
                <div className="flexbox justify-center">
                    <h2>{wordList[currentIndex].word}</h2>
                    <button className="no-button-decoration" onClick={()=>playAudio(wordList[currentIndex].wordAudio)}><img className="playButton" src="/media/headphone.svg" alt="play button" /><audio src={wordList[currentIndex].wordAudio} /></button>
                </div>
                <img className="meme" src={wordList[currentIndex].meme} alt="meme"/>
                <h3 >Explanation</h3>
                <p className="cardText dark-blue">{wordList[currentIndex].explainFrench}</p>
                <p className="cardText">-</p>
                <p className="cardText">{wordList[currentIndex].explainForeign}</p>
                <h3 >Examples</h3>
                {
                    wordList[currentIndex].exampleList.map(example => {
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
            </div> : <></>
        )
}