import React, {useState} from "react";
import './Slider.scss'

function Slider(props){

    let [Active,setActive] = useState(0);

    function NewActive(e){
        let clicked_value = e.target.attributes.uid;

        console.log(clicked_value,clicked_value.value);

        if(clicked_value.value == Active){}
        else{
            setActive(parseInt(clicked_value.value));
        }

    } 
    return <>
        <div className="Slider__Container">
            {props.el.map((elem,i)=>{
                if(i == Active){
                    return <span className='active' key={i} uid={i}></span>
                }
                return <span onClick={(e)=>{NewActive(e)}} key={i} uid={i}></span>
            })}
        </div>
    </>
}

export default Slider;
