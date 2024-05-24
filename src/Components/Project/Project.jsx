import './Project.css'
import project1 from './Project_img/project1.webp'
import project2 from './Project_img/project2.webp'
import project3 from './Project_img/project3.webp'
import project4 from './Project_img/project4.webp'
import project5 from './Project_img/project5.webp'
import project6 from './Project_img/project6.webp'

function Project() {
  const backgroundImageStyle1 = {
    background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${project1})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '330px',
}
      const backgroundImageStyle2 = {
        background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${project2})`,
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
        height: '330px',
      };
      const backgroundImageStyle3 = {
        background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${project3})`,
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
        height:'330px',
      };
      const backgroundImageStyle4 = {
        background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${project4})`,
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
        height:'330px',
      };
      const backgroundImageStyle5 = {
        background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${project5})`,
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
        height:'330px',
      };
      const backgroundImageStyle6 = {
        background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${project6})`,
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
        height:'330px',
      };
 

  return (
    <div className="project" id="project">
        <div className="container project__container">
            <h3 className="project__title">Our Projects</h3>
            <ul className="project__list">
                <li className="project__item" style={backgroundImageStyle1}>
                    <h2 className="project__name">Magic City</h2>
                    <p className="project__text">This is a large-scale socially significant project. The cultural and entertainment cluster in Tashkent is one of the new attractions.</p>
                </li>
                <li className="project__item" style={backgroundImageStyle2}>
                    <h2 className="project__name">Gardens Residence</h2>
                    <p className="project__text">Multifunctional residential complex created to provide comfort to the residents of Uzbekistan.</p>
                </li>
                <li className="project__item" style={backgroundImageStyle3}>
                    <h2 className="project__name">Fonon</h2>
                    <p className="project__text">This is a large-scale socially significant project. The cultural and entertainment cluster in Tashkent is one of the new attractions.</p>
                </li>
                <li className="project__item" style={backgroundImageStyle4}>
                    <h2 className="project__name">Magic City</h2>
                    <p className="project__text">This is a large-scale socially significant project. The cultural and entertainment cluster in Tashkent is one of the new attractions.</p>
                </li>
                <li className="project__item" style={backgroundImageStyle5}>
                    <h2 className="project__name">Magic City</h2>
                    <p className="project__text">This is a large-scale socially significant project. The cultural and entertainment cluster in Tashkent is one of the new attractions.</p>
                </li>
                <li className="project__item" style={backgroundImageStyle6}>
                    <h2 className="project__name">Magic City</h2>
                    <p className="project__text">This is a large-scale socially significant project. The cultural and entertainment cluster in Tashkent is one of the new attractions.</p>
                </li>

            </ul>

        </div>
    </div>
  )
}

export default Project