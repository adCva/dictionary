import { createSlice } from '@reduxjs/toolkit';

export const dataSlice = createSlice({
    name: "word Data",
    initialState: {
        word: [{
            word: "dictionary",
            sourceUrls: ["https://en.wiktionary.org/wiki/dictionary"],
            phonetic: "/ˈdɪkʃəˌnɛɹi/",
            phonetics: [{
                audio: "https://api.dictionaryapi.dev/media/pronunciations/en/dictionary-uk.mp3"
            }],
            meanings: [
                {
                    partOfSpeech: "noun",
                    synonyms: ["wordbook"],
                    definitions: [
                        {
                            definition: "A reference work with a list of words from one or more languages, normally ordered alphabetically, explaining each word's meaning, and sometimes containing information on its etymology, pronunciation, usage, translations, and other data."
                        },
                        {
                            definition: "(preceded by the) A synchronic dictionary of a standardised language held to only contain words that are properly part of the language."
                        },
                        {
                            definition: "(by extension) Any work that has a list of material organized alphabetically; e.g., biographical dictionary, encyclopedic dictionary."
                        },
                        {
                            definition: "An associative array, a data structure where each value is referenced by a particular key, analogous to words and definitions in a physical dictionary."
                        }
                    ]
                },
                {
                    partOfSpeech: "verb",
                    synonyms: [],
                    definitions: [
                        {
                            definition: "To look up in a dictionary."
                        },
                        {
                            definition: "To add to a dictionary."
                        },
                        {
                            definition: "To compile a dictionary."
                        }
                    ]
                }
            ]
        }]
    },

    reducers: {
        newWord: (state, action) => {
            state.word = action.payload.def;
        }
    }
})

export const { newWord } = dataSlice.actions;

export default dataSlice.reducer;