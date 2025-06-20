import React, { useState, useRef, useContext } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { navItems } from "../hooks/paths";
import { NimadurIcon, SearchIcon } from "../assets/icons";
import ManImg from "../assets/images/photo.svg";
import { Context } from "../Context/Context";

const Header = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [searchActive, setSearchActive] = useState(false);
  const inputRef = useRef(null);
  const { searchRes, setSearchRes } = useContext(Context);
  const { ticketsList } = useContext(Context);

  const handleSearchClick = () => {
    setSearchActive(true);
    setTimeout(() => inputRef.current?.focus(), 10);
  };

  const handleBlur = () => {
    setSearchActive(false);
  };

  function handleSearch(e) {
    if (pathname == "/tickets") {
      let filterTicket = ticketsList.filter((item) =>
        item.username.toLowerCase().includes(e.target.value.toLowerCase())
      );
      if (!e.target.value) {
        setSearchRes(ticketsList);
      } else {
        setSearchRes(filterTicket);
      }
    }
  }

  return (
    <div className="flex items-center justify-between mb-[58px]">
      <strong className="font-bold text-[24px] text-[#252733]">
        {navItems.find((item) => item.path === pathname)?.title || (
          <svg
            onClick={() => navigate(-1)}
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            fill="currentColor"
            className="bi bi-arrow-left"
            viewBox="0 0 16 16"
            style={{ cursor: "pointer" }}
          >
            <path
              fillRule="evenodd"
              d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
            />
          </svg>
        )}
      </strong>

      {(pathname === "/tickets" ||
        pathname === "/" ||
        pathname === "/tickets/create") && (
        <div className="flex items-center gap-[24px] justify-center">
          <input
            onChange={handleSearch}
            ref={inputRef}
            onBlur={handleBlur}
            type="text"
            placeholder="Search..."
            className={`
              ${
                searchActive
                  ? "w-[200px] opacity-100 scale-100"
                  : "w-0 opacity-0 scale-95"
              }
              text-[20px] shadow-md shadow-blue-400
              transition-all duration-300 border border-black px-2 py-1 rounded
              outline-none overflow-hidden
            `}
          />

          {!searchActive && (
            <button
              onClick={handleSearchClick}
              className="transition-all duration-300"
            >
              <SearchIcon />
            </button>
          )}

          <NimadurIcon />
          <div className="flex items-center justify-center gap-[14px]">
            <p>Jones Ferdinand</p>
            <img src={ManImg} alt="" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
