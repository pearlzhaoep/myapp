import { useContext, useState } from "react";
import './CategoryVocabularyCard.css';
import { LanguageSwitch } from "../../Provider";
import { useGetListByCategoryQuery } from "../../Api/apiSlice";

export default function CategoryVocabularyCard(props) {
    const {language} = useContext(LanguageSwitch)
    const [currentIndex, setCurrentIndex] = useState(0)

    const playAudio = audio => {
        const audioToPlay = new Audio(audio)
        audioToPlay.play()
    }

    const {
        data: wordList,
        isLoading,
        isSuccess
    } = useGetListByCategoryQuery({id: props.id, language: language})

    return (
        isLoading ? <></> : isSuccess ? 
            <div className="margin-auto">
            <div className="flexbox justify-between">
            <button className="no-button-decoration" style={currentIndex === 0 ? {visibility: "hidden"} : {visibility: "visible"}} onClick={() => {let i = currentIndex; i--; setCurrentIndex(i)}} ><img className="cardButton" alt="previous button" src="/media/card_arrowR.png" /></button>
            <button className="no-button-decoration" onClick={props.handleClick}><img className="cardButton" alt="close button" src="/media/card_close.png" /></button>
            <button className="no-button-decoration" style={currentIndex === wordList.length-1 ? {visibility: "hidden"} : {visibility: "visible"}} onClick={() => {let i = currentIndex; i++; setCurrentIndex(i)}}><img className="cardButton" alt="next button" src="/media/card_arrowL.png" /></button>        
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