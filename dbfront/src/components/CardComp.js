import React from 'react'

function CardComp(props){
    return(
        <div className="cardDiv">
            <ul>
            <li>Nome: {props.nome}</li>
            <li>Idade: {props.idade}</li>
            <li>Cargo: {props.cargo}</li>
            </ul>
        </div>
    )
}

export default CardComp