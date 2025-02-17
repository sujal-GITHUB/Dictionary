import React, { useState } from 'react'

const Main = () => {
    const [search, setSearch] = useState("");
    const [data, setData] = useState()

    const myFun = async () =>{
        try{
        const get = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${search}`);
        const jsonData = await get.json()
        console.log(jsonData[0].sourceUrls[0]);
        setData(jsonData)
        }catch(err){
            alert(err)
        }
         
    }
    
    const handleInput = (event) =>{
        setSearch(event.target.value)
    }


  return (

   <div className='app'>
   <h1>DICTIONARY</h1>
   <img src='src\—Pngtree—open book vector icon_8091301.png' width={50}/>
      <div className='container'>
      <div className='searchBar'>
      <input id='myInput' type='text' placeholder='Search Word' onChange={handleInput}/>
      <button type='submit' onClick={myFun} className='searchb'>Search</button>
    </div>
    <div className='datas'>
    {data ? 
        <div className='datas' >
        <h2>Word : {data[0].word}</h2>
        <p>{data[0].meanings[0].partOfSpeech}</p>
        <p><h3>Defination :</h3> {data[0].meanings[0].definitions[0].definition} </p>
        <p><h3>Synonyms :</h3> {data[0].meanings[0].synonyms}</p>
        <p><h3>Example :</h3> {data[0].meanings[0].definitions[0].example}</p>
        <a href={data[0].sourceUrls[0]}>Read More</a>
        </div>
       
        :"" }
     
    </div>
      </div>
   </div>
  )
}

export default Main