import React from 'react';
// Icons.
import { FaPlayCircle } from "react-icons/fa";
// Redux.
import { useSelector, useDispatch } from 'react-redux';
import { newWord } from "../Redux/dataSlice";


function Resault() {
    const dispatch = useDispatch();
    const firsLoad = useSelector((state) => state.data.isFirstLoad);
    const wordData = useSelector((state) => state.data.word);
    const isThemeDark = useSelector((state) => state.theme.isDarkTheme);


    // Play word audio.
    const playWordAudio = () => {
        try {
            let audio = new Audio(wordData[0].phonetics[0].audio);
            audio.type = "audio/mp3";
            audio.play();
        } catch (err) {
            alert("This word does not come with an audio file.");
        }
    };


    // Call API on synonym click.
    const callAPIforSynonymClick = async (synonym) => {
        const call = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${synonym}`);
        const data = await call.json();
        dispatch(newWord({def: data}));
    };


    return (
        firsLoad
        ? 
            <div className='page-load-no-word'>
                Search for new word
            </div>
        :
        wordData[0] === undefined 
        ?
            <div className='page-error-no-word'>
                No such word exists
            </div>
        :
            <div className='resault-container'>
                <div className='intro-container'>
                    <div className='small-desc'>
                        <h1 className={isThemeDark ? "dark-header" : ""}>{wordData[0].word}</h1>
                        <p>{wordData[0].phonetic}</p>
                    </div>
                    <button onClick={playWordAudio} className="play-btn"><FaPlayCircle /></button>
                </div>
                {/* ================ Meaning/s, some words return the part of speech &/or meaning into two or more different objects, hence the need for the first map ================ */}
                {wordData.map((word, i) => {
                    return (
                        <div key={i} className='meanings-wrapper'>
                            {word.meanings.map((meaning, j) => {
                                return (
                                    <div key={j} className="meaning-container">
                                        <p className='partOfSpeech'>{meaning.partOfSpeech}</p>
                                        <p className='meaning'>Meaning</p>
                                        {meaning.definitions.map((def, k) => {
                                            return (
                                                <p key={k} className="definition">{def.definition}</p>
                                            )
                                        })}
                                        {meaning.synonyms.length !== 0 &&
                                            <div>
                                                <h4>Synonyms:</h4>
                                                {meaning.synonyms.map((synonim, l) => {
                                                    return (
                                                        <p key={l} onClick={() => callAPIforSynonymClick(synonim)}>{synonim}</p>
                                                    )
                                                })}
                                            </div>
                                        }
                                    </div>
                                )
                            })}
                        </div>
                    )
                })}
            </div>
    )
}

export default Resault;