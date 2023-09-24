import { useEffect } from "react";

export const TrendingGames = ({ gameList }) => {
  useEffect(() => {}, []);
  return (
    <div className=" mt-5 hidden md:block">
      <h2 className=" font-bold text-[30px] dark:text-white">Trending Games</h2>
      <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5">
        {gameList.map(
          (item, index) =>
            index < 4 && (
              <div
                key={index}
                className=" bg-slate-500 rounded-lg  group hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer"
              >
                <img
                  src={item.background_image}
                  alt={item.name}
                  className="h-[270px] rounded-lg object-cover"
                />
                <h2 className=" dark:text-neutral-200 text-[20px] font-bold p-2">
                  {item.name}
                </h2>
              </div>
            )
        )}
      </div>
    </div>
  );
};
