import React, { useState } from "react";
import {
  Box,
  Button,
  Stack,
  TextField,
  Typography,
  Paper,
} from "@mui/material";
import axios from "axios";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    setErrorMsg("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/user/login`,
        formData
      );

      const { fullName, email } = res.data.user;

      localStorage.setItem("user", JSON.stringify({ fullName, email }));

      console.log("Login Success:", res.data);
    } catch (err) {
      console.error("Login Failed:", err.response?.data || err.message);
      setErrorMsg("Incorrect email or password");
    } finally {
      setLoading(false);
    }
  };

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

        <form onSubmit={handleSubmit}>
          <Stack spacing={2}>
            <TextField
              required
              fullWidth
              id="email"
              label="Email Address"
              variant="outlined"
              size="small"
              InputLabelProps={{ shrink: true }}
              value={formData.email}
              onChange={handleChange}
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
              value={formData.password}
              onChange={handleChange}
              error={Boolean(errorMsg)}
              helperText={errorMsg}
              FormHelperTextProps={{
                sx: { color: "#d32f2f", fontSize: "12px", mt: 0.5 },
              }}
            />

            <Button
              type="submit"
              variant="contained"
              fullWidth
              disabled={loading}
              sx={{
                textTransform: "none",
                bgcolor: "#6C25FF",
                color: "#FFFFFF",
                fontWeight: 500,
                fontSize: "14px",
                py: 1.5,
                "&:hover": {
                  bgcolor: "#5a1ee8",
                },
              }}
            >
              {loading ? "Logging in..." : "Login"}
            </Button>
          </Stack>
        </form>
      </Paper>
    </Box>
  );
};

export default Login;
