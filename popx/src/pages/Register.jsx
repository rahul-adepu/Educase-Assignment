import React, { useState } from "react";
import {
  Box,
  Button,
  Stack,
  TextField,
  Typography,
  Paper,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import axios from "axios";

const Register = () => {
  const [agency, setAgency] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    phone: "",
    companyName: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/user/register`,
        formData
      );

      if (response.data.message === "User registered successfully") {
        alert("Registered successfully!");
      }
    } catch (error) {
      console.error("Registration error:", error);
      alert(error.response?.data?.message || "Something went wrong");
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
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          minHeight: "calc(100vh - 48px)",
        }}
      >
        <Box>
          <Typography variant="h6" fontWeight={600} gutterBottom>
            Create your <br />
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
              id="fullName"
              label="Full Name"
              variant="outlined"
              size="small"
              InputLabelProps={{ shrink: true }}
              value={formData.fullName}
              onChange={handleChange}
            />

            <TextField
              required
              fullWidth
              id="phone"
              label="Phone Number"
              type="tel"
              variant="outlined"
              size="small"
              InputLabelProps={{ shrink: true }}
              value={formData.phone}
              onChange={handleChange}
            />

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
            />

            <TextField
              required
              fullWidth
              id="companyName"
              label="Company Name"
              variant="outlined"
              size="small"
              InputLabelProps={{ shrink: true }}
              value={formData.companyName}
              onChange={handleChange}
            />

            <FormControl sx={{ mt: 1 }}>
              <FormLabel
                sx={{
                  fontSize: "14px",
                  fontWeight: 500,
                  color: "#000",
                  mb: 1,
                }}
              >
                Are you an agency?
              </FormLabel>
              <RadioGroup
                row
                value={agency}
                onChange={(e) => setAgency(e.target.value)}
              >
                <FormControlLabel
                  value="yes"
                  control={<Radio size="small" />}
                  label="Yes"
                />
                <FormControlLabel
                  value="no"
                  control={<Radio size="small" />}
                  label="No"
                />
              </RadioGroup>
            </FormControl>
          </Stack>
        </Box>

        <Button
          type="button"
          onClick={handleSubmit}
          variant="contained"
          fullWidth
          sx={{
            mt: 3,
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
          Create Account
        </Button>
      </Paper>
    </Box>
  );
};

export default Register;
