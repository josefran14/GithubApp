import { Avatar, Box, CardContent } from "@mui/material"
import logo from "../assets/GitHub-White.svg"

export const CardLogo = () => {
  return (
    <Box sx={{
      width: "100%",
      height: "80vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "start",
      marginTop: "30px",
    }}>
      <Box sx={{
          display: "flex",
          justifyContent: "center",
           alignItems: "center",
          bgcolor: "#1f2a48",
          width: "44%",
          height: "75%",
          borderRadius: "20px",
          padding: "50px",
        }}>
          <Avatar
              alt="logo"
              src={logo}
              sx={{ height: "100%", width: "100%" }}
            />
      </Box>
    </Box>
  )
}
