import { Avatar, Box, CardContent } from "@mui/material"
import logo from "../assets/GitHub-White.svg"

export const CardLogo = () => {
  return (
    <Box>
      <CardContent
        sx={{ minHeight: "250px", marginTop: "15px", bgcolor: "#13191c" }}
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
            src={logo}
            sx={{ height: "20%", width: "40%", marginBottom: "10px", color: "white" }}
          />
        </Box>
      </CardContent>
    </Box>
  )
}
