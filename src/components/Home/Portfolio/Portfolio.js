import {
  Card,
  CardActions,
  CardContent,
  Typography,
  Button,
  Grid,
  Box,
} from "@mui/material";
import { Container } from "@mui/system";
import handyman from "./handyman.jpg";

export default function Portfolio() {
  const PortfolioArary = [
    {
      name: "handyman1990",
      tech: ["wordpress", "elementor"],
      background: handyman,
      link: "https://handyman1990.fr",
    },
    {
      name: "je vis comme je suis",
      tech: ["wordpress", "elementor"],
      link: "https://jeviscommejesuis.fr",
    },
    { name: "site communaitaire", tech: ["react", "redux"] },
    { name: "rdevs", tech: ["react"] },
  ];
  return (
    <Container
      id="portfolio"
      maxWidth={false}
      sx={{
        height: "100%",
        minHeight: "60vh",
        bgcolor: "primary.main",
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
        <Typography variant="h3" color="custom.main">
          Portfolio
        </Typography>
        <Typography variant="h4" color="custom.main">
          Une partie de mes projets web
        </Typography>
      </Box>
      <Grid
        container
        sx={{ maxWidth: "1500px", margin: "0 auto", justifyContent: "center" }}
      >
        {PortfolioArary.map((item, index) => (
          <Grid item sx={{ height: "400px", margin: "5px" }} key={index}>
            <Card
              sx={{
                width: "350px",
                height: "350px",
                display: "flex",
                flexFlow: "column",
                justifyContent: "center",
                alignItems: "center",
                background: `url(${item.background})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                transition: "all .3s",
                margin: "5px",
                "&:hover": {
                  transform: "scale(1.01)",
                },
              }}
            >
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{
                    textTransform: "capitalize",
                    color: "#fff",
                    padding: "0px",
                  }}
                >
                  {item.name}
                </Typography>
              </CardContent>
              <CardContent sx={{ display: "flex", padding: "0" }}>
                {item.tech.map((i, index) => (
                  <Typography
                    key={index}
                    variant="body2"
                    color="secondary"
                    sx={{ marginX: "5px", textTransform: "capitalize" }}
                  >
                    {i}
                  </Typography>
                ))}
              </CardContent>
              <CardActions
                sx={{
                  display: "flex",
                  justifyContent: "end",
                }}
              >
                <Button
                  size="large"
                  variant="contained"
                  sx={{ color: "#fff" }}
                  href={item.link}
                  target="_blank"
                >
                  vister
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
