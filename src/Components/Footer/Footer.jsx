import './Footer.css'
import logo2 from './Footer_img/logo2.png'

function Footer() {
 

  return (
    <div className="footer">
      <div className="container footer__container">
        <ul className="footer__list">
          <li className="footer__item">
            <img className="footer__img" src={logo2} alt="logo"/>
            <p className="footer__text">Subscribe to our social networks</p>
            <div className="footer__box">
              <a href="https://www.instagram.com/ataev_bahodir_build"><i class="fa-brands fa-instagram"></i></a>
              <a href="https://www.facebook.com/people/Ataev-Bahodir-Build/pfbid09wTM7or8uoJSEb7YArKfFcKM7Y4kThgjPYauKAzXVwcNPJcvZpgiWEjAZLoCT6Wwl/?mibextid=LQQJ4d"><i class="fa-brands fa-facebook"></i></a>
            </div>
          </li>
          <li className="footer__item">
            <p classNmae="footer__text">Our company</p>
            <a className="footer__link" href="/">Interprises</a>
            <a href=""></a>

          </li>

        </ul>
      </div>

    </div>
  )
}

export default Footer