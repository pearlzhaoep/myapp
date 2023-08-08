import { useState } from "react";
import {words} from "../../db"
import DictionaryEntry from "./DictionaryEntry";
import DictionaryCard from "./DictionaryCard";

export default function Dictionary() {
    const [isCard, setIscard] = useState(false)
    const [currentWord, setCurrentWord] = useState()

    let sortedWords = words.toSorted(function (a, b) {
        return a.word.localeCompare(b.word);
    })
    let dict = sortedWords.reduce((a, c) => {
        let k = c.word[0].toLocaleUpperCase()
        if (a[k]) a[k].push([c.word, c.id])
        else a[k] = [[c.word, c.id]]
        return a
    }, {})
    Object.keys(dict).map(key => {
        return dict[key].sort(function (a, b) {
            return a[0].localeCompare(b[0]);
        })
    })

const toggleCard = () => {
    setIscard(!isCard)
}

    const handleClick = (id) => () => {
        let currentId = id
        setCurrentWord(words.find(word => word.id === currentId))
        toggleCard()
    }

    return (
        <div>
            {
                Object.keys(dict).map(inital => {
                    return (
                        <div>
                            <div className="entrys">
                                <h1 className="entry-index">{inital}</h1>
                                {
                                    dict[inital].map(word => {
                                        return <DictionaryEntry id={word[1]} word={word[0]} handleClick={handleClick(word[1])} />})
                                }
                            </div>
                        </div>
                    )
                })
            }
            <div className="entry-card" style={isCard ? { display: "block" } : { display: "none" }}>
                <div id="dimScreen"><DictionaryCard word={currentWord} handleClick={toggleCard} /></div>                
            </div>
        </div>
    )
}