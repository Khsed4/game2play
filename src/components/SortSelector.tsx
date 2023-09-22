import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsPlay } from "react-icons/bs";
interface Props {
  onSelectedSort: (value: Sort) => void;
  selectedSort: string | null;
}
export interface Sort {
  label: string;
  value: string;
}
const SortSelector = ({ onSelectedSort, selectedSort }: Props) => {
  const sortedOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date Added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release Date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsPlay />}>
        Order By : {selectedSort ? selectedSort : "Relevance"}
      </MenuButton>
      <MenuList>
        {sortedOrders.map((sort) => (
          <MenuItem
            onClick={() => {
              console.log(sort);
              onSelectedSort(sort);
            }}
            key={sort.value}
            value={sort.value}
          >
            {sort.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
