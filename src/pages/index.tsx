import Link from "next/link";
import { Container, Button, Typography, Box } from "@mui/material";

export default function Home() {
  return (
    <Container>
      <Typography variant="h3" align="center" gutterBottom>
        Welcome to the Assignment App
      </Typography>
      <Box display="flex" justifyContent="center" gap={2} mt={3}>
        <Link href="/counter" passHref>
          <Button variant="contained">Counter</Button>
        </Link>
        <Link href="/form" passHref>
          <Button variant="contained">User Form</Button>
        </Link>
        <Link href="/editor" passHref>
          <Button variant="contained">Rich Text Editor</Button>
        </Link>
      </Box>
    </Container>
  );
}
