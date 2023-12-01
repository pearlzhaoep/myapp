import './MainHeader.css'
import { ReactComponent as MenuListIcon } from './menu-list-icon.svg'
import { ReactComponent as MenuCloseIcon } from './menu-list-close.svg'
import { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { LanguageSwitch, MenuClose } from '../Provider';
import { MainHeaderContent } from '../../models/MainHeaderModel';

export default function MainHeader() {
    const [isMenuExpanded, setIsMenuExpanded] = useState(false);
    const { setIsTitlePage } = useContext(MenuClose)
    const { language, setLanguage } = useContext(LanguageSwitch)

    const chooseMenu = () => {
        setIsMenuExpanded(false)
        setIsTitlePage(true)
    }

    return (
        <div className='fixed'>
            <nav className="navBar">
                <button className="no-button-style drop-menu" onClick={() => { setIsMenuExpanded(!isMenuExpanded) }}>
                    <MenuListIcon style={isMenuExpanded ? { display: "none" } : { display: "block" }} />
                    <MenuCloseIcon style={isMenuExpanded ? { display: "block" } : { display: "none" }} />
                </button>
                <div style={{ display: 'flex' }} >
                    <div className='main-logo'><a href="/">LangApp</a></div>
                    <div className="navigation-menu-desktop">
                        <ul>
                            <li>
                                <NavLink to="/conversation" onClick={chooseMenu}>{MainHeaderContent[language].DesktopMenu[0]}</NavLink>
                            </li>
                            <li>
                                <NavLink to="/category" onClick={chooseMenu}>{MainHeaderContent[language].DesktopMenu[1]}</NavLink>
                            </li>
                            <li>
                                <NavLink to="/directory" onClick={chooseMenu}>{MainHeaderContent[language].DesktopMenu[2]}</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="language" role="radiogroup" aria-labelledby="language-switcher">
                    <div className="language__container--left language__container--en">
                        <input className="language__control" type="radio" id="language1" name="language-switch" value="en" onChange={(e)=>setLanguage(e.target.value)} checked={language === "en"}/>
                            <label className="language__label" htmlFor="language1">
                                EN
                            </label>
                    </div>
                    <div className="language__container--right language__container--fr">
                        <input className="language__control" type="radio" id="language2" name="language-switch" value="es" onChange={(e)=>setLanguage(e.target.value)} checked={language === "es"}/>
                            <label className="language__label" htmlFor="language2">
                                ES
                            </label>
                    </div>
                </div>
            </nav>
            <div className="navigation-menu-container" style={isMenuExpanded ? { display: "block" } : { display: "none" }} onClick={() => { setIsMenuExpanded(!isMenuExpanded) }}>
                <div className="navigation-menu" >
                    <ul>
                        <li>
                            <NavLink to="/conversation" onClick={chooseMenu}>{MainHeaderContent[language].PhoneMenu[0]}</NavLink>
                        </li>
                        <li>
                            <NavLink to="/category" onClick={chooseMenu}>{MainHeaderContent[language].PhoneMenu[1]}</NavLink>
                        </li>
                        <li>
                            <NavLink to="/directory" onClick={chooseMenu}>{MainHeaderContent[language].PhoneMenu[2]}</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}