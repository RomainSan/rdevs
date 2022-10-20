import { Typography, Box, Grid } from "@mui/material";
import { Container } from "@mui/system";
import img from "./about.svg";
import javascript from "./javascript.svg";
import php from "./php.svg";
import react from "./react.svg";
import wordpress from "./wordpress.svg";
import redux from "./redux.svg";
import firebase from "./firebase.svg";
import mysql from "./mysql.svg";
import jquery from "./jquery.svg";
import git from "./git.svg";
import woocommerce from "./woocommerce.svg";

export default function About() {
  const tech = [
    javascript,
    php,
    react,
    wordpress,
    redux,
    firebase,
    mysql,
    jquery,
    git,
    woocommerce,
  ];

  return (
    <Container id="àpropos" maxWidth={false} sx={{ height: "100%" }}>
      <Box
        sx={{
          textAlign: "center",
          padding: "50px 50px 10px 50px",
          fontFamily: "Century Gothic",
        }}
      >
        <Typography variant="h3">à propos</Typography>
        <Typography variant="h4">
          Je suis Romain, Développeur Web / Web mobile
        </Typography>
      </Box>
      <Box
        sx={{
          width: "100%",
          display: { xs: "none", md: "flex" },
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {tech.map((item, index) => (
          <img
            key={index}
            style={{
              maxWidth: "30px",
              margin: "0 20px",
              borderRadius: "3px",
              contain: "fit-contain",
            }}
            src={`${item}`}
            srcSet={`${item}`}
            alt={`${item}`}
            title={`${item}`}
          />
        ))}
      </Box>
      <Grid
        container
        sx={{
          display: "flex",
          margin: "50px auto",
          maxWidth: "1500px",
          background: "#EBEBE7",
          borderRadius: "3px",
        }}
      >
        <Grid p={10} item md={6} xs={12} sx={{ width: "50%" }}>
          <img
            src={`${img}`}
            alt={"à propos"}
            title={"à propos"}
            style={{ width: "90%", borderRadius: "2px" }}
          />
        </Grid>
        <Grid p={5} item md={6} xs={12}>
          <Typography variant={"h5"} color="primary.dark">
            Expérience en développement
          </Typography>
          <Typography paragraph sx={{ maxWidth: "750px" }}>
            Mon expérience acquise au fil des projets me permet de mieux
            comprendre les attentes d'un client et de répondre précisement au
            besoin demandé en fonction du domaine d'activité. Du site vitrine au
            projet plus complexe, je vous propose une expertise et un
            développement web qui correspond à vos attentes et à vos besoins.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
