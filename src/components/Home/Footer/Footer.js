import { Container, Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <Container id="footer" maxWidth={false} sx={{ bgcolor: "primary.main" }}>
      <Box
        sx={{
          padding: "20px",
          fontFamily: "Century Gothic",
          maxWidth: "1500px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Link to="/legal" style={{ color: "#fff", textDecoration: "none" }}>
          CGV - Mentions Légales
        </Link>
        <Typography variant={"body2"}>Rdevs - Tous droits réservé</Typography>
      </Box>
    </Container>
  );
}
