import './News.css'
import news1 from './News_img/news1.jpg'
import news2 from './News_img/news2.jpg'
import news3 from './News_img/news3.jpg'
import news4 from './News_img/news4.jpg'

function News() {
 

  return (
    <div className="news">
        <div className="container news__container">
            <h3 className="news__title">All our news</h3>
            <ul className="news__list">
                <li className="news__item">
                    <img className="news__img" src={news1} alt=""/>
                    <div className="news__box">
                        <button className="news__btn"></button>
                        <h4 className="news__name">Who is a construction project manager?</h4>
                        <p className="news__text">The Discover Invest company has several construction project managers. This is a specialist responsible for the successful implementation of the construction site entrusted to him. He manages the entire process, from the planning stage and approval of project documentation to the commissioning of the building, and sometimes also performs post-project support. Latest</p>
                    </div>
                </li>
                <li className="news__item">
                    <img className="news__img" src={news2} alt=""/>
                    <div className="news__box">
                        <button className="news__btn"></button>
                        <h4 className="news__name">Who is a construction project manager?</h4>
                        <p className="news__text">The Discover Invest company has several construction project managers. This is a specialist responsible for the successful implementation of the construction site entrusted to him. He manages the entire process, from the planning stage and approval of project documentation to the commissioning of the building, and sometimes also performs post-project support. Latest</p>
                    </div>
                </li>
                <li className="news__item">
                    <img className="news__img" src={news3} alt=""/>
                    <div className="news__box">
                        <button className="news__btn"></button>
                        <h4 className="news__name">Who is a construction project manager?</h4>
                        <p className="news__text">The Discover Invest company has several construction project managers. This is a specialist responsible for the successful implementation of the construction site entrusted to him. He manages the entire process, from the planning stage and approval of project documentation to the commissioning of the building, and sometimes also performs post-project support. Latest</p>
                    </div>
                </li>
                <li className="news__item">
                    <img className="news__img" src={news4} alt=""/>
                    <div className="news__box">
                        <button className="news__btn"></button>
                        <h4 className="news__name">Who is a construction project manager?</h4>
                        <p className="news__text">The Discover Invest company has several construction project managers. This is a specialist responsible for the successful implementation of the construction site entrusted to him. He manages the entire process, from the planning stage and approval of project documentation to the commissioning of the building, and sometimes also performs post-project support. Latest</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default News