

export default function FrenchLine({line, wordList, showCard}) {
    const breakdownLine = line.split(' ')

    return(
        <div>
            <p className="line-height-150">
            {
                
                breakdownLine.map((word, index) => {
                    let matchedIndex = wordList.findIndex(element => Number(element.index) === index)
                    if(matchedIndex !==-1) return <><span className="frenchWord withIndex" onClick={() => showCard(wordList[matchedIndex].wordId)}>{word.replace('/', ' ')}</span><span> </span></>
                    else return <span className="frenchWord">{word} </span>
                })
            }</p>
        </div>
    )
}