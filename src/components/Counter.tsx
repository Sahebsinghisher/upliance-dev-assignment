import React, { useState } from "react";
import { motion } from "framer-motion";
import { Box, Button, Typography } from "@mui/material";

const Counter: React.FC = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => setCount(count + 1);
  const handleDecrement = () => setCount(count - 1);
  const handleReset = () => setCount(0);

  return (
    <motion.div
      animate={{ backgroundColor: `rgba(0, 150, 255, ${count * 0.1})` }}
      transition={{ ease: "easeOut", duration: 0.5 }}
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Typography variant="h3">Counter: {count}</Typography>
      <Box mt={2}>
        <Button variant="contained" color="primary" onClick={handleIncrement} sx={{ mr: 1 }}>
          +
        </Button>
        <Button variant="contained" color="secondary" onClick={handleDecrement} sx={{ mr: 1 }}>
          -
        </Button>
        <Button variant="contained" color="error" onClick={handleReset}>
          Reset
        </Button>
      </Box>
    </motion.div>
  );
};

export default Counter;
