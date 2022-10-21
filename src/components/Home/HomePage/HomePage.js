import { Link, Typography } from "@mui/material";
import { Container } from "@mui/system";
import banner from "./banner.jpg";
import Typewriter from "typewriter-effect";

export default function HomePage() {
  const MenuArray = ["portfolio", "à propos", "services", "tarifs", "contact"];

  return (
    <>
      <Container
        maxWidth={false}
        id="home"
        sx={{
          background: `url(${banner})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          height: "100vh",
          filter: "brightness(20%)",
        }}
      ></Container>
      <Container
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50% , -50%)",
          textTransform: "capitalize",
        }}
      >
        {MenuArray.map((item, index) => (
          <Typography
            key={index}
            variant="h2"
            sx={{
              width: "fit-content",
              transition: "ease-in-out all .3s",
              color: "rgba(255,255,255,0.4)",

              "&:hover": {
                marginLeft: "10px",
                cursor: "pointer",
              },
            }}
          >
            <Link
              aria-label={item}
              underline="none"
              href={"#" + item.replace(/ /g, "")}
              sx={{
                fontFamily: "Century Gothic",
                width: "fit-content",
                transition: "ease-in-out all .3s",
                color: "rgba(255,255,255,0.4)",
                "&:hover": {
                  color: "#fff",
                },
              }}
            >
              <Typewriter
                options={{
                  cursor: "",
                  delay: 50,
                }}
                onInit={(typewriter) => {
                  typewriter
                    .pauseFor((index + "00") * 2)
                    .typeString(item)
                    .start();
                }}
              />
            </Link>
          </Typography>
        ))}
      </Container>
    </>
  );
}
