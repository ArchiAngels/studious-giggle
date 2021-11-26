import React from "react";
import './News_value.scss';

function News_Value(props){

    let styleToComponent = {
        width:props.el.w,
        height:props.el.h,
    }
    return <>
        <div className="News__Container__news" style={styleToComponent}>
            <img src = {props.el.url} width={props.el.w} height={props.el.h} title='News photo'></img>
            <article className='news__text'>
                <div className="news__title">
                    <h3>{props.el.title}</h3>
                    <p>{props.el.date}</p>
                </div>
                <div className="news__value">
                    <p>{props.el.value}</p>
                </div>
            </article>
        </div>
    </>
}

export default News_Value;