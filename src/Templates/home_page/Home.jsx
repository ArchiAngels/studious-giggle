import React from "react";
import './Home.scss';

let back_video = './home/bg.webm';
import arrow from '../../../media/home/arrow.png';

function HomePage(props){
    return <>
       <section className='Home'>
           <div className="Home__backgroud">
                <video autoPlay loop muted>
                    <source src={back_video} type="video/mp4"/>
                    Your browser does not support the video tag.
                </video> 
           </div>
           <article className='Home__mainText'>
               <h1>Переосмысление совершенства вместе с Mercedes-Benz</h1>
               <p>Дистрибьютор Daimler AG в Беларуси</p>
           </article>
           <div className="Home_Circle">
               <div className="arrow">
                   <img src={arrow} alt="Arrow" height="24px" />
               </div>
           </div>
       </section>
    </>
}


export default HomePage;