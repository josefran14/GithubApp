import {
  Avatar,
  Box,
  Button,
  CardActions,
  CardContent,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { useEffect } from "react";

export const CardUser = ({ user }) => {

  const {
    avatar_url,
    login,
    followers,
    following,
    public_repos,
    created_at,
  } = user;

  return (
    <Box>
      <CardContent
        sx={{ border: "2px solid blue", minHeight: "250px", marginTop: "15px", bgcolor: "#13191c" }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar
            alt={login}
            src={avatar_url}
            sx={{ height: "5%", width: "20%", marginBottom: "10px" }}
          />
          <Typography variant="h5" component="div" sx={{color: "white"}}>
            Usuario: {"  "}
            {login}
          </Typography>
          <Typography
            sx={{ fontSize: 14, marginTop: "4px", color: "white" }}
            gutterBottom
          >
            creation date: {"  "}
            {created_at}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", marginTop: "15px", justifyContent: "center", width: "100%"}}>
          <Stack
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "30%",
              height: "100%",
              color: "white"
            }}
          >
            <Typography>Followers</Typography>
            {followers}
          </Stack>
          <Stack
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "30%",
              height: "100%",
              color: "white",
            }}
          >
            <Typography>Following</Typography>
            {following}
          </Stack>
          <Stack
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "30%",
              height: "100%",
              color: "white"
            }}
          >
            <Typography>Repos</Typography>
            {public_repos}
          </Stack>
        </Box>
      </CardContent>
    </Box>
  );
};
