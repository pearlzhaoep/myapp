import './HPbody.css'

export default function HPbody() {
    return (
        <div className='HPbody'>
            <img className='beaverImg' src="/media/beaver.png" alt="beaver"/>
            <div className='pitchLine'>
                <div className='pitchLine-single'>
                    <img className='pitchLine-image' src="/media/randomIcon.png" alt="icon" />
                    <h1>New to Quebec?</h1>
                    <p>Confused about the expressions Quebecois while struggling to learn French at the same time?</p>
                </div>
                <div className='pitchLine-single'>
                    <img className='pitchLine-image' src="/media/randomIcon.png" alt="icon" />
                    <h1>We understand!</h1>
                    <p>We've compiled the most commonly used expressions Quebecois to help you understand and speak like a local!</p>
                </div>
                <div className='pitchLine-single'>
                    <img className='pitchLine-image' src="/media/randomIcon.png" alt="icon" />
                    <h1>Follow our conversations</h1>
                    <p>They are filled with expressions that you won't be learning from school with vocabularies and examples explained in French and English.</p>
                </div>  
            </div>
            <a className='HPButton' href='/conversation'>Let's try it out!</a>
        </div>
    )
}