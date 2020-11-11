import React from 'react'

function CardComp(props){
    return(
        <div className="cardDiv">
            <div><img src="https://img.icons8.com/wired/64/000000/user-folder.png" alt="icon"/></div>
            <ul>
            <li>Nome: {props.nome}</li>
            <li>Idade: {props.idade}</li>
            <li>Cargo: {props.cargo}</li>
            </ul>
        </div>
    )
}

export default CardComp