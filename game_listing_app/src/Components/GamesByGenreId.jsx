import { useEffect } from "react";
import { AiFillStar } from "react-icons/ai";
import { BiSolidMessageRounded } from "react-icons/bi";
import { AiFillFire } from "react-icons/ai";

export const GamesByGenreId = ({ gameList, genreName }) => {
  useEffect(() => {
    console.log("genre name current", genreName);
  }, []);
  return (
    <div>
      <h2 className=" font-bold text-[30px] dark:text-white mt-5">
        {genreName} Games
      </h2>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
        {gameList.map((item) => (
          <div
            key={item.id}
            className="bg-slate-500 p-3 rounded-lg pb-10 h-full hover:scale-105 transition-all ease-in-out duration-300 cursor-pointer"
          >
            <img
              src={item.background_image}
              alt={item.name}
              className=" w-full h-[80%] rounded-xl  object-cover"
            />
            <h2 className="text-[20px] dark:text-white font-bold">
              {item.name}{" "}
              <span className=" p-1 rounded-sm ml-2 text-[10px] bg-green-100 text-green-700 font-medium">
                {item.metacritic}
              </span>
            </h2>
            <h2 className="flex items-center gap-2 text-gray-200">
              <div className="flex items-center">
                <AiFillStar className=" text-yellow-300" />
                {item.rating}
              </div>
              <div className="flex items-center">
                <BiSolidMessageRounded className=" text-slate-200" />
                {item.reviews_count}
              </div>
              <div className="flex items-center">
                <AiFillFire className=" text-orange-500" />
                {item.suggestions_count}
              </div>
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};
