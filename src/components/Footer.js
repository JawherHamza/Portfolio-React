import React from 'react';
import '../styles/Footer.css'
import { Button, IconButton } from '@material-ui/core';
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";
import EmailIcon from '@material-ui/icons/Email';
export default function Footer() {
    return (
        <div className="footer" id="footer">
            <span className="navbar-brand">
                <span>
                    <i id="dash" class="fa fa-code" />    Jawher Hamza   <i id="dash2" class="fa fa-code" />.
                  </span>
            </span>
            <div className="contact-buttons">
                <Button href="https://www.linkedin.com/in/jawher-hamza/">
                    <IconButton aria-label="upload picture" component="span" >
                        <LinkedInIcon />
                    </IconButton>
                </Button>
                <Button href="https://github.com/JawherHamza">
                    <IconButton aria-label="upload picture" component="span" >
                        <GitHubIcon />
                    </IconButton>
                </Button>
                <Button href="https://www.facebook.com/jawhar.hamza">
                    <IconButton aria-label="upload picture" component="span" >
                        <FacebookIcon />
                    </IconButton>
                </Button>
                <Button href="mailto:jawher_hamza@yahoo.fr">
                    <IconButton aria-label="upload picture" component="span" >
                        <EmailIcon />
                    </IconButton>
                </Button>
            </div>
        </div>
    );
}