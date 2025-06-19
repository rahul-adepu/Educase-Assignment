import React, { useEffect, useState } from "react";
import {
  Avatar,
  Box,
  Typography,
  Paper,
  Divider,
  IconButton,
} from "@mui/material";
import CameraAltIcon from "@mui/icons-material/CameraAlt";

const Profile = () => {
  const [user, setUser] = useState({ fullName: "", email: "" });

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user"));
    if (userData) {
      setUser({
        fullName: userData.fullName,
        email: userData.email,
      });
    }
  }, []);

  return (
    <Box minHeight="100vh" bgcolor="#F7F8F9" px={3} py={4}>
      <Box maxWidth={400} mx="auto">
        <Paper
          sx={{
            minHeight: "92vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            p: 0,
            border: "1px solid #D9D9D9",
            borderRadius: 2,
            bgcolor: "#FFFFFF",
          }}
        >
          {/* Account Settings Header inside box */}
          <Box px={3} py={2} borderBottom="1px solid #F0F0F0">
            <Typography fontSize="18px" fontWeight={600}>
              Account Settings
            </Typography>
          </Box>

          {/* Content */}
          <Box px={3} py={3} flexGrow={1}>
            {/* Avatar and User Info */}
            <Box display="flex" alignItems="center" mb={3}>
              <Box position="relative">
                <Avatar
                  alt="User"
                  src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                  sx={{ width: 80, height: 80 }}
                />
                <IconButton
                  size="small"
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    right: 0,
                    bgcolor: "#ECECEC",
                    border: "1px solid #D9D9D9",
                    width: 26,
                    height: 26,
                  }}
                >
                  <CameraAltIcon sx={{ fontSize: "16px" }} />
                </IconButton>
              </Box>

              <Box ml={2}>
                <Typography fontWeight={600} fontSize="16px">
                  {user.fullName}
                </Typography>
                <Typography fontSize="14px" color="text.secondary">
                  {user.email}
                </Typography>
              </Box>
            </Box>

            {/* Lorem Text */}
            <Typography
              variant="body2"
              fontSize="10px"
              color="text.secondary"
              lineHeight="15px"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </Typography>

            {/* Dotted Divider */}
            <Box mt={3} px={0}>
              <Divider
                sx={{
                  borderStyle: "dashed",
                  borderColor: "#D9D9D9",
                }}
              />
            </Box>
          </Box>

          {/* Bottom Border */}
          <Box marginBottom="30px" width="100%">
            <Divider
              sx={{
                borderStyle: "dashed",
                borderColor: "#D9D9D9",
                borderBottomWidth: "1px",
              }}
            />
          </Box>
        </Paper>
      </Box>
    </Box>
  );
};

export default Profile;
