import './Message.css'
import message from './Message_img/message.png'

function Message() {
    const backgroundImageStyle = {
        backgroundImage: `url(${message})`,
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
      };
 

  return (
    <div className="message">
        <div className="container message__container" style={backgroundImageStyle}>
            <h3 className="message__title">Do you have any questions, suggestions or requests?</h3>
            <form>
                <input type="text" id="name" placeholder="Your name"/><br/>
                <input type="tel" id="tel" placeholder="Your phone number"/><br/>
                <textarea  id="text" placeholder="your message..." ></textarea><br/>
                <button className="form__btn">Sending</button>
            </form>
        </div>
    </div>
  )
}

export default Message