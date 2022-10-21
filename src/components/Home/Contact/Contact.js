import { Container, Box, Typography, IconButton } from "@mui/material";
import Alert from "@mui/material/Alert";
import { useRef, useState } from "react";
import { TextField } from "@mui/material";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import emailjs from "@emailjs/browser";
import SendIcon from "@mui/icons-material/Send";
import { LoadingButton } from "@mui/lab";

export default function Contact() {
  const form = useRef();
  const [alertSuccess, setAlertSuccess] = useState("-110%");
  const [loading, setLoading] = useState(false);
  function handleClick() {
    setLoading(true);
  }
  const sendEmail = (e) => {
    e.preventDefault();
    handleClick();

    emailjs
      .sendForm(
        "service_2l9d40t",
        "template_kv9nxgm",
        form.current,
        "snU2G2djvT_2_JluC"
      )

      .then(
        (result) => {
          setLoading(false);
          e.target[0].value = "";
          e.target[1].value = "";
          e.target[2].value = "";
          setAlertSuccess("0%");

          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Container
      id="contact"
      maxWidth={false}
      sx={{ height: "100%", minHeight: "700px", bgcolor: "primary.main" }}
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
      <Box p={5} sx={{ maxWidth: "1000px", margin: "0 auto" }}>
        <form
          ref={form}
          onSubmit={sendEmail}
          style={{ display: "flex", flexFlow: "column" }}
        >
          <TextField
            variant="filled"
            label="Votre Nom"
            type="text"
            name="user_name"
            InputLabelProps={{
              style: { color: "#000" },
            }}
            sx={{ marginBottom: "10px" }}
            required
          />
          <TextField
            variant="filled"
            label="Votre eMail"
            type="email"
            name="user_email"
            InputLabelProps={{
              style: { color: "#000" },
            }}
            sx={{ marginBottom: "10px" }}
            required
          />
          <TextField
            variant="filled"
            label="Votre Message"
            multiline
            rows={5}
            name="message"
            InputLabelProps={{
              style: { color: "#000" },
            }}
            sx={{ marginBottom: "10px" }}
            required
          />
          <LoadingButton
            type="submit"
            sx={{ width: "fit-content" }}
            size="large"
            color="custom"
            endIcon={<SendIcon color="primary" />}
            loading={loading}
            loadingPosition="end"
            variant="contained"
          >
            Envoyer
          </LoadingButton>
        </form>
        {alertSuccess && (
          <Alert
            severity="success"
            sx={{
              position: "fixed",
              bottom: "10px",
              left: "10px",
              display: "flex",
              width: "fit-content",
              alignItems: "center",
              justifyContent: "center",
              transition: "all .5s",
              transform: `translateX(${alertSuccess})`,
            }}
          >
            Votre message a bien été envoyé 😎
            <IconButton
              onClick={() => setAlertSuccess("-110%")}
              sx={{ position: "relative", right: "0" }}
            >
              <CloseRoundedIcon />
            </IconButton>
          </Alert>
        )}
      </Box>
    </Container>
  );
}
