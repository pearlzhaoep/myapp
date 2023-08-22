export default function FrenchLine({line, wordList, handleClick}) {
    const breakdownLine = line.split(' ')

    return(
        <div>
            <p className="line-height-150">
            {
                breakdownLine.map((word, index) => {
                    let matchedIndex = wordList.findIndex(element => element.order === index)
                    if(matchedIndex !==-1) return <><span className="frenchWord withIndex" onClick={() => handleClick(wordList[matchedIndex].wordId)}>{word}</span><span> </span></>
                    else return <span className="frenchWord">{word} </span>
                })
            }</p>
        </div>
    )
}