import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsPlay } from "react-icons/bs";
import usePlatform from "../hooks/usePlatforms";
import { platform } from "../hooks/useGames";
interface Props {
  onSelectPlatform: (platform: platform) => void;
  selectedPlatform: platform | null;
}
const PlatformSelector = ({ onSelectPlatform, selectedPlatform }: Props) => {
  const { data } = usePlatform();

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsPlay />}>
        {selectedPlatform?.name || "Platform"}
      </MenuButton>
      <MenuList>
        {data.map((platform) => (
          <MenuItem
            onClick={() => onSelectPlatform(platform)}
            key={platform.id}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
