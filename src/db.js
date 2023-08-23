const words = [
    {
        id: 1,
        word: "Câlisse / Câlice",
        category: 1,
        wordAudio:'/media/vocab-calisse.wav',
        meme: 'https://media.makeameme.org/created/tu-nest-pas-c86e6482db.jpg',
        explaination: {
            fr: "Il s'utilise pour exprimer une émotion forte, par exemple l'étonnement ou la colère. C'est une déformation du calice d'église dans la religion chrétienne.",
            en: "It is used to express a strong emotion, for example astonishment or anger. It is a deformation of the chalice of the church in the Christian religion.",
            es: "Se usa para expresar una emoción fuerte, por ejemplo asombro o ira. Es una deformación del cáliz de la iglesia en la religión cristiana."
        },
        examples: [
            {
                audio: "",
                fr: "J'm'en câlice!",
                en: "I don't give a damn!",
                es: "¡Estoy enamorado!"
            },
            {
                audio: "",
                fr: "Tu me niaises-tu, câlice?",
                en: "Are you fuckig kidding me?",
                es: "¿Estás bromeando?"
            }
        ]
    },
    {
        id: 2,
        word: "Crisse",
        category: 1,
        wordAudio:'/media/vocab-calisse.wav',
        meme: 'https://i.redd.it/comment-tu-vas-tu-mon-ti-crisse-v0-2aujzaq5htka1.jpg?s=81d6585318b41f6d342d963050a06a3f28fb504b',
        explaination: {
            fr: "Dérivé du Christ (Jésus). Il n'a pas forcément de sens très précis, mais permet de ponctuer des phrases, et d'exprimer un agacement ou de la colère. Comme beaucoup de sacre québécois, il peut se conjuguer ou s'utilise comme nom.",
            en: "Derived from Christ (Jesus). It doesn't necessarily have a very precise meaning, but allows you to punctuate sentences, and to express annoyance or anger. Like many Quebec coronations, it can be combined or used as a noun.",
            es: "Derivado de Cristo (Jesús). No necesariamente tiene un significado muy preciso, pero le permite puntuar oraciones y expresar molestia o enojo. Como muchas coronaciones de Quebec, se puede combinar o usar como sustantivo."
        },
        examples: [
            {
                audio: "",
                fr: "Crisse, il est laide.",
                en: "Christ, he's ugly.",
                es: "Dios, es feo."
            },
            {
                audio: "",
                fr: "Ferme ta crisse de gueule!",
                en: "Shut the fuck up!",
                es: "Cállate la boca!"
            }
        ]
    },
    {
        id: 3,
        word: "A",
        category: 2,
        wordAudio:'/media/vocab-calisse.wav',
        meme:'',
        explaination: {
            fr: "à l'oral, le pronom \"elle\" ou \"elle a\" peut être contracté pour se prononcer \"a\".",
            en: "orally, the pronoun \"elle\" ou \"elle a\" can be contracted to pronounce \"a\".",
            es: "oralmente, el pronombre \"elle\" ou \"elle a\" se puede contraer para pronunciar \"a\"."
        },
        examples: [
            {
                audio: "",
                fr: "A travaille pas.",
                en: "She doesn't work.",
                es: "Ella no trabaja."
            },
            {
                audio: "",
                fr: "A' pas vu l'film.",
                en: "She didn't see the movie.",
                es: "Ella no vio la película."
            }
        ]
    },
    {
        id: 4,
        word: "T'sais/Tsé",
        category: 2,
        wordAudio:'/media/vocab-calisse.wav',
        meme:'',
        explaination: {
            fr: "C'est la contraction de \"tu sais\", il n'apporte pas particulièrement de sens, mais permet souvent de ponctuer une phrase.",
            en: "It is the contraction of \"you know\", it does not particularly make sense, but often allows you to punctuate a sentence.",
            es: "Es la contracción de \"usted sabe\", no tiene mucho sentido, pero a menudo le permite puntuar una oración."
        },
        examples: [
            {
                audio: "",
                fr: "C'est pas mon problème, tsé.",
                en: "It's not my problem, you know.",
                es: "No es mi problema, ya sabes."
            }
        ]
    },
    {
        id: 5,
        word: "Tanner",
        category: 3,
        meme:'',
        wordAudio:'/media/vocab-calisse.wav',
        explaination: {
            fr: "Synonyme de \"fatiguer\" ou \"agacer\". ",
            en: "Synonym of \"tiring\" or \"annoying\".",
            es: "Sinónimo de \"cansador\" o \"molesto\"."
        },
        examples: [
            {
                audio: "",
                fr: "Chu tanné, là.",
                en: "I'm tired of it.",
                es: "Estoy cansado."
            },
            {
                audio: "",
                fr: "C'est tannant.",
                en: "It's annoying.",
                es: "Es molesto."
            }
        ]
    },
    {
        id: 6,
        word: "Tu",
        category: 3,
        wordAudio:'/media/vocab-calisse.wav',
        meme: 'https://memecreator.org/static/images/memes/5109292.jpg',
        explaination: {
            fr: "Parfois, le mot \"tu\" est utilisé pour signifier que l'on pose une question, il est donc signe d'interrogation. Il peut donc y avoir deux \"tu\" dans la même question.",
            en: "Sometimes the word \"tu\" is used to mean asking a question, so it is a question mark. So there can be two \"tu\" in the same question.",
            es: "A veces la palabra \"tu\" se usa para hacer una pregunta, por lo que es un signo de interrogación. Entonces puede haber dos \"tu\" en la misma pregunta."
        },
        examples: [
            {
                audio: "",
                fr: "On va tu chez ma mère?",
                en: "Do we go to my mom's place?",
                es: "¿Vamos a casa de mi mamá?"
            },
            {
                audio: "",
                fr: "T'es tu venu en char?",
                en: "Did you come by car?",
                es: "¿Viniste en coche?"
            }
        ]
    },
]

const conversations = [
    {
        id: 1,
        title: "Ostie de la pluie",
        cover:'/media/rain.svg',
        profile: ['/media/randomIcon.png', '/media/fleurdulys.svg'],
        fullAudio: '/media/sample-12s.wav',
        dialog: [
            {
            fr: "On va tu manger avec Maggie ce soir?",
            en: "Are we gonna have dinner with Maggie tonight?",
            es: "Vamos a cenar con Maggie esta noche?",
            audio: '/media/sample-12s.wav',
            link: [{order: 2, wordId: 6}]
            },
            {
                fr: "No. A m'a dit qu'a mal aux genoux. A cause de la pluie.",
                en: "No. She told me her knees hurt. Because of the rain.",
                es: "Vamos a cenar con Maggie esta noche?",
                audio: '/media/sample-12s.wav',
                link: [{order: 1, wordId: 3}, {order: 4, wordId: 3}]
            },
            {
                fr: "Crisse, chu tanné de cette ostie de pluie, là. C'est presque la fin de l'été, t'sais?",
                en: "Christ, I'm tired of the freaking rain. It's almost the end of the summer you know?",
                es: "Vamos a cenar con Maggie esta noche?",
                audio: '/media/sample-12s.wav',
                link: [{order: 0, wordId: 2}, {order: 2, wordId: 6}, {order: 15, wordId: 4}]
            },
        ] 
    }
]

export {words, conversations};