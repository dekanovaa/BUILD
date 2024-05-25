import './Navbar.css'
import logo from './Navbar_img/logo1.png'
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {t} from 'i18next';
import Modal from '../Meeting/Modal';


function Navbar() {
    const { t, i18n } = useTranslation();
    const language = localStorage.getItem('i18nextLng')
    const handleChange = (event) => {
    const selectedLaungage = event.target.value;
    i18n.changeLanguage(selectedLaungage)
  }
  const [navColor, setNavColor] = useState('transparent');

  const handleScroll = () => {

    if (window.scrollY > 150) { 
      setNavColor('blue'); 

    } else {
      setNavColor('transparent');
    
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
     <div className={`navbar ${navColor === 'blue' ? 'navbar-blue' : 'navbar-transparent'}`}>
         <div className="container navbar__container">
           <Modal/>
             <ul className="navbar__list">
                 <li className="navbar__item">
  <a className="navbar__link" href="#section">{t("navbar.link1")}</a>
                 </li>
                 <li className="navbar__item">
  <a className="navbar__link" href="#project">{t("navbar.link2")}</a>
                 </li>
                 <li className="navbar__item">
  <a className="navbar__link" href="#section">{t("navbar.link3")}</a>
                 </li>
                 <li className="navbar__item">
                     <img className="navbar__img" src={logo} alt="logo"/>
                 </li>
                 <li className="navbar__item">
  <a className="navbar__link" href="#about">{t("navbar.link4")}</a>
                 </li>
                 <li className="navbar__item">
  <a className="navbar__link" href="#news">{t("navbar.link5")}</a>
                 </li>
                 <li className="navbar__item">
  <a className="navbar__link" href="#message">{t("navbar.link6")}</a>
                 </li>
                 <li className="navbar__item">
                     <select onChange={handleChange} value={language} >
                         <option >EN</option>
                         <option >UZ</option>
                         <option >RU</option>
                     </select>
                 </li>
             </ul>
             <a className="top__link" href="tel:+998986766606"><i class="fa-solid fa-phone"></i></a>
         </div>
     </div>
  )
}

export default Navbar