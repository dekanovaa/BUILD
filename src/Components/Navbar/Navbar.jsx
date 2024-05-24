import './Navbar.css'
import logo from './Navbar_img/logo1.png'

function Navbar() {
    const { t, i18n } = useTranslation();
  const handleChange = (event) => {
    i18n.changeLanguage(event)

  }
 
  return (
     <div className="navbar">
         <div className="container navbar__container">
             <ul className="navbar__list">
                 <li className="navbar__item">
                     <a className="navbar__link" href="#">Information</a>
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
                     <select>
                         <option value="EN">EN</option>
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