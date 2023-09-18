import { Box } from "@mui/material"
import { useState, useEffect } from "react"
import { CardLogo } from "./components/CardLogo"
import { SearchBar } from "./components/SearchBar"
import { UserCard } from "./components/UserCard"
import { getAllUsers } from "./helpers/getAllUsers"

export const App = () => {

    const [users, setUsers] = useState([])
    
    const getUsers = async(searchUser) =>{
      const allUsers = await getAllUsers(searchUser)
      setUsers([allUsers])
    }
    
    useEffect(() => {
      getUsers()
    }, [])
    
  return (
    <Box sx={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
    <SearchBar getUsers={getUsers}/>
     {
        users.map((user) =>(
            user !== undefined
            ?
            <UserCard key={Date.now()} user={user}/>
            :
            <CardLogo key={Date.now()}/>
        ))
    }
    </Box>
  )
}
