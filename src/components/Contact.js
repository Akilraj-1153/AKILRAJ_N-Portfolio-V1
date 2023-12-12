import React from 'react';
import './Contact.css';
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { ExternalLink } from 'react-external-link';
import { CgMail } from "react-icons/cg";

function Contact() {
  return (
    <div>
      <div className="contact">
        <h2>Contact me in</h2>
        <div className='contactbtns'>
          <button className="icon-button">
            <ExternalLink href='https://www.linkedin.com/in/akilrajn1153'><FaLinkedinIn size={35} className="icon" /></ExternalLink>
          </button>
          <button className="icon-button">
            <ExternalLink href='https://github.com/Akilraj-1153'><FaGithub size={35} className="icon"></FaGithub></ExternalLink>
          </button>
          <button className="icon-button">
            <ExternalLink href='https://instagram.com/iam_akil_20?igshid=YTQwZjQ0NmI0OA=='><RiInstagramFill size={35} className="icon"></RiInstagramFill></ExternalLink>
          </button>
          <button className="icon-button">
            <ExternalLink href='https://x.com/Akilraj1153?t=nclAtn7CQGL7vEhqIDB3pA&s=08'><FaXTwitter size={35} className="icon"></FaXTwitter></ExternalLink>
          </button>
          <button className="icon-button">
            <ExternalLink href='mailto:akilrajn1153@gmail.com'><CgMail size={45} className="icon"></CgMail></ExternalLink>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
