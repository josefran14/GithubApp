import { Box, TextField } from "@mui/material"
import { useState } from "react"

export const SearchBar = ({getUsers}) => {

    const [searchUser, setSearchUser] = useState("")

    const handleChange = (event) =>{
        setSearchUser(event.target.value)
    }

    const onSubmit = (event) =>{
        event.preventDefault()
        getUsers(searchUser)
        setSearchUser("")
    }

  return (
    <form onSubmit={onSubmit}>
      <Box sx={{display: "flex", justifyContent: "center"}}>
      <TextField sx={{width: "50%" }} onChange={handleChange} type="text" placeholder="Search User" value={searchUser}/>
      </Box>
    </form>
  )
}
