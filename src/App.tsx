import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genres } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { platform } from "./hooks/useGames";
import SortSelector, { Sort } from "./components/SortSelector";
import GameHeading from "./components/GameHeading";
export interface GameQuery {
  genre: Genres | null;
  platform: platform | null;
  sort: Sort;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px",
      }}
    >
      <GridItem area="nav">
        <NavBar
          onsearch={(ref) => setGameQuery({ ...gameQuery, searchText: ref })}
        />
      </GridItem>
      <Show above="lg">
        <GridItem paddingX={5} area="aside">
          <GenreList
            highlitedGenre={gameQuery.genre}
            OnSlectedGenre={(genre) => {
              setGameQuery({ ...gameQuery, genre });
            }}
          />
        </GridItem>
      </Show>

      <GridItem area="main" justifyContent={"space-between"} paddingLeft={2}>
        <GameHeading gameQuery={gameQuery} />
        <HStack justifyContent={"space-between"}>
          <PlatformSelector
            selectedPlatform={gameQuery.platform}
            onSelectPlatform={(platform) =>
              setGameQuery({ ...gameQuery, platform })
            }
          />
          <SortSelector
            onSelectedSort={(sort) => {
              setGameQuery({ ...gameQuery, sort });
            }}
            selectedSort={gameQuery.sort?.label}
          />
        </HStack>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
