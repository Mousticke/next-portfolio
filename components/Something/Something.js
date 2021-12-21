import akimHey from "@/public/bitmoji-cactus.png";
import Image from "next/image";
import { BitmojiContainer, SomethingContainer } from "./Something.styles";
function Something() {
  return (
    <SomethingContainer>
      <div className="something-bubble">I have something for you here</div>
      <BitmojiContainer>
        <Image
          src={akimHey}
          alt="Akim has something for your"
          loading="lazy"
          layout="responsive"
          width={398}
          height={398}
        />
      </BitmojiContainer>
    </SomethingContainer>
  );
}

export default Something;
