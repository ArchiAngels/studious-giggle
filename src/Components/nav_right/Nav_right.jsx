import React from "react";
import { Link} from "react-router-dom";
import './Nav_right.scss';

import Be_w from '../../../media/menu/social/be_w.png';
import Be from '../../../media/menu/social/be.png';

import inst_w from '../../../media/menu/social/inst_w.png';
import inst from '../../../media/menu/social/inst.png';

import Triangle_w from '../../../media/menu/social/triangle_w.png';
import Triangle_active from '../../../media/menu/social/triangle_active.png';

function Navigator_RIGHT(){
    return <>
        <div className='Navigator__right'>
            <div className="top__box">
                <ul>
                    <li>
                        <a href="#">
                            <img src={Be_w} alt="Be link" />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src={inst_w} alt="inst link" />
                        </a>
                    </li>
                </ul>
            </div>
            <div className="bottom__box">
                <ul>
                    <li>
                        <Link to='/'>
                            <img src={Triangle_w} alt="triangle link" />
                        </Link>
                    </li>
                    <li>
                        <Link to='/about'>
                            <img src={Triangle_w} alt="triangle link" />
                        </Link>
                    </li>
                    <li>
                        <Link to='/services'>
                            <img src={Triangle_w} alt="triangle link" />
                        </Link>
                    </li>
                    <li>
                        <Link to='/contacts'>
                            <img src={Triangle_w} alt="triangle link" />
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </>
}

export default Navigator_RIGHT;