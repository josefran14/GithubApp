import { Box, TextField } from "@mui/material";
import { useState } from "react";

export const SearchBar = ({ getUsers }) => {

  const [searchUser, setSearchUser] = useState("");

  const handleChange = (event) => {
    setSearchUser(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    getUsers(searchUser);
    setSearchUser("");
  };

  return (
    <form onSubmit={onSubmit}>
      <Box sx={{ display: "flex", justifyContent: "center", marginTop: "30px" }}>
        <TextField
          sx={{ width: "50%", background: "#1f2a48", borderRadius: "20px" }}
          onChange={handleChange}
          type="text"
          label="Github Username"
          placeholder="Search Github Username"
          value={searchUser}
          InputProps={{
            sx: {
                "& input": {
                    color: 'white'
                }
            }
        }}
        InputLabelProps={{
          sx: {
            color: "white"
          }
        }}
        />
      </Box>
    </form>
  );
};
