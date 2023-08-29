import CategoryCard from "./CategoryCard"
import './Categories.css';
import { useContext, useState } from "react";
import {words} from "../../db";
import VocabularyCard from "../VocabularyCard/VocabularyCard";
import { MenuClose } from "../Provider";

const categories = [
    {
        id: 1,
        title: "Swears",
        imageSource: "/media/randomIcon.png",
        content: "Swear words are an important part of language culture. But make sure to use them carefully in public!"
    },
    {
        id: 2,
        title: "Short Form",
        imageSource: "/media/randomIcon.png",
        content: "Do Quebecois speak fast? Yes they do. Here are some most common grammer contractions used in day to day converstation!"
    },
    {
        id: 3,
        title: "Other Expressions",
        imageSource: "/media/randomIcon.png",
        content: "These words and expressions are not neccessarily unique to Quebec, but used a lot more frequently here."
    }
]

export default function Categories() {
    const { isTitlePage, setIsTitlePage }  = useContext(MenuClose);
    const [ wordIdList, setWordIdList ] = useState([1,2]);

    const fetchByCategoryId = async (id) => {
        console.log("test")
        let response = await fetch("http://localhost:3000/#/src/php-restAPI/index.php", {
            method: 'GET',
            headers: {'Content-Type': 'application/json',},
        })
        if(response.ok){
            let parsed = await response.json()
            console.log(parsed)
        }
        else alert("HTTP-Error" + response.status)
    }

    const handleClick =(id) => (e) => {
        toggleMenu()
        fetchByCategoryId(id)
    }

    const toggleMenu = () => {
        setIsTitlePage(!isTitlePage)
    }
    const getIdByCategory = (id) => {
        let list = []
        words.forEach(word => {
            if(word.category === id){
                list.push(word.id)
            }
        })
        setWordIdList(list)
    }

    return (
        <div>
            <div className="categoryMenu" style={isTitlePage? {display: "block"} : {display: "none"}}>
                <h1 className="menuItemTitle">Expressions By Categories</h1>
                <div className="categoryCardContainer">
                {
                    categories.map(card => {
                        return <CategoryCard id={card.id} card={card} handleClick={handleClick(card.id)} />
                    })
                }
                </div>
            </div>
            <div>
            {
               isTitlePage? "" :<VocabularyCard list={wordIdList} handleClick={toggleMenu} />
            }
            </div>
        </div>
    )
}