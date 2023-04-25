import axios from "axios"

export const getAllUsers = async(searchUser = "OliverPradaLara") => {
   
   const url = `https://api.github.com/users/${searchUser}`
   const {data} = await axios.get(url)
    
   return data
}
