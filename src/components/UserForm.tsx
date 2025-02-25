import { useState } from "react";
import { TextField, Button, Container, Typography, Box } from "@mui/material";

export default function UserForm() {
  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
  };

  return (
    <Container maxWidth="sm">
      <Box
        p={3}
        borderRadius={2}
        boxShadow={3}
        bgcolor="white"
        mt={5}
        sx={{ textAlign: "center" }}
      >
        <Typography variant="h4" mb={2}>
          User Form
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            variant="outlined"
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            sx={{ mb: 2, bgcolor: "white", borderRadius: 1 }}
          />
          <TextField
            fullWidth
            variant="outlined"
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            sx={{ mb: 2, bgcolor: "white", borderRadius: 1 }}
          />
          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </form>
      </Box>
    </Container>
  );
}
