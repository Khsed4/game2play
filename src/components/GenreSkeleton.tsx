import {
  List,
  ListItem,
  Image,
  SkeletonText,
  Skeleton,
} from "@chakra-ui/react";

const GenreSkeleton = () => {
  return (
    <List>
      <ListItem paddingY="5px">
        <Skeleton>
          <Image boxSize="35px" borderRadius={8} />
          <SkeletonText fontSize="lg" />
        </Skeleton>
      </ListItem>
    </List>
  );
};

export default GenreSkeleton;
