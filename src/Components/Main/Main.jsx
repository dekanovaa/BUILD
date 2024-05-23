import './Main.css'
import main1 from './Main__img/main1.jpg'
import main2 from './Main__img/main2.jpg'
import main3 from './Main__img/main3.jpg'
import main4 from './Main__img/main4.jpg'
import main5 from './Main__img/main5.jpg'
import main6 from './Main__img/main6.jpg'

function Main() {
 

  return (
    <div className="main">
        <h4 className="main__title">Your dream home</h4>
       <div className="main__box">
           <img className="main__img" src={main1} alt=""/>
           <img className="main__img" src={main2} alt=""/>
           <img className="main__img" src={main3} alt=""/>
           <img className="main__img" src={main4} alt=""/>
           <img className="main__img" src={main5} alt=""/>
           <img className="main__img" src={main6} alt=""/>
       </div>
    </div>
  )
}

export default Main