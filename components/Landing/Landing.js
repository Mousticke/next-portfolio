import Image from "next/image";
import { LandingSection, BitmojiContainer } from "./Landing.styles";
import akimHi from "../../public/bitmoji-hi.png";

function Landing() {
  return (
    <LandingSection>
      <BitmojiContainer className="bitmoji">
        <Image
          src={akimHi}
          alt="Akim says hi"
          priority={true}
          width={131}
          height={312}
        />
      </BitmojiContainer>
      <p>Main</p>
    </LandingSection>
  );
}

export default Landing;
