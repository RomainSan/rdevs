import {
  Typography,
  Box,
  Container,
  Grid,
  Card,
  CardHeader,
  CardContent,
  List,
  ListItem,
  Divider,
  Link,
} from "@mui/material";
const priceArray = [
  {
    price: "500€",
    tech: "WordPress",
    link: "https://fr.wordpress.org/",
    prestation: "Vitrine - One Page",
    description: "Idéale pour avoir une présence sur internet",
    content: [
      "Domaine + hébergement pendant 12 mois",
      "Site web responsive ( adapté à tous type de supports )",
      "Formulaire de contact & map",
      "Liens réseaux sociaux",
      "Optimisation et référencement",
      "Mise en ligne",
      "charte graphique à partir de maquettes prédéfinis",
      "Interface utilisateur WordPress",
    ],
  },
  {
    price: "1000€",
    tech: "React",
    link: "https://fr.reactjs.org/",
    prestation: "Sur Mesure",
    description: "Site web sur mesure",
    content: [
      "Domaine + hébergement pendant 12 mois",
      "Site web responsive ( adapté à tous type de supports )",
      "Formulaire de contact & map",
      "Liens réseaux sociaux",
      "Optimisation et référencement",
      "Mise en ligne",
      "charte graphique personnalisé",
      "Interface utilisateur Personnalisé",
    ],
  },
  {
    price: "2500€",
    tech: "WooCommerce",
    link: "https://woocommerce.com/",
    prestation: "eCommerce",
    description: "Création d'une boutique en ligne",
    content: [
      "Domaine + hébergement pendant 12 mois",
      "Site web responsive ( adapté à tous type de supports )",
      "Formulaire de contact & map",
      "Liens réseaux sociaux",
      "Optimisation et référencement",
      "Mise en ligne",
      "Charte graphique à partir de maquettes prédéfinis",
      "Interface utilisateur WordPress",
    ],
  },
];
export default function Tarifs() {
  return (
    <Container
      id="tarifs"
      maxWidth={false}
      sx={{
        bgcolor: "primary.main",
        display: "flex",
        flexFlow: "column",
        alignItems: "center",
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
          Tarifs
        </Typography>
        <Typography variant="h4" color="custom.main">
          Des offres adaptés à votre budget et à vos envies
        </Typography>
      </Box>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ sm: 2, md: 3 }}
        sx={{
          maxWidth: "1300px",
          margin: "50px 0",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {priceArray.map((item, index) => (
          <Grid
            key={index}
            item
            sm={12}
            md={4}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Card
              variant="outlined"
              sx={{
                textAlign: "center",
                maxWidth: "400px",
              }}
            >
              <CardHeader
                title={item.prestation}
                subheader={item.description}
              />
              <Divider />
              <CardContent>
                <Typography
                  variant="subtile1"
                  sx={{ color: "#868686", textTransform: "capitalize" }}
                  gutterBottom={true}
                >
                  {index >= 1 ? "à partir de :" : "prix :"}
                </Typography>
                <Typography
                  variant="h4"
                  sx={{ color: "primary.dark" }}
                  gutterBottom={true}
                >
                  {item.price}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{ color: "#868686" }}
                  gutterBottom={true}
                >
                  Développé avec
                  <Link
                    href={item.link}
                    target={"_blank"}
                    sx={{ color: "primary.main" }}
                  >
                    {" " + item.tech}
                  </Link>
                </Typography>

                {item.content.map((i, index) => (
                  <List key={index}>
                    <ListItem
                      sx={{
                        textAlign: "center",
                        justifyContent: "center",
                        height: "50px",
                      }}
                    >
                      <Typography
                        color="textSecondary"
                        variant="subtitle1"
                        component="p"
                        sx={{
                          textTransform: "capitalize",
                        }}
                      >
                        {i}
                      </Typography>
                    </ListItem>
                    {index == 5 && <Divider />}
                  </List>
                ))}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
