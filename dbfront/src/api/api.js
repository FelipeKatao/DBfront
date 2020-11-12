import axios from "axios"

const api = axios.create({
    baseURL: "https://dbstoner.herokuapp.com/users"
})
async function CriarFuncionario(href){
    let str = href.replace("https://dbstonerfront.netlify.app/adicionar",'')
    let response = await axios.post("https://dbstoner.herokuapp.com/users/add"+str)
    console.log(response["data"])

}

export {api,CriarFuncionario}