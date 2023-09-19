import useData from "../hooks/useData";
import useGeneres, { Genres } from "../hooks/useGenres";

const GenreList = () => {
  const { isLoading, error, data } = useGeneres();
  return (
    <div>
      <ul>
        {data.map((genre) => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default GenreList;
