import { Container, Box, Typography, Grid } from "@mui/material";
import responsive from "./responsive.svg";
import design from "./design.svg";
import code from "./code.svg";
import referer from "./referer.svg";
const serviceArray = [
  {
    title: "site web responsive",
    img: responsive,
    description:
      "Un site web adapté à tous types de support ( mobile, tablette,ordinateur )",
  },
  {
    title: "design",
    img: design,
    description: "Un design adapté a votre secteur d'activité",
  },
  {
    title: "techologie",
    img: code,
    description:
      "J'utilise différentes technologie pour permettre de répondre plus éfficacement à chaque besoins",
  },
  {
    title: "référencement",
    img: referer,
    description:
      "Un référencement naturel pour permettre la bonne visibilité de votre site à moindre",
  },
];
export default function Services() {
  return (
    <Container
      id="services"
      maxWidth={false}
      sx={{
        height: "100%",
        display: "flex",
        flexFlow: "column",
        alignItems: "center",
        marginBottom: "50px",
      }}
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
        <Typography variant="h3">Services</Typography>
        <Typography variant="h4">Ce que je vous propose</Typography>
      </Box>
      <Grid
        container
        columnSpacing={{ xs: 0, sm: 2, md: 1 }}
        rowSpacing={{ xs: 1, sm: 2, md: 1 }}
        sx={{ maxWidth: "1500px" }}
      >
        {serviceArray.map((item, index) => (
          <Grid item sm={12} md={6} key={index} sx={{ maxWidth: "100%" }}>
            <Box
              p={5}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                background: "#EBEBE7",
                borderRadius: "3px",
                minHeight: "100%",
                flexFlow: { xs: "column", md: "row" },
                textAlign: "center",
                maxWidth: { sx: "100%" },
              }}
            >
              <Box p={2} sx={{ textAlign: { xs: "center", md: "left" } }}>
                <Typography variant="h5" color="primary.dark">
                  {item.title}
                </Typography>
                <Typography paragraph>{item.description}</Typography>
              </Box>
              <Box>
                <img
                  src={`${item.img}`}
                  alt={item.title}
                  style={{ width: "180px" }}
                  title={item.title}
                />
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
