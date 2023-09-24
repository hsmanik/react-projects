import { useEffect, useState } from "react";
import GenreList from "../Components/GenreList";
import GlobalApi from "../Services/GlobalApi";
import Banner from "../Components/Banner";
import { TrendingGames } from "../Components/TrendingGames";
import { GamesByGenreId } from "../Components/GamesByGenreId";

export const Home = () => {
  const [allGamesList, setAllGamesList] = useState();
  const [gameListByGenreId, setgameListByGenreId] = useState([]);
  const [genreName, setgenreName] = useState("Action");
  useEffect(() => {
    getAllGamesList();
    getGamesListByGenreId(4);
  }, []);

  const getAllGamesList = () => {
    GlobalApi.getAllGames.then((resp) => {
      setAllGamesList(resp.data.results);
    });
  };

  const getGamesListByGenreId = (id) => {
    // console.log("get genre id", id);
    GlobalApi.getGamesListByGenreId(id).then((resp) => {
      // console.log("Game List By Genre Id:", resp.data.results);
      setgameListByGenreId(resp.data.results);
    });
  };

  return (
    <div className=" grid grid-cols-4 p-8">
      <div className=" h-full hidden md:block">
        <GenreList
          genreId={(genreId) => getGamesListByGenreId(genreId)}
          onSelectGenre={(name) => setgenreName(name)}
        />
      </div>
      <div className=" col-span-4  md:col-span-3 px-3">
        {allGamesList?.length > 0 && gameListByGenreId.length > 0 ? (
          <div>
            <Banner gameBanner={allGamesList[0]} />
            <TrendingGames gameList={allGamesList} />
            <GamesByGenreId
              gameList={gameListByGenreId}
              genreName={genreName}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
};
