import Image from "next/image";
import { LandingSection, BitmojiContainer } from "./Landing.styles";
import akimHi from "../../public/bitmoji-hi.png";

function Landing() {
  return (
    <LandingSection>
      <BitmojiContainer className="bitmoji">
        <Image src={akimHi} alt="Akim says hi" loading="lazy" />
      </BitmojiContainer>
      <p>Main</p>
    </LandingSection>
  );
}

export default Landing;
