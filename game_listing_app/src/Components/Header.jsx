import jerry from "./../assets/jerry.jpeg";
import { HiOutlineSearch } from "react-icons/hi";
import { BsFillSunFill } from "react-icons/bs";
import { MdDarkMode } from "react-icons/md";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../Context/ThemeContext";
export const Header = () => {
  const [toggle, settoggle] = useState(true);
  const { theme, settheme } = useContext(ThemeContext);

  useEffect(() => {
    console.log("Theme--", theme);
  }, []);
  return (
    <div className="flex items-center p-3">
      <img src={jerry} width={50} height={50} className=" rounded-full" />
      <div className="flex bg-slate-200 p-2 w-full items-center mx-5 rounded-full ">
        <HiOutlineSearch className=" text-xl" />
        <input
          type="text"
          placeholder="Search"
          className=" bg-transparent outline-none px-2"
        />
      </div>
      <div>
        {/* comment: if toggle is on show moon else show sun */}
        {theme == "light" ? (
          <MdDarkMode
            className=" text-[38px] bg-slate-200 text-black px-1 rounded-full cursor-pointer"
            onClick={() => {
              settheme("dark");
              localStorage.setItem("theme", "dark");
            }}
          />
        ) : (
          <BsFillSunFill
            className=" text-[38px] bg-slate-200 text-black px-1 rounded-full cursor-pointer"
            onClick={() => {
              settheme("light");
              localStorage.setItem("theme", "light");
            }}
          />
        )}
      </div>
    </div>
  );
};
