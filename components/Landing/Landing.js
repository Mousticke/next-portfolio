import Image from "next/image";
import {
  LandingSection,
  BitmojiContainer,
  IntroductionContainer,
  HeroGreet,
  HeroName,
  HeroDoing,
  HeroSummary,
  HeroActions,
  HeroContainer,
} from "./Landing.styles";
import akimHi from "../../public/bitmoji-hi.png";

function Landing() {
  return (
    <LandingSection>
      <IntroductionContainer>
        <BitmojiContainer className="bitmoji">
          <Image
            src={akimHi}
            alt="Akim says hi"
            priority={true}
            layout="responsive"
            width={131}
            height={312}
          />
        </BitmojiContainer>
        <HeroContainer>
          <HeroGreet>Hi there, my name is</HeroGreet>
          <HeroName>Akim Benchiha</HeroName>
          <HeroDoing>Let&apos;s build things together.</HeroDoing>
          <HeroSummary>
            Young engineer based in Luxembourg specializing in blockchain,
            software development and project management. <br />
            I&apos;m currently working as a Consulting Engineer at Alcyone
          </HeroSummary>
          <HeroActions>
            <a href="mailto:akim.benchiha@gmail.com" aria-label="Say Hi">
              Say Hi
            </a>
            <a href="https://github.com/Mousticke" aria-label="Get my Resume">
              Get my Resume
            </a>
            <a
              href="mailto:info@alcyone-consulting.lu"
              aria-label="Contact Alcyone"
            >
              Contact Alcyone
            </a>
          </HeroActions>
        </HeroContainer>
      </IntroductionContainer>
    </LandingSection>
  );
}

export default Landing;
