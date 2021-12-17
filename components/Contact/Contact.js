import Image from "next/image";
import Link from "next/link";
import {
  BitmojiContainer,
  ContactSection,
  ContactInterest,
  ContactHead,
  ContactSummary,
  ContactButton,
} from "./Contact.styles";
import akimThink from "../../public/bitmoji-think.png";

function Contact() {
  return (
    <ContactSection id="contact">
      <BitmojiContainer>
        <Image
          src={akimThink}
          alt="Akim thinks for contact"
          loading="lazy"
          layout="responsive"
          width={110}
          height={170}
        />
      </BitmojiContainer>

      <ContactInterest className="contact-heading">
        Are you still interested ?
      </ContactInterest>
      <ContactHead className="contact-subhead">Get In Touch !</ContactHead>
      <ContactSummary className="contact-summary">
        I am not looking for any new opportunities. Nevertheless, you can always
        contact me via e-mail. Whether you contact me for an issue, question,
        comment or just for a greeting, I will try my best to answer you.
      </ContactSummary>
      <Link
        href="mailto:akim.benchiha@gmail.com?subject=Contact from your Portfolio"
        passHref={true}
      >
        <ContactButton className="boxButton" aria-label="Contact">
          Contact Me
        </ContactButton>
      </Link>
    </ContactSection>
  );
}

export default Contact;
