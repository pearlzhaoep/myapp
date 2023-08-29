import './MainHeader.css'
import { ReactComponent as MenuListIcon } from './menu-list-icon.svg'
import { ReactComponent as MenuCloseIcon } from './menu-list-close.svg'
import { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { MenuClose } from '../Provider';

export default function MainHeader() {
    const [isMenuExpanded, setIsMenuExpanded] = useState(false);
    const { setIsTitlePage } = useContext(MenuClose)

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
                                <NavLink to="/conversation" onClick={chooseMenu}>Conversations</NavLink>
                            </li>
                            <li>
                                <NavLink to="/category" onClick={chooseMenu}>Categories</NavLink>
                            </li>
                            <li>
                                <NavLink to="/directory" onClick={chooseMenu}>Directory</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="language" role="radiogroup" aria-labelledby="language-switcher">
                    <div class="language__container--left language__container--en">
                        <input class="language__control" type="radio" id="language1" name="language-switch" />
                            <label class="language__label" for="language1">
                                EN
                            </label>
                    </div>
                    <div class="language__container--right language__container--fr">
                        <input class="language__control" type="radio" id="language2" name="language-switch" />
                            <label class="language__label" for="language2">
                                ES
                            </label>
                    </div>
                </div>
            </nav>
            <div className="navigation-menu-container" style={isMenuExpanded ? { display: "block" } : { display: "none" }} onClick={() => { setIsMenuExpanded(!isMenuExpanded) }}>
                <div className="navigation-menu" >
                    <ul>
                        <li>
                            <NavLink to="/conversation" onClick={chooseMenu}>Learn by Conversations</NavLink>
                        </li>
                        <li>
                            <NavLink to="/category" onClick={chooseMenu}>Expressions by Categories</NavLink>
                        </li>
                        <li>
                            <NavLink to="/directory" onClick={chooseMenu}>Vocabulary Index</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}