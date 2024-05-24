import './Message.css'
import back from './Message_img/message.png'
import { useState } from 'react';
import axios from 'axios';
import { message } from 'antd';


function Message() {
    const backgroundImageStyle = {
        backgroundImage: `url(${back})`,
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
      };
      const [loading,setloading] = useState(false);
      const sendMessage = (event) =>{
          setloading(true);
          event.preventDefault();
          const token =  "7067329402:AAEGunIJCoHOAJ1uF_oNy80ya2HbKsMJvgA";''
          const id = -1002022260815;
          const url = `https://api.telegram.org/bot${token}/sendMessage`;
          const name = document.getElementById("name").value;
          const tel = document.getElementById("tel").value;
          const text = document.getElementById("text").value;
          const textContent = `Name: ${name} \n Phone number:${tel} \n Message: ${text}`
          axios({
            url:url,
            method:'POST',
            data:{
              "chat_id": id,
              "text": textContent,
            }
      
          })
          .then((res) => {
            document.getElementById("form").reset();
           message.success("Yuborildi")
          }).catch((error) =>{
            message.error("xatolik")
            console.log(error);
          }).finally(() =>{
            setloading(false);
          })
      }
 

  return (
    <div className="message" id="message">
        <div className="container message__container" style={backgroundImageStyle}>
            <h3 className="message__title">Do you have any questions, suggestions or requests?</h3>
            <form onSubmit = {sendMessage}>
                <input type="text" id="name" placeholder="Your name" required/><br/>
                <input type="tel" id="tel" placeholder="Your phone number" required/><br/>
                <textarea  id="text" placeholder="your message..." required ></textarea><br/>
                <button type="submit"loading={loading} className="form__btn">Sending</button>
            </form>
        </div>
    </div>
  )
}

export default Message