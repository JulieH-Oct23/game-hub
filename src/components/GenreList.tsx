import {
  List,
  HStack,
  ListItem,
  Image,
  Spinner,
  Button,
} from "@chakra-ui/react";
import useGenre from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import { Genre } from "../hooks/useGenres";

interface Props {
  onSelectedGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectedGenre }: Props) => {
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
            <Button
              onClick={() => onSelectedGenre(genre)}
              fontSize="lg"
              variant="link"
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
