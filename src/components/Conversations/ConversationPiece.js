import { useState } from "react"
import FrenchLine from "./FrenchLine"
import { words } from "../../db"
import DictionaryCard from "../Dictionary/DictionaryCard"

export default function ConversationPiece(props) {
    const { dialog, profile } = props.conversation || {}
    const [isCard, setIscard] = useState(false)
    const [currentWord, setCurrentWord] = useState()
    const [singleAudio, setSingleAudio] = useState()

    const playSingleAudio = audio => {
        if(singleAudio){
            singleAudio.pause()
            console.log(singleAudio)
        }
        setSingleAudio(new Audio(audio));
        singleAudio.play()
    }
    const showVocabCard =(id) => {
        console.log("Clicked")
        setCurrentWord(words.find(word => word.id === id))
        setIscard(!isCard)
    }

    return (
        props.conversation ?
            <div>
                <div className="conversation-piece">
                    {
                        dialog.map((line, index) => {
                            return (
                                <div className="lineBlock">
                                    <img className="profilePic" src={profile[index % 2]} alt="speaker picture" />
                                    <div className="dialogBubble">
                                        <div className="inline-flex">
                                            <span className="audioButton" onClick={() => playSingleAudio(line.audio)}><img className="playButton icon-small" src="/media/headphone.svg" alt="play button" /></span>
                                            <div className="dialog-fr"><FrenchLine line={line.fr} wordList={line.link} handleClick={showVocabCard} /></div>
                                        </div>
                                        <p className="dialog-nonfr">{line.en}</p>
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