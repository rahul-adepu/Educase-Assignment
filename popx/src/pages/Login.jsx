import React from "react";
import {
  Box,
  Button,
  Stack,
  TextField,
  Typography,
  Paper,
} from "@mui/material";

const Login = () => {
  return (
    <Box
      minHeight="100vh"
      bgcolor="background.default"
      px={3}
      pt={6}
      display="flex"
      justifyContent="center"
    >
      <Paper
        elevation={0}
        sx={{
          width: "100%",
          maxWidth: 360,
          p: 3,
          border: "1px solid #D9D9D9",
          borderRadius: 2,
        }}
      >
        <Typography variant="h6" fontWeight={600} gutterBottom>
          Signin to your <br />
          <strong>PopX</strong> account
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ mb: 3, lineHeight: "20px" }}
        >
          Lorem ipsum dolor sit amet, <br />
          consectetur adipiscing elit,
        </Typography>

        <Stack spacing={2}>
          <TextField
            required
            fullWidth
            id="email"
            label="Email Address"
            variant="outlined"
            size="small"
            InputLabelProps={{ shrink: true }}
          />

          <TextField
            required
            fullWidth
            id="password"
            label="Password"
            type="password"
            variant="outlined"
            size="small"
            InputLabelProps={{ shrink: true }}
          />

          <Button
            variant="contained"
            fullWidth
            disabled
            sx={{
              textTransform: "none",
              bgcolor: "#CBCBCB",
              color: "#000000",
              fontWeight: 500,
              fontSize: "14px",
              py: 1.5,
              "&:hover": {
                bgcolor: "#CBCBCB",
              },
            }}
          >
            Login
          </Button>
        </Stack>
      </Paper>
    </Box>
  );
};

export default Login;
