import './Categories.css';

export default function CategoryCard(props) {


    return (
        <div>
            <a className='categoryLink'>
                <div className='categoryCard' onClick={props.handleClick}>
                <h2 className='categoryCardTitle'>{props.card['en'].title}</h2>
                <div className='categoryCardContent'>
                    <p className='categoryCardQuote'>{props.card['en'].content}</p>
                    <img className='categoryCardImage' src={props.card.imageSource} alt="icon" />
                </div>
                </div>
            </a>
        </div>
    )
}