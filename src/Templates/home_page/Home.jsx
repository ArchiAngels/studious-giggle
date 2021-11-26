import React from "react";
import './Home.scss';
// import Navigator_TOP from "../../Components/nav_top/NavTop.jsx";
// import Navigator_RIGHT from "../../Components/nav_right/Nav_right.jsx";
import Man_Photo from '../../../media/home/Group_1.jpg';

function HomePage(props){
    return <>
        <section className='Home'>
            <div className='background__image'>
                <img src={Man_Photo} alt="Canit worker" />
            </div>
            <article className='Text__value'>
                <h1>mercedes</h1>
                <p>Помогаем постоянно занятым бизнесменам покорить цифровой мир</p>
                <div className='Glitch__btn'>
                    <p>Сотрудничать</p>
                </div>
            </article>
            
        </section>
    </>
}


export default HomePage;