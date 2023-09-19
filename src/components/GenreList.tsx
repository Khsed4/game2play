import useGeneres from "../hooks/useGenres";

const GenreList = () => {
  const { isLoading, errors, genres } = useGeneres();
  return (
    <div>
      <ul>
        {genres.map((genre) => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default GenreList;
