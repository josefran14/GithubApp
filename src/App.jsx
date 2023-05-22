import { Typography } from "@mui/material"
import { useState, useEffect } from "react"
import { CardLogo } from "./components/CardLogo"
import { CardUser } from "./components/CardUser"
import { SearchBar } from "./components/SearchBar"
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
    <>
    <Typography variant="h4" style={{display: "flex", justifyContent: "center"}}>GithubApp</Typography>
    <SearchBar getUsers={getUsers}/>
     {
        users.map((user) =>(
            user !== undefined
            ?
            <CardUser key={user.id} user={user}/>
            :
            <CardLogo key={Date.now()}/>
        ))
    }
    </>
  )
}
