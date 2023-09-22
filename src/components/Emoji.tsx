import { Image, ImageProps } from "@chakra-ui/react";
import bullsEye from "../assets/bulls-eye.webp";
import meh from "../assets/meh.webp";
import thumbs from "../assets/thumbs-up.webp";
interface Props {
  rating: number;
}
const Emoji = ({ rating }: Props) => {
  if (rating < 3) return;
  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "meh", boxSize: "25px" },
    4: { src: thumbs, alt: "recommended", boxSize: " 25px" },
    5: { src: bullsEye, alt: "Exceptional", boxSize: "35px" },
  };
  return <Image {...emojiMap[rating]} marginTop="5px" />;
};

export default Emoji;
