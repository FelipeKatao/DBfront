import React from 'react'
import {CriarFuncionario} from '../api/api.js'

function getFields(){
    CriarFuncionario(document.getElementById("idAdd").value,document.getElementById("nome").value,document.getElementById("idade").value,document.getElementById("cargo").value)
    console.log(window.location.href)
}

function Addfield(){
    return(
    <div className="addField">
        <form id="addForm" action="https://dbstoner.herokuapp.com/users/add?nome=Raphaela&amp;idade=21&amp;cargo=Quimica%20Chefe" method="post">
            <label>ID &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </label>
            <input id="idAdd"></input><br/>
            <label>Nome &nbsp;&nbsp;</label>
            <input id="nome"></input><br/>
            <label>Idade &nbsp;&nbsp;&nbsp;</label>
            <input id="idade"></input><br/>
            <label>Cargo &nbsp;&nbsp;</label>
            <input id="cargo"></input><br/>
            <button id="btAdd">Adicionar Funcionario</button> 
        </form>
    </div>
    )
}

export default Addfield