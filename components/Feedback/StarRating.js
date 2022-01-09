import {
  BitmojiRatingContainer,
  Bitmojis,
  StarButton,
  StarRatings,
  StarsContainer,
} from "./StarRating.styles";

import bitmojiAngel from "@/public/assets/bitmojis/bitmoji-angel.png";
import bitmojiMad from "@/public/assets/bitmojis/bitmoji-mad.png";
import bitmojiTear from "@/public/assets/bitmojis/bitmoji-tear.png";
import bitmojiSweat from "@/public/assets/bitmojis/bitmoji-sweat.png";
import bitmojiThink from "@/public/assets/bitmojis/bitmoji-question.png";
import Image from "next/image";

const StarRating = ({ rating, setFormData, hoverRating, setHoverRating }) => {
  return (
    <StarsContainer>
      <BitmojiRatingContainer>
        <Bitmojis rating={rating}>
          <Image
            src={bitmojiAngel}
            layout="responsive"
            loading="lazy"
            alt="Rating 5"
            width={90}
            height={90}
          />
          <Image
            src={bitmojiThink}
            layout="responsive"
            loading="lazy"
            alt="Rating 4"
            width={90}
            height={90}
          />
          <Image
            src={bitmojiMad}
            layout="responsive"
            loading="lazy"
            alt="Rating 3"
            width={90}
            height={90}
          />
          <Image
            src={bitmojiSweat}
            layout="responsive"
            loading="lazy"
            alt="Rating 2"
            width={90}
            height={90}
          />
          <Image
            src={bitmojiTear}
            priority={true}
            layout="responsive"
            alt="Rating 1"
            width={90}
            height={90}
          />
        </Bitmojis>
      </BitmojiRatingContainer>
      <StarRatings>
        {[...Array(5)].map((star, index) => {
          index += 1;
          return (
            <StarButton
              type="button"
              key={index}
              className={index <= (hoverRating || rating) ? "on" : "off"}
              onClick={() =>
                setFormData((prevState) => ({
                  ...prevState,
                  rate: index,
                }))
              }
              value={rating}
              onMouseEnter={() => setHoverRating(index)}
              onMouseLeave={() => setHoverRating(rating)}
            >
              <span></span>
            </StarButton>
          );
        })}
      </StarRatings>
    </StarsContainer>
  );
};

export default StarRating;
