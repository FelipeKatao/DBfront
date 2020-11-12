import axios from "axios"

const api = axios.create({
    baseURL: "https://dbstoner.herokuapp.com/users"
})
async function CriarFuncionario(id,nome,idade,cargo){
    await axios.post("https://dbstoner.herokuapp.com/users/add?id="+id+"?nome="+nome+"?idade="+idade+"?cargo="+cargo)

}

export {api,CriarFuncionario}