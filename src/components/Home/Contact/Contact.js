import { Container, Box, Typography } from "@mui/material";

export default function Contact() {
  return (
    <Container
      id="contact"
      maxWidth={false}
      sx={{ height: "70vh", bgcolor: "primary.main" }}
    >
      <Box
        sx={{
          textAlign: "center",
          padding: "50px",
          fontFamily: "Century Gothic",
          maxWidth: "1500px",
          margin: "0 auto",
        }}
      >
        <Typography variant="h3" color="custom.main">
          Contact
        </Typography>
        <Typography variant="h4" color="custom.main">
          Pour toute demande d'information
        </Typography>
      </Box>
    </Container>
  );
}
