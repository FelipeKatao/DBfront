import React, { useEffect, useState} from 'react'
import ReactDOM from 'react-dom';
import {CriarFuncionario} from '../api/api.js'

function Addfield(){

    const [labels,setLabel] = useState()

    useEffect(() =>{
        CriarFuncionario(window.location.href)
        setLabel(0,"teste",0,"teste")
        console.log('s')
        console.log(labels)
    })

    return(
    <div className="addField">
        <form id="addForm">
            <label>ID &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </label>
            <input id="idAdd" name="id"></input><br/>
            <label>Nome &nbsp;&nbsp;</label>
            <input id="nome" name="nome"></input><br/>
            <label>Idade &nbsp;&nbsp;&nbsp;</label>
            <input id="idade" name="idade"></input><br/>
            <label>Cargo &nbsp;&nbsp;</label>
            <input id="cargo" name="cargo"></input><br/>
            <button id="btAdd">Adicionar Funcionario</button> 
        </form>
        <div id="resultado">

        </div>
    </div>
    )
}

export default Addfield