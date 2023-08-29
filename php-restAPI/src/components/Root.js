import { Outlet } from "react-router-dom";
import MainHeader from "./MainHeader/MainHeader";
import './App/App.css'
import { createContext, useState } from "react";
import { MenuClose } from "./Provider";

export default function Root() {
    const [ isTitlePage, setIsTitlePage ] = useState(true)

    return (
        <>                
        <MenuClose.Provider value={{isTitlePage, setIsTitlePage}} >
            <MainHeader />
            <main>
                <Outlet/>                
            </main>
        </MenuClose.Provider>
        </>
    )
}