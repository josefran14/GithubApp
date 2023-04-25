import { useState, useEffect } from "react"
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
    <h1 style={{display: "flex", justifyContent: "center"}}>GithubApp</h1>
    <SearchBar getUsers={getUsers}/>
    {
      users.map((user) =>(
        <CardUser key={user.id} user={user}/>
      ))
    }
    </>
  )
}
