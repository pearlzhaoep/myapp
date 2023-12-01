import { useContext } from 'react';
import './Categories.css';
import { LanguageSwitch } from '../Provider';

export default function CategoryCard(props) {
 const {language} = useContext(LanguageSwitch)
    return (
        <div>
            <a className='categoryLink'>
                <div className='categoryCard' onClick={props.handleClick}>
                <h2 className='categoryCardTitle'>{props.card[language].title}</h2>
                <div className='categoryCardContent'>
                    <p className='categoryCardQuote'>{props.card[language].content}</p>
                    <img className='categoryCardImage' src={props.card.imageSource} alt="icon" />
                </div>
                </div>
            </a>
        </div>
    )
}