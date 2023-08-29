import { useContext, useState } from "react";
import { conversations } from "../../db"
import ConversationCard from "./ConversationCard"
import './Conversations.css'
import ConversationPiece from "./ConversationPiece";
import { MenuClose } from "../Provider";

export default function Converstations(){
    const { isTitlePage, setIsTitlePage }  = useContext(MenuClose);
    const [ currentConversation, setCurrentConversation ] = useState();
    const [ audio, setAudio ] = useState()    

    const covers = conversations.map(conversation => (({id, title, cover}) => ({id, title, cover}))(conversation))

    const handleClick = (id) => () => {
        let newConversation = conversations.find(conversation => conversation.id == id)
        setCurrentConversation(newConversation)
        setAudio(new Audio(newConversation.fullAudio))
        setIsTitlePage(!isTitlePage)
    }

    return (
        <div>
            <div style={isTitlePage? {display: "block"} : {display: "none"}}>
            <h1 className="menuItemTitle">Learn By Conversations</h1>
            {
                covers.map(cover => {return <ConversationCard key={cover.id} cover={cover} handleClick={handleClick(cover.id)} />})
            }
            </div>
            <div style={isTitlePage? {display: "none"} : {display: "block"}}>
                <ConversationPiece conversation={currentConversation} />
                <div className="fixed-bottom">
                <button onClick={()=>audio.play()}>▶</button>
                <button onClick={()=>audio.pause()}>||</button>
                <button onClick={()=>setIsTitlePage(!isTitlePage)} >X</button>
                </div>
            </div>
        </div>
    )
}