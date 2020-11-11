import React from 'react'
import {Link} from "react-router-dom"
import '../css/components.css'


function navComp(){
    return (
        <nav>
            <ul>
                <li><h3>Banco de dados de funcionarios</h3></li>
                <li><Link to='/funcionarios'>Listar</Link></li>
                <li>adicionar</li>
                <li>Remover</li>
                <li>Procurar</li>
            </ul>
        </nav>
    )
}

export default navComp