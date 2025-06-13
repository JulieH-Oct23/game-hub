import { List, HStack, ListItem, Image, Spinner } from "@chakra-ui/react";
import useGenre from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

const GenreList = () => {
  const { data, isLoading } = useGenre();

  if (isLoading) return <Spinner />;

  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <text fontSize="lg">{genre.name}</text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
