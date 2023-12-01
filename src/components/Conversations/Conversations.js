import { useContext, useState } from "react";
import ConversationCard from "./ConversationCard"
import './Conversations.css'
import ConversationPiece from "../ConversationPiece/ConversationPiece";
import { LanguageSwitch, MenuClose } from "../Provider";
import { MainHeaderContent } from "../../models/MainHeaderModel";
import { useGetConversationCoverQuery } from "../Api/apiSlice";

export default function Converstations(){
    const { isTitlePage, setIsTitlePage }  = useContext(MenuClose); 
    const { language } = useContext(LanguageSwitch)
    const [ currentConversationId, setCurrentConversationId ] = useState()

    const handleClick = (id) => () => {
        setIsTitlePage(!isTitlePage)
        setCurrentConversationId(id)
    }

    const {
        data: conversationCovers,
        isLoading,
        isSuccess,
    } = useGetConversationCoverQuery()

    return (
        isLoading ? <></> : isSuccess ?
        <div>
            <div style={isTitlePage? {display: "block"} : {display: "none"}}>
            <h1 className="menuItemTitle">{MainHeaderContent[language].PhoneMenu[0]}</h1>
            {
                conversationCovers.map(cover => {return <ConversationCard key={cover.id} cover={cover} handleClick={handleClick(cover.id)} />})
            }
            </div>
            <div>                
                {isTitlePage ? "" : <ConversationPiece id={currentConversationId}/>}
            </div>
        </div> : <></>
    )
}