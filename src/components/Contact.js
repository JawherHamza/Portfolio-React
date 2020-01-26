import React from "react";
import { Container, Grid, Button, TextField } from "@material-ui/core";
import Input from "@material-ui/core/Input";
import { FormattedMessage } from "react-intl";
import SendIcon from "@material-ui/icons/Send";
import PlaceIcon from "@material-ui/icons/Place";

let sendMail = () => {
  var name = document.getElementById("name").value;
  var phone = document.getElementById("phone").value;
  var message = document.getElementById("message").value;
  if (name != "" && phone != "" && message != "")
    window.open(
      "mailto:jawher_hamza@yahoo.fr?subject=Contact From My Website" +
        "&body= Hi i'm " +
        name +
        " " +
        message +
        " My Phone Number : " +
        phone +
        ""
    );
};

export default function Contact() {
  return (
    <div id="contact">
      <Container>
        <h1 class="title">
          <FormattedMessage id="contact-title" />
        </h1>
        <h3 style={{ fontWeight: 100 }}>
          <FormattedMessage id="get-in-touch" />
        </h3>
        <Grid container>
          <Grid item md={8} style={{ padding: "10px" }}>
            <h3>
              <FormattedMessage id="post-a-message" />
            </h3>
            <form>
              <FormattedMessage id="nameplaceholder">
                {placeholder => (
                  <Input
                    style={{ margin: "10px 0" }}
                    fullWidth={true}
                    type="text"
                    id="name"
                    placeholder={placeholder}
                    required
                    className="contact-input"
                  />
                )}
              </FormattedMessage>
              <FormattedMessage id="phone">
                {placeholder => (
                  <Input
                    style={{ margin: "10px 0" }}
                    fullWidth={true}
                    type="phone"
                    id="phone"
                    placeholder={placeholder}
                    required
                    className="contact-input"
                  />
                )}
              </FormattedMessage>
              <FormattedMessage id="your-message">
                {placeholder => (
                  <Input
                    style={{ margin: "10px 0" }}
                    placeholder={placeholder}
                    fullWidth={true}
                    multiline={true}
                    rows={3}
                    rowsMax={6}
                    required
                    id="message"
                    className="contact-input"
                  />
                )}
              </FormattedMessage>
              <Button
                className="send-button"
                variant="outlined"
                style={{ float: "right", margin: "10px" }}
                onClick={() => {
                  sendMail();
                }}
              >
                <SendIcon />
                &nbsp;&nbsp;
                <FormattedMessage id="send" />
              </Button>
            </form>
          </Grid>
          <Grid item md={4} style={{ padding: "10px" }}>
            <h3>
              <FormattedMessage id="address" />
            </h3>
            <PlaceIcon />
            <p>
              Rades, Ben Arous, TUNISIE
              <br />
              Email:{" "}
              <a href="mailto:jawher_hamza@yahoo.fr">jawher_hamza@yahoo.fr</a>
            </p>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
