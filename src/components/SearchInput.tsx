import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

const SearchInput = () => {
  return (
    <InputGroup>
      <InputLeftElement children={<BsSearch />} marginLeft={3} />

      <Input
        borderRadius={20}
        placeholder={"search game..."}
        marginLeft={3}
        marginRight={3}
        variant={"filled"}
      />
    </InputGroup>
  );
};

export default SearchInput;
