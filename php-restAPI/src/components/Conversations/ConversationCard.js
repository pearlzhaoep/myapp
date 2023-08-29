import './Conversations.css'

export default function ConversationCard(props) {
    return (
        <div className ="conversationCard" onClick={props.handleClick}>
            <img className="conversationCardImage" src={props.cover.cover} alt="Cover" />
            <h2>{props.cover.title}</h2>
        </div>
    )
}