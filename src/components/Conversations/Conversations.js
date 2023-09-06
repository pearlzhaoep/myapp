import { useContext, useEffect, useState } from "react";
import ConversationCard from "./ConversationCard"
import './Conversations.css'
import ConversationPiece from "./ConversationPiece";
import { LanguageSwitch, MenuClose } from "../Provider";

export default function Converstations(){
    const { isTitlePage, setIsTitlePage }  = useContext(MenuClose);
    const [ currentConversation, setCurrentConversation ] = useState();   
    const [ conversationCovers, setConversationCovers  ] = useState([])
    const { language } = useContext(LanguageSwitch)

    const getConversationCoverOnly = () => {
        fetch(`http://localhost/php-restAPI/index.php/conversation`, {
            method: 'GET',
            headers: {'Content-Type': 'application/json',},
        })
        .then((response) =>  response.json())
        .then((parsed) => {
            setConversationCovers(parsed)
            }
        ).catch(console.error)
    }

    const getConversationById = (id) => {
        fetch(`http://localhost/php-restAPI/index.php/conversation?conversationId=${id}&language=${language}`, {
            method: 'GET',
            headers: {'Content-Type': 'application/json',},
        })
        .then((response) =>  response.json())
        .then((parsed) => {
            setCurrentConversation(parsed)
            }
        ).catch(console.error)
    }

    const handleClick = (id) => () => {
        getConversationById(id)
        setIsTitlePage(!isTitlePage)
    }

    const handleLanguageChange = () => {
        if(!isTitlePage && currentConversation){
            getConversationById(currentConversation.id)
        }
    }

    useEffect(getConversationCoverOnly, [])
    useEffect(handleLanguageChange, [language])

    return (
        <div>
            <div style={isTitlePage? {display: "block"} : {display: "none"}}>
            <h1 className="menuItemTitle">Learn By Conversations</h1>
            {
                conversationCovers.map(cover => {return <ConversationCard key={cover.id} cover={cover} handleClick={handleClick(cover.id)} />})
            }
            </div>
            <div style={isTitlePage? {display: "none"} : {display: "block"}}>                
                <ConversationPiece conversation={currentConversation} />
            </div>
        </div>
    )
}