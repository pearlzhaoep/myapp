import { useState } from "react";
import {words} from "../../db";
import './VocabularyCard.css';

export default function VocabulalryCard(props) {
    let idList = props.list;
    const [currentIndex, setCurrentIndex] = useState(0)
    let currentWord = currentIndex >= 0 ? words.find(word=>word.id === idList[currentIndex]) : undefined

    const playAudio = audio => {
        const audioToPlay = new Audio(audio)
        audioToPlay.play()
    }
    
    return (
        currentWord ? 
            <div className="margin-auto">
            <div className="flexbox justify-between">
            <div>
            <button className="no-button-decoration" style={currentIndex === 0 ? {display: "none"} : {display: "block"}} onClick={() => {let i = currentIndex; i--; setCurrentIndex(i)}} >←</button>
            <button className="no-button-decoration" style={currentIndex === idList.length-1 ? {display: "none"} : {display: "block"}} onClick={() => {let i = currentIndex; i++; setCurrentIndex(i)}}>→</button>
            </div>
            <button className="no-button-decoration" onClick={props.handleClick} >X</button>
            </div>
            <div className="vocabCard">
                <div className="flexbox justify-center">
                    <h2>{currentWord.word}</h2>
                    <button className="no-button-decoration" onClick={()=>playAudio(currentWord.wordAudio)}><img className="playButton" src="/media/headphone.svg" alt="play button" /><audio src={currentWord.wordAudio} /></button>
                </div>
                <img className="meme" src={currentWord.meme} alt="meme"/>
                <h3 >Explanation</h3>
                <p className="cardText dark-blue">{currentWord.explaination.fr}</p>
                <p className="cardText">-</p>
                <p className="cardText">{currentWord.explaination.en}</p>
                <h3 >Examples</h3>
                {
                    currentWord.examples.map(example => {
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
            </div> : <></>
        )
}