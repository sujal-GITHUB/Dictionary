import React, { useState } from 'react'

const [search, setSearch] = useState()
const [data, setData] = useState()

const handleInput = (event) =>{
    console.log(event.target.value);
    setSearch(event.target.value);
}

const myFun = async() =>{
    const get = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${search}`);
    const jsonData = await get.json();
    console.log(get);
    setData(jsonData[0])
}

function Search() {
    return (
        <div className='App'>
        <h1>Dictionary</h1>
        <div> className='container'
            <div className='searchBar'>
                <input type='text' placeholder='Search Word' onChange={handleInput}/>
                <button onClick={myFun}>Search</button>
            </div>
            <div className='datas'>{
                data ? 
                <div className='datas'>
                    <h2>Word : {data.word}</h2>
                    <p> Part of speech : {data.meanings[0].partOfSpeech}</p>
                    <p> Definition : {data.meanings[0].definitions[0].definition}</p>
                    <p> Synonyms : {data.meanings[0].synonyms[0]}</p>
                    <p> Example : {data.meanings[0].definition[0].example}</p>
                    <button onClick={()=>{window.open(data.sourceUrls[0], '_blank')}}>read more ...</button>
                </div> : ''
            }</div>
        </div> 
        </div> 
    )
}

export default Search
