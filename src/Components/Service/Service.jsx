import './Service.css'
import service1 from './Service_img/service1.png'
import service2 from './Service_img/service2.png'
import service3 from './Service_img/service3.png'
import service4 from './Service_img/service4.png'

function Service() {
 

  return (
    <div className="service">
        <div className="container service__container">
            <h1 className="service__name">Our Service</h1>
            <ul className="service__list">
                <li className="service__item_big">
                    <h3 className="service__title">You can get free information from our company's specialists</h3>
                    <img className="service__img" src={service1} alt=""/>
                </li>
                <li className="service__item_small">
                    <h3 className="service__title">Documents clearance</h3>
                    <img className="service__img" src={service2} alt=""/>
                </li>
                <li className="service__item_small">
                    <h3 className="service__title">Repair correction service</h3>
                    <img className="service__img" src={service3} alt=""/>
                </li>
                <li className="service__item_big">
                    <h3 className="service__title">Team of professionals</h3>
                    <img className="service__img" src={service4} alt=""/>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Service