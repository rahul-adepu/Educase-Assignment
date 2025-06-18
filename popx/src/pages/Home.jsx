import React from "react";
import { Box, Typography, Button, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <Box
      minHeight="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="flex-end"
      px={3}
      pb={6}
      bgcolor="background.default"
    >
      <Box maxWidth={360} width="100%" mx="auto" textAlign="left">
        <Typography
          variant="h5"
          fontWeight={600}
          fontSize="24px"
          lineHeight="32px"
          gutterBottom
        >
          Welcome to <strong>PopX</strong>
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          fontSize="14px"
          lineHeight="20px"
          mb={4}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          <br />
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Typography>

        <Stack spacing={2}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={() => navigate("/signup")}
            sx={{
              textTransform: "none",
              borderRadius: 2,
              fontSize: "16px",
              fontWeight: "600",
              py: 1.8,
            }}
          >
            Create Account
          </Button>

          <Button
            variant="outlined"
            color="primary"
            fullWidth
            onClick={() => navigate("/login")}
            sx={{
              textTransform: "none",
              borderRadius: 2,
              fontSize: "16px",
              fontWeight: "600",
              py: 1.8,
              borderColor: "#6C25FF",
              color: "#6C25FF",
            }}
          >
            Already Registered? Login
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default Home;
