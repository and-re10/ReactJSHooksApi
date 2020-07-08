import React, { useState } from 'react'


export default function Serach () {

    const [texto, setTexto] = useState("")

    return (
        <>
            <div>
                <input type="text" name="" id="text"/>
                <input type="button" name="" id="" onClick={() => {             
                    setTexto(document.getElementById('text').value)     
                    document.getElementById('text').value = ''
                }}/>
                <h1>{texto}</h1>        
            </div>
        </>
    )           
}