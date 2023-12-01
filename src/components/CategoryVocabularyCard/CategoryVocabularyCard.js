import { useContext, useEffect, useState } from "react";
import './VocabularyCard.css';
import { useDispatch, useSelector } from "react-redux";
import { getListById, selectCategoryList, selectCategoryStatus } from "../categoriesSlice";
import { LanguageSwitch } from "../../Provider";

export default function CategoryVocabulalryCard(props) {
    const wordList = useSelector(selectCategoryList)
    const isLoading = useSelector(selectCategoryStatus)
    const {language} = useContext(LanguageSwitch)
    const [currentIndex, setCurrentIndex] = useState(0)
    const dispatch = useDispatch()

    const playAudio = audio => {
        const audioToPlay = new Audio(audio)
        audioToPlay.play()
    }

    useEffect(() => {dispatch(getListById({id: props.id, language: language}))}, [language])

    return (
        isLoading ? <></> : 
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
            </div> 
        )
}