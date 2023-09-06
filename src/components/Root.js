import { Outlet } from "react-router-dom";
import MainHeader from "./MainHeader/MainHeader";
import './App/App.css'
import { useState } from "react";
import { LanguageSwitch, MenuClose } from "./Provider";

export default function Root() {
    const [ isTitlePage, setIsTitlePage ] = useState(true)
    const [ language, setLanguage ] = useState('en')

    return (
        <> 
        <LanguageSwitch.Provider value={{language, setLanguage}}>              
        <MenuClose.Provider value={{isTitlePage, setIsTitlePage}} >
            <MainHeader />
            <main>
                <Outlet/>                
            </main>
        </MenuClose.Provider>
        </LanguageSwitch.Provider> 
        </>
    )
}