import './Section.css'
import section from './Section_img/section.png'

function Section() {
 

  return (
    <div className="section"id="section" style={{backgroundImage:`url(${section})`}}>
        <div className="container section__container">
            <h3 className="section__title">Our Company</h3>
            <ul className="section__list">
                <li className="section__item">
                    <h1 className="section__name">120+</h1>
                    <p className="section__text">Number of employees</p>
                </li>
                <li className="section__item">
                    <h1 className="section__name">43+</h1>
                    <p className="section__text">Objects</p>
                </li>
                <li className="section__item">
                    <h1 className="section__name">250+</h1>
                    <p className="section__text">Special equipment</p>
                </li>
                <li className="section__item">
                    <h1 className="section__name">2+</h1>
                    <p className="section__text">14 years on the market</p>
                </li>
                

            </ul>


        </div>
    </div>
  )
}

export default Section