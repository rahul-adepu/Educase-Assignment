import React from "react";
import { Box, Typography, Button, Stack, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <Box
      height="100vh"
      bgcolor="background.default"
      px={3}
      pt={8}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Paper
        elevation={0}
        sx={{
          width: "100%",
          maxWidth: 360,
          minHeight: "92vh",
          border: "1px solid #D9D9D9",
          borderRadius: 2,
          p: 3,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          mb: 8,
        }}
      >
        <Box>
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
            Lorem ipsum dolor sit amet, <br />
            consectetur adipiscing elit,
          </Typography>

          <Stack spacing={2}>
            <Button
              variant="contained"
              fullWidth
              onClick={() => navigate("/signup")}
              sx={{
                textTransform: "none",
                borderRadius: 2,
                fontSize: "16px",
                fontWeight: "600",
                py: 1.8,
                bgcolor: "#6C25FF",
                "&:hover": {
                  bgcolor: "#5a1ee8",
                },
              }}
            >
              Create Account
            </Button>

            <Button
              variant="outlined"
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
                "&:hover": {
                  borderColor: "#5a1ee8",
                  color: "#5a1ee8",
                },
              }}
            >
              Already Registered? Login
            </Button>
          </Stack>
        </Box>
      </Paper>
    </Box>
  );
};

export default LandingPage;
