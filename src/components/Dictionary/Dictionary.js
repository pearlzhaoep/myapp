import { useMemo, useState } from "react";
import './Dictionary.css'
import DictionaryEntry from "./DictionaryEntry";
import DictionaryCard from "./DictionaryCard";
import { useGetDictionaryListQuery } from "../Api/apiSlice";

export default function Dictionary() {
    const [isCard, setIscard] = useState(false)
    const [currentId, setCurrentId] = useState()

    const toggleCard = () => {
    setIscard(!isCard)
    }

    const handleClick = (id) => () => {
        setCurrentId(id)
        toggleCard()
    }

    const {
        data: unSortedDict,
        isLoading,
        isSuccess
    } = useGetDictionaryListQuery()

    const dict = useMemo(()=>{
        let tempDict = []
        console.log(unSortedDict)
        if(unSortedDict){
            let sortedWords = unSortedDict.toSorted(function (a, b) {
            return a.word.localeCompare(b.word);
        })
        tempDict = sortedWords.reduce((a, c) => {
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
        }
        return tempDict
    }, [unSortedDict])

    return (
        isLoading ? <></> : isSuccess ?
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
            <div className="entry-card">
               { isCard ? <div id="dimScreen"><DictionaryCard id={currentId} handleClick={toggleCard} isCard={isCard}/></div> : ""}               
            </div>
        </div> : <></>
    )
}