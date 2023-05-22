import axios from "axios"

export const getAllUsers = async(searchUser) => {

   if(searchUser !== undefined){
      const url = `https://api.github.com/users/${searchUser}`
      const {data} = await axios.get(url)
       
      return data
   }else{
      return 
   }
   
}
