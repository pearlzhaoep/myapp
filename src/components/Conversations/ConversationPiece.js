import { useContext, useState } from "react"
import FrenchLine from "./FrenchLine"
import DictionaryCard from "../Dictionary/DictionaryCard"
import { LanguageSwitch, MenuClose } from "../Provider";

export default function ConversationPiece(props) {
    const { isTitlePage, setIsTitlePage }  = useContext(MenuClose);
    const { language } = useContext(LanguageSwitch)
    const [isCard, setIscard] = useState(false)
    const [currentWord, setCurrentWord] = useState()
    const [currentAudio, setCurrentAudio] = useState(props.conversation ? props.conversation.fullAudio : null)

    const playCurrentAudio = (audio) => {
        if(currentAudio){
            currentAudio.pause()
        }
        const newAudio = new Audio(audio)
        setCurrentAudio(newAudio);
        newAudio.play()
    }

    const showVocabCard = (id) => {
            fetch(`http://localhost/php-restAPI/index.php/dictionary?wordId=${id}&language=${language}`, {
                method: 'GET',
                headers: {'Content-Type': 'application/json',},
            })
            .then((response) =>  response.json())
            .then((parsed) => {
                setCurrentWord(parsed)
                }
            ).catch(console.error)
        setIscard(!isCard)
    }

    return (
        props.conversation ?
            <div>
                <div className="fixed-top">
                <button onClick={()=>{
                    console.log("playCurrentAudio", typeof playCurrentAudio)
                    playCurrentAudio(props.conversation.fullAudio)}}>▶</button>
                <button onClick={()=>currentAudio.pause()}>||</button>
                <button onClick={()=>setIsTitlePage(!isTitlePage)} >X</button>
                </div>
                <div className="conversation-piece">
                    {
                        props.conversation.dialogList.map((line, index) => {
                            return (
                                <div className="lineBlock">
                                    <img className="profilePic" src={line.avatar} alt="speaker" />
                                    <div className="dialogBubble">
                                        <div className="inline-flex">
                                            <span className="audioButton" onClick={() => playCurrentAudio(line.audio)}><img className="playButton icon-small" src="/media/headphone.svg" alt="play button" /></span>
                                            <div className="dialog-fr"><FrenchLine key={index} line={line.lineFrench} wordList={line.linkList} handleClick={showVocabCard} /></div>
                                        </div>
                                        <p className="dialog-nonfr">{line.lineForeign}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="entry-card" style={isCard ? { display: "block" } : { display: "none" }}>
                    <div className="dimScreen"></div>
                    <DictionaryCard word={currentWord} handleClick={()=>{setIscard(!isCard)}} />
                </div>
            </div>
            : <></>
    )
}