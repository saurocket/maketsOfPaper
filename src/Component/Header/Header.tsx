import logo from '../../img/logo.png'
import sprite from '../../img/icons/icons.svg'
import {NavLink} from 'react-router-dom'
import {LinkToPage} from "./LinkToPage";
import {useState} from "react";
import { mainPath } from '../../CONST/pathConst';
export const Header = () => {

    const [open, setOpen] = useState(false)


    const openMenu = () => {
        setOpen(!open)

    }



    return (
        <header className="header">
            <div className="header-container">
                <div className="header-nav-container">
                    <NavLink to={mainPath}>
                        <img src={logo} alt="логотип" width="60"/>
                    </NavLink>
                    <div className={open ? "menu_btn open": "menu_btn"} onClick={openMenu}>
                        <div className="menu_btn_burger">
                        </div>
                    </div>
                </div>
                <ul className={open ? "nav-container open" : "nav-container"}>
                    <li>
                        <ul className="nav">
                            <LinkToPage label={'Головна'} to={mainPath} activeOnlyWhenExact={true}/>
                            <LinkToPage label={'Послуги'} to={'/services'}/>
                            <LinkToPage label={'Галерея'} to={'/gallery'}/>
                            <LinkToPage label={'Контакти'} to={'/contacts'}/>
                        </ul>
                    </li>
                    <li>
                        <ul className="nav-item_contact_list">
                            <li>
                                <a>
                                    <svg className="icon_tel" width="50" height="30">
                                        <use href={sprite + "#smartphone"}/>
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a>
                                    <svg className="icon_email" width="50" height="30">
                                        <use href={sprite + "#mail"}/>
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a>
                                    <svg className="icon_map" width="50" height="30">
                                        <use href={sprite + "#placeholder"}/>
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </header>
    )
}