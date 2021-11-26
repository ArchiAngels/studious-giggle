import React , {useEffect} from "react";
import './NavTop.scss';
import { Link } from "react-router-dom";

import SVG_merc from '../../../media/menu/merc.svg';
import SVG_title from '../../../media/menu/title.svg';

function Navigator(props){

    let UL_Parent;

    useEffect(()=>{
        
        UL_Parent = document.getElementById('UL_global');
            UL_Parent.addEventListener('click',(e)=>{
                console.log(e.target);
                if(e.target.tagName == 'LI'){
                    e.target.children[0].click();
                }
            })
        console.log(UL_Parent);
    })
    return <>
        <nav className='Navigator'>
            <ul id='UL_global'>
                {/* TODO eng and rus text */}
                <li>
                    <Link to='/' className='Navigator__logoLink'>
                        <img src={SVG_merc} alt="Mercedes logo" width='56px' height='56px' />
                        <div className='Navigator__logoTitle'>
                            <img src={SVG_title} alt="Mercedes logo" width='110px' height='13px' />
                            <p>Лучшее или ничего</p>
                        </div>
                    </Link>
                </li>
                <li><Link to='/News'>Новости</Link></li>
                <li><Link to='/Cars'>Автомобили</Link></li>
                <li><Link to='/Services'>Услуги и сервис</Link></li>
                <li><Link to='/Contacts'>Контакты</Link></li>
            </ul>
        </nav>    
    </>
}
export default Navigator;