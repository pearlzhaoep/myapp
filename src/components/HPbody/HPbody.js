import './HPbody.css'
import { HPbodyContent } from './HPbodyModel'


export default function HPbody() {
    return (
        <div className='HPbody'>
            <img className='beaverImg' src="/media/beaver.png" alt="beaver"/>
            <div className='pitchLine'>
                <div className='pitchLine-single'>
                    <img className='pitchLine-image' src="/media/randomIcon.png" alt="icon" />
                    <h1>{HPbodyContent['en'].cards[0].title}</h1>
                    <p>{HPbodyContent['en'].cards[0].content}</p>
                </div>
                <div className='pitchLine-single'>
                    <img className='pitchLine-image' src="/media/randomIcon.png" alt="icon" />
                    <h1>{HPbodyContent['en'].cards[1].title}</h1>
                    <p>{HPbodyContent['en'].cards[1].content}</p>
                </div>
                <div className='pitchLine-single'>
                    <img className='pitchLine-image' src="/media/randomIcon.png" alt="icon" />
                    <h1>{HPbodyContent['en'].cards[2].title}</h1>
                    <p>{HPbodyContent['en'].cards[2].content}</p>
                </div>  
            </div>
            <a className='HPButton' href='/conversation'>{HPbodyContent['en'].startButton}</a>
        </div>
    )
}