import React from 'react'
import CardComp from "./CardComp.js"


function TableComp(){
    return(
        <div className="ContainerTable">
            <CardComp nome="Felipe" idade="26" cargo="Analista de sistema"></CardComp>
            <CardComp nome="Felipe" idade="26" cargo="Analista de sistema"></CardComp>
            <CardComp nome="Felipe" idade="26" cargo="Analista de sistema"></CardComp>
        </div>
    )
}

export default TableComp