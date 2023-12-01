import { useContext, useState } from 'react'
import './HPbody.css'
import { HPbodyContent } from '../../models/HPbodyModel'
import { LanguageSwitch } from '../Provider'
import { postContact } from '../App/api'


export default function HPbody() {
    const { language } = useContext(LanguageSwitch)
    const [ contactForm, setContactForm ] = useState({email:"", message:"", token:""})
    const [ responseState, setResponseState ] = useState('noMessage')
    const [ recaptchaResponse, setRecaptchaResponse ] = useState('')

    const handleSubmit = (e) => {
        setResponseState('noMessage')
        e.preventDefault()
        if(contactForm.email.match(/^\S+@\S+$/)){
            if(window.grecaptcha === undefined){
                setResponseState('general')
            }
            else {
                    window.grecaptcha.ready(()=>{
                        window.grecaptcha.execute("6LdaQSIpAAAAAP3QKWK8O_1lkc8Fbgcm985SV0iv", {
                        action: 'contact'
                    })
                    .then(token => {
                        setRecaptchaResponse(token)
                        postContact({...contactForm, token})
                        .then(response => {
                            if(response){
                                setResponseState('success')
                            }
                            else setResponseState('general')
                        })                       
                    })
                })                
            }
            setContactForm({email:"", message:""})
        }
        else(setResponseState('email'))
    }

    const handleChange = (e) => {
        switch(e.target.id){
            case 'email':
                setContactForm((prev)=>({...prev, email:e.target.value}))
                break;
            case 'message': 
                setContactForm((prev)=>({...prev, message:e.target.value}))
                break;
            default:
                break;
        }
    }

    return (
        <div>
            <div className='HPbody'>
            <img className='beaverImg' src="/media/beaver.png" alt="beaver"/>
            <div className='pitchLine'>
                <div className='pitchLine-single'>
                    <img className='pitchLine-image' src="/media/beaver_question.png" alt="icon" />
                    <h1>{HPbodyContent[language].cards[0].title}</h1>
                    <p>{HPbodyContent[language].cards[0].content}</p>
                </div>
                <div className='pitchLine-single'>
                    <img className='pitchLine-image' src="/media/beaver_shock.png" alt="icon" />
                    <h1>{HPbodyContent[language].cards[1].title}</h1>
                    <p>{HPbodyContent[language].cards[1].content}</p>
                </div>
                <div className='pitchLine-single'>
                    <img className='pitchLine-image' src="/media/beaver_happy.png" alt="icon" />
                    <h1>{HPbodyContent[language].cards[2].title}</h1>
                    <p>{HPbodyContent[language].cards[2].content}</p>
                </div>  
            </div>
            <a className='HPButton' href='/conversation'>{HPbodyContent[language].startButton}</a>
            </div>
            <div className='HPfooter'>
                <h1>{HPbodyContent[language].contactForm.madeWith} <img className='poutine' src="/media/poutine.png" alt="poutine"/><br />{HPbodyContent[language].contactForm.fromQC}</h1>
                <form onSubmit={handleSubmit}>
                    <input type='hidden' name='recaptchaResponse' id='recaptchaResponse' value={recaptchaResponse}/>
                    <h2 className='contactUs'>{HPbodyContent[language].contactForm.contactUs}</h2><br/>
                    <label htmlFor='email'>E-mail</label><br/>  
                    <textarea type='text' id="email" name="email" rows={1} onChange={handleChange} maxLength={35} value={contactForm.email} required/><br/> 
                    <label htmlFor='message'>{HPbodyContent[language].contactForm.message}</label><br/>
                    <textarea type='text' id="message" name="message" rows={4} cols={40} onChange={handleChange} value={contactForm.message} required/><br/> 
                    <input className='sendButton' type="submit" value={HPbodyContent[language].contactForm.send} maxLength={3000}/><br/><br/>
                    <span>{HPbodyContent[language].contactForm.respondeMessage[responseState]}</span>
                </form>
            </div>
        </div>
    )
}