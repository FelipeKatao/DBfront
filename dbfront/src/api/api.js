import axios from "axios"

const api = axios.create({
    baseURL: "https://dbstoner.herokuapp.com/users"
})

export default api