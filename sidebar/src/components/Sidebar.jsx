import { AnimatePresence, motion } from "framer-motion";
import {
  AiFillHeart,
  AiFillHome,
  AiTwotoneFileExclamation,
} from "react-icons/ai";
import { FaBars, FaUser } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { BiAnalyse, BiCog, BiSearch } from "react-icons/bi";
import { BsCartCheck } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { useState } from "react";
const routes = [
  {
    path: "/",
    name: "Home",
    icon: <AiFillHome />,
  },
  {
    path: "/users",
    name: "Users",
    icon: <FaUser />,
  },
  {
    path: "/messages",
    name: "Messages",
    icon: <MdMessage />,
  },
  {
    path: "/analytics",
    name: "Analytics",
    icon: <BiAnalyse />,
  },
  {
    path: "/file-manager",
    name: "File Manager",
    icon: <AiTwotoneFileExclamation />,
  },
  {
    path: "/order",
    name: "Order",
    icon: <BsCartCheck />,
  },
  {
    path: "/settings",
    name: "Settings",
    icon: <BiCog />,
    exact: true,
  },
  {
    path: "/saved",
    name: "Saved",
    icon: <AiFillHeart />,
  },
];
export const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen); // for retraction of sidebar

  const inputAnaimation = {
    hidden: {
      width: 0,
      padding: 0,
      opacity: 0,
    },
    show: {
      width: "140px",
      padding: "5px 15px",
      opacity: 1,
      transition: {
        duration: 0.2,
      },
    },
  };
  const showAnaimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      width: "auto",
      opacity: 1,
      transition: {
        duration: 0.2,
      },
    },
  };
  return (
    <div className="main-container">
      <motion.div
        animate={{
          width: isOpen ? "200px" : "40px",
          transition: {
            duration: 0.4,
            type: "spring",
            damping: 12,
          },
        }}
        className="sidebar"
      >
        <div className="top-section">
          {isOpen && (
            <motion.h1
              variants={showAnaimation}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="logo"
            >
              Qwerty
            </motion.h1>
          )}

          <div className="bars">
            <FaBars onClick={toggle} />
          </div>
        </div>
        <div className="search">
          <div className="search-icon">
            <BiSearch />
          </div>
          <AnimatePresence>
            {isOpen && (
              <motion.input
                initial="hidden"
                animate="show"
                exit="hidden"
                variants={inputAnaimation}
                type="text"
                placeholder="Search.."
              />
            )}
          </AnimatePresence>
        </div>
        <section className="routes">
          {routes.map((route) => (
            <NavLink
              activeClassname="active"
              to={route.path}
              key={route.name}
              className="link"
            >
              <div className="icon">{route.icon}</div>
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    variants={showAnaimation}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className="link_text"
                  >
                    {route.name}
                  </motion.div>
                )}
              </AnimatePresence>
            </NavLink>
          ))}
        </section>
      </motion.div>
      <main>{children}</main>
    </div>
  );
};
