import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.jpg";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
interface Props {
  onsearch: (searchText: string) => void;
}

const NavBar = ({ onsearch }: Props) => {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="60px" />
      <SearchInput onSearch={(ref) => onsearch(ref)} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
