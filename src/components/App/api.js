/*export const fetchByCategoryId = async (id, language) => {
    const response = await fetch(`http://localhost/php-restAPI/index.php/category?categoryId=${id}&language=${language}`, {
        method: 'GET',
        headers: {'Content-Type': 'application/json',},
    })
    const parsed = await response.json()
    return parsed
}

export  const getAllConversationCover = async () => {
    const response = await fetch(`http://localhost/php-restAPI/index.php/conversation`, {
        method: 'GET',
        headers: {'Content-Type': 'application/json',},
    })
    const parsed = await response.json()
    return parsed
}

export const fetchByConversationId = async (id, language) => {
    const response = await fetch(`http://localhost/php-restAPI/index.php/conversation?conversationId=${id}&language=${language}`, {
        method: 'GET',
        headers: {'Content-Type': 'application/json',},
    })
    const parsed = await response.json()
    return parsed
}

export const getAllDictionaryWord = async () => {
    const response = await fetch(`http://localhost/php-restAPI/index.php/dictionary`, {
        method: 'GET',
        headers: {'Content-Type': 'application/json',},
    })
    const parsed = await response.json()
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
    return tempDict
}*/

export const fetchWordById = async (id, language) => {
    const response = await fetch(`http://localhost/php-restAPI/index.php/dictionary?wordId=${id}&language=${language}`, {
        method: 'GET',
        headers: {'Content-Type': 'application/json',},
    })
    const parsed = await response.json()

    return parsed
}

export const postContact = async (formData) => {
    const response = await fetch('https://quebec-quoi.ca/php-restAPI/index.php/contact', {
        method: 'POST',
        headers: {'Content-Type': 'application/json',},
        body: JSON.stringify(formData)
    })
    return response.ok
}