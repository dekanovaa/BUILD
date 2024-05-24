import './Meeting.css'
import meet from './Meeting_img/meet.jpg'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

function Meeting(){

    return(
        <div className="meeting" id="meeting">
                <Navbar/>
                <div className="meeting__wrap">
                <div className="meeting__box">
                    <h2 className="meeting__title">About ATAEV BAHODIR BUILD</h2>
                    <a className="meeting__link" href="/">Homepage </a>
                    <p className="meeting__text">We don't just create projects, we create new opportunities. By building state-scale facilities, we are building the future. We care about the environment: the company takes full responsibility for environmental aspects associated with the construction and operation of buildings and infrastructure</p>
                </div>
                <img className="meeting__img" src={meet} alt=""/>
                </div>
                <Footer/>
        </div>


    )
}
export default Meeting