import { useContext, useEffect, useState } from "react";
import './Dictionary.css'
import DictionaryEntry from "./DictionaryEntry";
import DictionaryCard from "./DictionaryCard";
import { LanguageSwitch } from "../Provider";

export default function Dictionary() {
    const [isCard, setIscard] = useState(false)
    const [currentWord, setCurrentWord] = useState()
    const [ dict, setDict ] = useState({})
    const {language} = useContext(LanguageSwitch)

    const getAllWordOnly = () => {
        fetch(`http://localhost/php-restAPI/index.php/dictionary`, {
            method: 'GET',
            headers: {'Content-Type': 'application/json',},
        })
        .then((response) =>  response.json())
        .then((parsed) => {
            let sortedWords = parsed.toSorted(function (a, b) {
                return a.word.localeCompare(b.word);
            })
            let tempDict = sortedWords.reduce((a, c) => {
                let k = c.word[0].toLocaleUpperCase()
                if (a[k]) a[k].push([c.word, c.id])
                else a[k] = [[c.word, c.id]]
                return a
            }, {})
            Object.keys(tempDict).map(key => {
                return tempDict[key].sort(function (a, b) {
                    return a[0].localeCompare(b[0]);
                })
            })
            setDict(tempDict)
            }
        ).catch(console.error)
    }

    const getWordById = (id) => {
        fetch(`http://localhost/php-restAPI/index.php/dictionary?wordId=${id}&language=${language}`, {
            method: 'GET',
            headers: {'Content-Type': 'application/json',},
        })
        .then((response) =>  response.json())
        .then((parsed) => {
            setCurrentWord(parsed)
            }
        ).catch(console.error)
    }

    const toggleCard = () => {
    setIscard(!isCard)
    }

    const handleClick = (id) => () => {
        getWordById(id)
        toggleCard()
    }

    useEffect(getAllWordOnly, [])

    return (
        <div>
            {
                Object.keys(dict).map(inital => {
                    return (
                        <div>
                            <div className="entrys">
                                <h1 className="entry-index">{inital}</h1>
                                <div className="entries-container">
                                {
                                    dict[inital].map(word => {
                                        return <DictionaryEntry id={word[1]} word={word[0]} handleClick={handleClick(word[1])} />})
                                }
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            <div className="entry-card" style={isCard ? { display: "block" } : { display: "none" }}>
                <div id="dimScreen"><DictionaryCard word={currentWord} handleClick={toggleCard} isCard={isCard}/></div>                
            </div>
        </div>
    )
}