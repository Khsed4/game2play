import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsPlay } from "react-icons/bs";
import usePlatform from "../hooks/usePlatforms";

const PlatformSelector = () => {
  const { error, isLoading, data } = usePlatform();
  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsPlay />}>
        Platform
        <MenuList>
          {data.map((platform) => (
            <MenuItem key={platform.id}>{platform.name}</MenuItem>
          ))}
        </MenuList>
      </MenuButton>
    </Menu>
  );
};

export default PlatformSelector;
