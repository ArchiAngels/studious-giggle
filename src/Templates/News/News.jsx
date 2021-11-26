import React from "react";
import './News.scss';

import News_Value from '../../Components/News/News_value.jsx';
import Slider from '../../Components/Slider/Slider.jsx';





let news = [
    {url:'./news/news_1.jpg'  ,w:950,h:920,
    title:'Пресс-тур нового GLS',
    date:"29.06.2019",value:'Белорусские журналисты Дмитрий Новицкий и Денис Логунович одними из первых протестировали новое поколение флагманского внедорожника Mercedes-Benz GLS на тест-драйве в США',},
    {url:'./news/news_2.jpg',w:950,h:450,title:"Mercedes-Benz Belarus Open 2018",date:"17.09.2018",
    value:"15 сентября прошел первый в Беларуси гольф-турнир Mercedes-Benz Belarus Open 2018!",},
    {url:'./news/news_3.jpg' ,w:950,h:450,title:"13-ый Международный теннисный турнир Carrier’s Сup 2018",
    date:"20.10.2018",
    value:"Профессионалы в области грузоперевозок и логистики продемонстрировали класс на теннисном корте",},
];

let sliders = ['1','2','3'];

function News(props){
    return <>
        <section className='News'>
            <div className="News__Container">
                <div className="Container__Main_News">
                    {news.map((value,i)=>{
                        if(i == 0){
                            return  <News_Value el={value} number={i} key={'news'+i}/>                            
                        }
                    })} 
                </div>

                <div className="Container__Other_News">
                    {news.map((value,i)=>{
                        if(i != 0){
                            return <News_Value el={value} number={i} key={'news'+i}/>
                        }
                    })} 
                </div>
            </div>
            <div className="News__slider">
                <Slider el={sliders}/>
            </div>
        </section>
    </>
}

export default News;