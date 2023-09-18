import { Badge } from "@chakra-ui/react";
interface Props {
  score: number;
}
const CriticScore = ({ score }: Props) => {
  let color = score > 80 ? "green" : score > 60 ? "yellow" : "";
  return (
    <Badge fontSize={15} paddingX={2} borderRadius={10} colorScheme={color}>
      {score}
    </Badge>
  );
};

export default CriticScore;
