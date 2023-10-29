import { useContext, useState } from "react";
import { ImageContext } from "../App";

export const SearchField = () => {
  const [searchValue, setSearchValue] = useState();
  const { fetchdata } = useContext(ImageContext);

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleButtonSearch = () => {
    fetchdata(
      `search/photos?page=1&query=${searchValue}&client_id=${
        import.meta.env.VITE_APP_ACCESS_KEY
      }`
    );
    setSearchValue("");
  };

  const handleEnterSearch = (e) => {
    if (e.key === "Enter") {
      fetchdata(
        `search/photos?page=1&query=${searchValue}&client_id=${
          import.meta.env.VITE_APP_ACCESS_KEY
        }`
      );
      setSearchValue("");
    }
  };
  return (
    <div className="flex gap-2">
      <input
        type="text"
        className=" bg-gray-200 border border-gray-300 text-sm w-full indent-2 p-2.5 outline-none focus:border-blue-500 focus:ring-2 rounded-[20px]"
        placeholder="Search Anything"
        value={searchValue}
        onChange={handleInputChange}
        onKeyDown={handleEnterSearch}
      />
      <button
        onClick={handleButtonSearch}
        disabled={!searchValue}
        className=" bg-blue-500 px-6 py-2.5 rounded-[20px] text-white focus:ring-2 focus:ring-blue-300 disabled:bg-gray-400 cursor-pointer hover:bg-blue-400"
      >
        Search
      </button>
    </div>
  );
};
