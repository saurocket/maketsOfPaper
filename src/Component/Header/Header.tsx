import logo from '../../img/logo.png'
import sprite from '../../img/icons/icons.svg'
import {NavLink} from 'react-router-dom'
import {LinkToPage} from "./LinkToPage";
import {useState} from "react";
import {mainPath} from '../../CONST/pathConst';
import Swal from "sweetalert2";


export const Header = () => {
    const [open, setOpen] = useState(false)
    const openMenu = () => {
        setOpen(!open)
    }
    const onShowPhone = () => {
        Swal.fire('Связаться с нами', "<a style='color: #1e88e5; font-size: 1.5rem'  href=\"tel:+0977550966\">" +
            "+38 097 755 09 66</a>")
    }
    const onShowEmail = () => {
        Swal.fire('Написать нам', "<a style='color: #1e88e5; font-size: 1.5rem' " +
            "href=\"mailto:info@devstudio.com\">projektmaket@gmail.com</a>")
    }
    const opShowMap = () => {
        Swal.fire('Мы находимся', "" + "<a style='color: #1e88e5; font-size: 1.5rem' " +
            "href=\"adress\">г. Киев, пр-т Леси Украинки, 26</a>" +
            "<iframe\n" +
            "src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2541.7794508425036!2d30.536197115696865!3d50.4265806794721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cf0e033ecbe9%3A0x57a4dffefec77da0!2z0LHRg9C7LiDQm9C10YHQuCDQo9C60YDQsNC40L3QutC4LCAyNiwg0JrQuNC10LIsINCj0LrRgNCw0LjQvdCwLCAwMjAwMA!5e0!3m2!1sru!2spl!4v1626453830197!5m2!1sru!2spl\"\n" +
            "width=\"100%\" height=\"450\"  loading=\"lazy\"></iframe>")
    }
    return (
        <header className="header">
            <div className="header-container">
                <div className="header-nav-container">
                    <NavLink to={mainPath}>
                        <img src={logo} alt="логотип" width="60"/>
                    </NavLink>
                    <div className={open ? "menu_btn open" : "menu_btn"} onClick={openMenu}>
                        <div className="menu_btn_burger"></div>
                    </div>
                </div>
                <ul className={open ? "nav-container open" : "nav-container"}>
                    <li>
                        <ul className="nav" onClick={openMenu}>
                            <LinkToPage  label={'Головна'} to={mainPath} activeOnlyWhenExact={true}/>
                            <LinkToPage label={'Послуги'} to={'/services'}/>
                            <LinkToPage label={'Галерея'} to={'/gallery'}/>
                            <LinkToPage label={'Контакти'} to={'/contacts'}/>
                        </ul>
                    </li>
                    <li>
                        <ul className="nav-item_contact_list">
                            <li>
                                <button onClick={onShowPhone}>
                                    <svg className="icon_tel" width="50" height="30">
                                        <use href={sprite + "#smartphone"}/>
                                    </svg>
                                </button>
                            </li>
                            <li>
                                <button onClick={onShowEmail}>
                                    <svg className="icon_email" width="50" height="30">
                                        <use href={sprite + "#mail"}/>
                                    </svg>
                                </button>
                            </li>
                            <li>
                                <button onClick={opShowMap}>
                                    <svg className="icon_map" width="50" height="30">
                                        <use href={sprite + "#placeholder"}/>
                                    </svg>
                                </button>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </header>
    )
}