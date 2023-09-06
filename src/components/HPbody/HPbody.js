import { useContext } from 'react'
import './HPbody.css'
import { HPbodyContent } from './HPbodyModel'
import { LanguageSwitch } from '../Provider'


export default function HPbody() {
    const { language } = useContext(LanguageSwitch)

    return (
        <div>
            <div className='HPbody'>
            <img className='beaverImg' src="/media/beaver.png" alt="beaver"/>
            <div className='pitchLine'>
                <div className='pitchLine-single'>
                    <img className='pitchLine-image' src="/media/randomIcon.png" alt="icon" />
                    <h1>{HPbodyContent[language].cards[0].title}</h1>
                    <p>{HPbodyContent[language].cards[0].content}</p>
                </div>
                <div className='pitchLine-single'>
                    <img className='pitchLine-image' src="/media/randomIcon.png" alt="icon" />
                    <h1>{HPbodyContent[language].cards[1].title}</h1>
                    <p>{HPbodyContent[language].cards[1].content}</p>
                </div>
                <div className='pitchLine-single'>
                    <img className='pitchLine-image' src="/media/randomIcon.png" alt="icon" />
                    <h1>{HPbodyContent[language].cards[2].title}</h1>
                    <p>{HPbodyContent[language].cards[2].content}</p>
                </div>  
            </div>
            <a className='HPButton' href='/conversation'>{HPbodyContent[language].startButton}</a>
            </div>
            <div className='HPfooter'>
                <h1>Made With <img className='poutine' src="/media/poutine.png" alt="poutine"/><br />From Quebec</h1>
                <form onSubmit={(e)=>e.preventDefault()}>
                    <h2 className='contactUs'>Contact Us</h2><br/>
                    <label htmlFor='email'>E-mail</label><br/>  
                    <textarea type='text' id="email" name="email" rows={1} /><br/> 
                    <label htmlFor='message'>Message</label><br/>
                    <textarea type='text' id="message" name="message" rows={4} cols={40}/><br/> 
                    <input className='sendButton' type="submit" value="Send" /><br/>
                </form>
            </div>
        </div>
    )
}