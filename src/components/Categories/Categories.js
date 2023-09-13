import CategoryCard from "./CategoryCard"
import './Categories.css';
import { useContext, useEffect, useState } from "react";
import VocabularyCard from "../VocabularyCard/VocabularyCard";
import { LanguageSwitch, MenuClose } from "../Provider";
import { CategoriesModel } from "./CategoriesModel";


export default function Categories() {
    const { isTitlePage, setIsTitlePage }  = useContext(MenuClose);
    const { language } = useContext(LanguageSwitch);
    const [ wordList, setWordList ] = useState(undefined);

    useEffect(()=>{
        if(!isTitlePage){
            fetchByCategoryId(wordList[0].category)
        }
    }, [language])

    const fetchByCategoryId = (id) => {
        fetch(`http://localhost/php-restAPI/index.php/category?categoryId=${id}&language=${language}`, {
            method: 'GET',
            headers: {'Content-Type': 'application/json',},
        })
        .then((response) =>  response.json())
        .then((parsed) => {
            setWordList(parsed)
            }
        ).catch(console.error)
    }

    const handleClick =(id) => (e) => {
        fetchByCategoryId(id)            
        toggleMenu()
    }

    const toggleMenu = () => {
        setIsTitlePage(!isTitlePage)
    }

    return (
        <div>
            <div className="categoryMenu" style={isTitlePage? {display: "block"} : {display: "none"}}>
                <h1 className="menuItemTitle">Expressions By Categories</h1>
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
               isTitlePage? "" :<VocabularyCard wordList={wordList} handleClick={toggleMenu} language={language} />
            }
            </div>
        </div>
    )
}