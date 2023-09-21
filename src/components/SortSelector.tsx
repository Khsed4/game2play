import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsPlay } from "react-icons/bs";

const SortSelector = () => {
  const sortedOrders = [
    { valuue: "", label: "Relevance" },
    { valuue: "-added", label: "Date Added" },
    { valuue: "name", label: "Name" },
    { valuue: "-released", label: "Release Date" },
    { valuue: "-metacritic", label: "Popularity" },
    { valuue: "-rating", label: "Average rating" },
  ];
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsPlay />}>
        Order By : Relevance
      </MenuButton>
      <MenuList>
        {sortedOrders.map((sort) => (
          <MenuItem key={sort.valuue}>{sort.label}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
