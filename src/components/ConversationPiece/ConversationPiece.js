import { useContext, useState } from "react"
import FrenchLine from "./FrenchLine"
import DictionaryCard from "../Dictionary/DictionaryCard"
import { LanguageSwitch, MenuClose } from "../Provider";
import { useGetConversationPieceQuery } from "../Api/apiSlice";

export default function ConversationPiece(props) {
    const { language } = useContext(LanguageSwitch)
    const {
        data: currentConversation,
        isLoading,
        isSuccess
    } = useGetConversationPieceQuery({id: props.id, language})
    const { isTitlePage, setIsTitlePage }  = useContext(MenuClose);
    const [ currentCardId, setCurrentCardId ] = useState()
    const [isCard, setIscard] = useState(false)
    const [currentAudio, setCurrentAudio] = useState(isSuccess ? currentConversation.fullAudio : null)

    const playCurrentAudio = (audio) => {
        if(currentAudio){
            currentAudio.pause()
        }
        const newAudio = new Audio(audio)
        setCurrentAudio(newAudio);
        newAudio.play()
    }

    const showCard = (id) => {
        setCurrentCardId(id)
        setIscard(!isCard)
    }

    return (<>
        {isLoading && <></>}
        
        {isSuccess &&
            <div>
                <div className="fixed-top">
                <button class="no-button-decoration" onClick={()=>{
                    playCurrentAudio(currentConversation.fullAudio)}}><img className="cardButton" alt="play button" src="/media/play.png" /></button>
                <button class="no-button-decoration" onClick={()=>currentAudio.pause()}><img className="cardButton" alt="pause button" src="/media/pause.png" /></button>
                <button class="no-button-decoration" onClick={()=>setIsTitlePage(!isTitlePage)} ><img className="cardButton" alt="close button" src="/media/card_close.png" /></button>
                </div>
                <div className="conversation-piece">
                    {
                        currentConversation.dialogList.map((line, index) => {
                            return (
                                <div className="lineBlock">
                                    <img className="profilePic" src={line.avatar} alt="speaker" />
                                    <div className="dialogBubble">
                                        <div className="inline-flex">
                                            <span className="audioButton" onClick={() => playCurrentAudio(line.audio)}><img className="playButton icon-small" src="/media/headphone.svg" alt="play button" /></span>
                                            <div className="dialog-fr"><FrenchLine key={index} line={line.lineFrench} wordList={line.linkList} showCard={showCard}/></div>
                                        </div>
                                        <p className="dialog-nonfr">{line.lineForeign}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="entry-card">
                    {isCard ? <div className="dimScreen">
                    <DictionaryCard handleClick={()=>{setIscard(!isCard)}} id={currentCardId}/></div> : <></>}
                </div>
            </div>
}</>)
}