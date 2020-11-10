import React, { useState } from 'react'
import CardComp from "./CardComp.js"
import api from "../api/api.js"
import { useEffect } from 'react'

function TableComp(){

    const [dataApi,setDataApi] = useState()

    useEffect( async() =>{
        const response = await api.get('')
        console.log(response.data)
        console.log(response.data[1][1])
        setDataApi(response.data)
    },[]) 

    return(
        <div className="ContainerTable">
            {
                dataApi ? dataApi.map(item =>{
                    return <CardComp key={item[0]} nome={item[1]} idade={item[2]} cargo={item[3]}></CardComp>
                }):"loading"
            }
        </div>
    )
}

//<CardComp nome="Felipe" idade="26" cargo="Analista de sistema"></CardComp>
//<CardComp nome="Felipe" idade="26" cargo="Analista de sistema"></CardComp>
//<CardComp nome="Felipe" idade="26" cargo="Analista de sistema"></CardComp>

export default TableComp