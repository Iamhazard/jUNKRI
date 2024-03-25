/* eslint-disable @next/next/no-img-element */
import React from 'react';

import './SpecialMenu.css';
import SubHeading from '../Navbars/SubHeading';
import { Special, wines } from '../config/data';
import MenuItem from './MenuItem';
//import { formatPrice } from '@/lib/utils';


const SpecialMenu = () => {


    return (
        <div className="app__specialMenu flex__center  px-4" id="menu">
            <div className="app__specialMenu-title">
                <SubHeading title="Menu that fits your palatte" />
                <h1 className="headtext__cormorant">Today&apos;s Special</h1>
            </div>

            <div className="app__specialMenu-menu">
                <div className="app__specialMenu-menu_wine  flex__center">
                    <p className="app__specialMenu-menu_heading">Wine & Beer</p>
                    <div className="app__specialMenu_menu_items">
                        {wines.map((wine, index) => (
                            <MenuItem key={wine.title + index} title={wine.title} price={wine.price} tags={wine.tags} />
                        ))}
                    </div>
                </div>

                <div className="app__specialMenu-menu_img">
                    <img src='/Assets/menu.png' alt="menu__img" />
                </div>

                <div className="app__specialMenu-menu_cocktails  flex__center">
                    <p className="app__specialMenu-menu_heading">Specials</p>
                    <div className="app__specialMenu_menu_items">

                        {Special.map((spc, index) => (
                            <MenuItem key={spc.title + index} title={spc.title} price={spc.price} tags={spc.tags} />
                        ))}
                    </div>
                </div>
            </div>

            <div style={{ marginTop: 15 }}>
                <button type="button" className="custom__button">View More</button>
            </div>
        </div>
    )

}

export default SpecialMenu;