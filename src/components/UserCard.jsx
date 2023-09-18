import { Avatar, Box, Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkIcon from "@mui/icons-material/Link";
import ApartmentIcon from "@mui/icons-material/Apartment";

export const UserCard = ({ user }) => {
  const {
    avatar_url,
    login,
    name,
    bio,
    followers,
    following,
    public_repos,
    created_at,
    location,
    blog,
    twitter_username,
    company,
  } = user;

  return (
    <Box
      sx={{
        width: "100%",
        height: "80vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "start",
        marginTop: "30px",
      }}
    >
      {/* Card */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          bgcolor: "#1f2a48",
          width: "44%",
          height: "75%",
          borderRadius: "20px",
          padding: "50px",
        }}
      >
        {/* User */}
        <Box sx={{ width: "100%", height: "40%", display: "flex" }}>
          {/* Image */}
          <Box sx={{ width: "20%", height: "100%" }}>
            <Avatar
              alt={login}
              src={avatar_url}
              sx={{ height: "70%", width: "80%" }}
            />
          </Box>
          {/* User Info */}
          <Box sx={{ width: "80%", height: "40%", display: "flex" }}>
            {/* Title, subtitle, bio */}
            <Box
              sx={{
                width: "50%",
                display: "flex",
                flexDirection: "column",
                gap: "8px",
              }}
            >
              <Typography
                variant="h5"
                sx={{ color: "white", marginTop: "6px", fontWeight: "bold" }}
              >
                {login}
              </Typography>
              <Typography sx={{ color: "#0962CA", fontWeight: "bold" }}>
                {name}
              </Typography>
              {bio !== null ? (
                <Typography sx={{ color: "white", marginTop: "20px" }}>
                  {bio}
                </Typography>
              ) : (
                <Typography sx={{ color: "#888f9e", marginTop: "20px" }}>
                  This profile has no bio
                </Typography>
              )}
            </Box>
            {/* Fecha */}
            <Box sx={{ width: "50%" }}>
              <Typography
                sx={{ color: "#888f9e", marginTop: "10px", fontWeight: "bold", marginLeft: "100px" }}
              >
                Joined {new Date(created_at).toLocaleDateString()}
              </Typography>
            </Box>
          </Box>
        </Box>
        {/* Repos, followers, following */}
        <Box
          sx={{
            width: "100%",
            height: "30%",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Box
            sx={{
              width: "80%",
              background: "#141c2f",
              display: "flex",
              borderRadius: "20px",
              justifyContent: "space-evenly",
              paddingLeft: "20px",
              marginTop: "38px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "30%",
                justifyContent: "center",
              }}
            >
              <Typography sx={{ color: "#888f9e" }}>Repos</Typography>
              <Typography
                sx={{ color: "white", fontWeight: "bold", fontSize: "25px" }}
              >
                {public_repos}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "30%",
                justifyContent: "center",
              }}
            >
              <Typography sx={{ color: "#888f9e" }}>Followers</Typography>
              <Typography
                sx={{ color: "white", fontWeight: "bold", fontSize: "25px" }}
              >
                {followers}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "30%",
                justifyContent: "center",
              }}
            >
              <Typography sx={{ color: "#888f9e" }}>Following</Typography>
              <Typography
                sx={{ color: "white", fontWeight: "bold", fontSize: "25px" }}
              >
                {following}
              </Typography>
            </Box>
          </Box>
        </Box>
        {/* Redes sociales */}
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "flex-end",
            marginTop: "20px",
          }}
        >
          <Box sx={{ width: "83%", display: "flex" }}>
            <Box sx={{ width: "50%" }}>
              <Box sx={{ display: "flex", gap: "10px", marginTop: "16px" }}>
                <LocationOnIcon sx={{ color: "white" }} />
                    {
                        location !== null
                            ?
                        <Typography sx={{ color: "white" }}>
                            {location}
                        </Typography>
                            :
                        <Typography sx={{ color: "#888f9e" }}>
                            Not Available
                        </Typography>
                    }
              </Box>
              <Box sx={{ display: "flex", gap: "10px", marginTop: "16px" }}>
                <LinkIcon sx={{ color: "white" }} />
                {
                    blog !== ""
                        ?
                    <Typography sx={{color: "white"}}>
                        {blog}
                    </Typography>
                        :
                    <Typography sx={{color: "#888f9e"}}>
                        Not Available
                    </Typography>
                }
              </Box>
            </Box>
            <Box sx={{ width: "50%" }}>
              <Box sx={{ display: "flex", gap: "10px", marginTop: "16px" }}>
                <TwitterIcon sx={{ color: "white" }} />
                  {
                    twitter_username !== null
                        ?
                    <Typography sx={{color: "white"}}>
                        {twitter_username}
                    </Typography>
                        :
                    <Typography sx={{color: "#888f9e"}}>
                        Not Available
                    </Typography>
                  }
              </Box>
              <Box sx={{ display: "flex", gap: "10px", marginTop: "16px" }}>
                <ApartmentIcon sx={{ color: "white" }} />
                {
                    company !== null
                        ?
                    <Typography sx={{color: "white"}}>
                        {company}
                    </Typography>
                        :
                    <Typography sx={{color: "#888f9e"}}>
                        Not Available
                    </Typography>
                }
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
