import './Categories.css';

export default function CategoryCard(props) {
    let image = props.card.imageSource

    return (
        <div  onClick={props.handleClick} id={props.id}>
            <a className='categoryLink'>
                <div className='categoryCard'>
                <h2 className='categoryCardTitle'>{props.card.title}</h2>
                <div className='categoryCardContent'>
                    <p className='categoryCardQuote'>{props.card.content}</p>
                    <img className='categoryCardImage' src={image} alt="icon" />
                </div>
                </div>
            </a>
        </div>
    )
}