import CategoryCard from "./CategoryCard"
import CategoryVocabularyCard from "./CategoryVocabularyCard/CategoryVocabularyCard"
import './Categories.css';
import { useContext, useState } from "react";
import { LanguageSwitch, MenuClose } from "../Provider";
import { CategoriesModel } from "../../models/CategoriesModel";
import { MainHeaderContent } from "../../models/MainHeaderModel";


export default function Categories() {
    const { isTitlePage, setIsTitlePage }  = useContext(MenuClose);
    const [ currrentCategoryId, setCurrentCategoryId ] = useState(1)
    const { language } = useContext(LanguageSwitch);

    const handleClick =(id) => (e) => { 
        setCurrentCategoryId(id)        
        toggleMenu()
    }

    const toggleMenu = () => {
        setIsTitlePage(!isTitlePage)
    }

    return (
        <div>
            <div className="categoryMenu" style={isTitlePage? {display: "block"} : {display: "none"}}>
                <h1 className="menuItemTitle">{MainHeaderContent[language].PhoneMenu[1]}</h1>
                <div className="categoryCardContainer">
                {
                    CategoriesModel.map(card => {
                        return <CategoryCard id={card.id} card={card} handleClick={handleClick(card.id)} />
                    })
                }
                </div>
            </div>
            <div>
            {
               isTitlePage ? <></> :<CategoryVocabularyCard id={currrentCategoryId} handleClick={toggleMenu} language={language} />
            }
            </div>
        </div>
    )
}