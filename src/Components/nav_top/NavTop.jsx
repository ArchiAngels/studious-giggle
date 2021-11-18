import React from "react";
import './NavTop.scss';
import { Link } from "react-router-dom";
import Logo_Selected from '../../../media/menu/logs/logotyp.png';
import Logo from '../../../media/menu/logs/logo.png';

function Navigator_TOP(props){
    return <>
        <nav className='Navigator__top'>
            <ul>
                {/* TODO eng and rus text */}
                <li>
                    <Link to='/'>
                        <img src={Logo_Selected} alt="Canit logo" width='80px' height='69px' />
                    </Link>
                </li>
                <li><Link to='/About'>О нас</Link></li>
                <li><Link to='/Services'>Услуги</Link></li>
                <li><Link to='/Contacts'>Контакты</Link></li>
            </ul>
        </nav>    
    </>
}
export default Navigator_TOP;