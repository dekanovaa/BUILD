import './Navbar.css'
import logo from './Navbar_img/logo1.png'
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {t} from 'i18next';


function Navbar() {
    const { t, i18n } = useTranslation();
    const language = localStorage.getItem('i18nextLng')
    const handleChange = (event) => {
    const selectedLaungage = event.target.value;
    i18n.changeLanguage(selectedLaungage)
  }
  const [navColor, setNavColor] = useState('transparent'); // initial color

  const handleScroll = () => {
    // console.log(window)
    if (window.scrollY > 200) { // change 200 to whatever pixel value you need
      setNavColor('blue'); // or any color you want
    } else {
      setNavColor('transparent');
    }
  };

  useEffect(() => {
      console.log("salom")
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
 console.log(navColor,"navcolorrr")
  return (
     <div className={`navbar ${navColor === 'blue' ? 'navbar-blue' : 'navbar-transparent'}`}>
         <div className="container navbar__container">
             <ul className="navbar__list">
                 <li className="navbar__item">
  <a className="navbar__link" href="#">{t("navbar.link1")}</a>
                 </li>
                 <li className="navbar__item">
                     <a className="navbar__link" href="#project">About Us</a>
                 </li>
                 <li className="navbar__item">
                     <a className="navbar__link" href="#section">Enterprises</a>
                 </li>
                 <li className="navbar__item">
                     <img className="navbar__img" src={logo} alt="logo"/>
                 </li>
                 <li className="navbar__item">
                     <a className="navbar__link" href="#">Our Advantages</a>
                 </li>
                 <li className="navbar__item">
                     <a className="navbar__link" href="#news">News</a>
                 </li>
                 <li className="navbar__item">
                     <a className="navbar__link" href="#message">Communication</a>
                 </li>
                 <li className="navbar__item">
                     <select onChange={handleChange} value={language} >
                         <option value="language">EN</option>
                         <option value="UZ">UZ</option>
                         <option value="RU">RU</option>
                     </select>
                 </li>
             </ul>
         </div>
     </div>
  )
}

export default Navbar