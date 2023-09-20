import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsPlay } from "react-icons/bs";

const SortSelector = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsPlay />}>
        Order By : Relevance
      </MenuButton>
      <MenuList>
        <MenuItem>Relevance</MenuItem>
        <MenuItem>Date Added</MenuItem>
        <MenuItem>Name</MenuItem>
        <MenuItem>Release Date</MenuItem>
        <MenuItem>Popularity</MenuItem>
        <MenuItem>Average Reating</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
