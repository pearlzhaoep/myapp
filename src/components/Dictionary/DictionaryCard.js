import { useContext} from "react"
import { LanguageSwitch } from "../Provider"
import {vocabularyCardContent} from "../../models/VocabularyCardModel"
import { useGetWordByIdQuery } from "../Api/apiSlice"

export default function DictionaryCard(props) {
    const {language} = useContext(LanguageSwitch)

    const playAudio = audio => {
        const audioToPlay = new Audio(audio)
        const audioPromis = audioToPlay.play()
        audioPromis.catch(e=>{
            console.log(e)
        })
    }

    const {
        data: currentWord,
        isLoading,
        isSuccess
    } = useGetWordByIdQuery({ id: props.id, language })

    return (
        isLoading ? <></> : isSuccess ?
            <div className="dictionaryCard card-float">
                <div className="flexbox flex-end">
                    <button className="no-button-style" onClick={props.handleClick}><img className="cardButton" alt="close button" src="/media/card_close.png" /></button>
                </div>
                <div className="flexbox justyfy-center">
                    <h2 style={{'margin-top': '5px'}}>{currentWord.word}</h2>
                    <button style={{'margin-top': 0}} className="no-button-decoration" onClick={()=>playAudio(currentWord.wordAudio)}><img className="playButton" src="/media/headphone.svg" alt="play button" /><audio src={currentWord} /></button>
                </div>
                <img className="meme" src={currentWord.meme} alt="meme"/>
                {currentWord.category === 1 ? <p className="font-red">🌶️{vocabularyCardContent.warning[language]}🌶️</p> : <></>}
                <div className="scroll">
                <h3 >Explanation</h3>
                <p className="cardText dark-blue">{currentWord.explainFrench}</p>
                <p className="cardText">-</p>
                <p className="cardText">{currentWord.explainForeign}</p>
                <h3 >Examples</h3>
                {
                    currentWord.exampleList.map(example => {
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