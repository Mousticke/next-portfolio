import Link from "next/link";
import {
  FaFacebookF,
  FaGithub,
  FaStackOverflow,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import socialLinksData from "../../../../config/socialMediaLinksData";
import Button from "../../../Utilities/Button";
import { AsideSocialContainer } from "./SocialMedia.styles";

function SocialMedia() {
  const getSocialIcon = (name) => {
    switch (name) {
      case "facebook":
        return <FaFacebookF />;
      case "github":
        return <FaGithub />;
      case "linkedIn":
        return <FaLinkedinIn />;
      case "instagram":
        return <FaInstagram />;
      case "stackOverflow":
        return <FaStackOverflow />;
      default:
        return <></>;
    }
  };

  return (
    <AsideSocialContainer>
      {socialLinksData &&
        socialLinksData.map(({ id, url, name }) => (
          <Button
            key={id}
            style={{ transitionDelay: `${100}ms` }}
            as={Link}
            ariaLabel={name}
            href={url}
            className={`${name}Button`}
            backgroundColor="#151b27"
            size="xs"
            shape="rounded"
          >
            {getSocialIcon(name)}
          </Button>
        ))}
    </AsideSocialContainer>
  );
}

export default SocialMedia;
