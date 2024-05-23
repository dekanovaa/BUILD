import './Header.css'
import header from './Header_img/header.jpeg'

function Header() {
    const backgroundImageStyle = {
        backgroundImage: `url(${header})`,
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
      };
 

  return (
    <div className="header" style={backgroundImageStyle}>
        <div className="container header__container">
            <h1 className="header__title">ATAEV <br/> BAHODIR BUILD</h1>
            <p className="header__text">Excellence in everything</p>
            <div className="header__box">
                <button className="header__btn">Our Projects</button>
                <button className="header__btn">Connection</button>
            </div>
        </div>
    </div>
  )
}

export default Header