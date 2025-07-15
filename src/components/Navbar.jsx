import { useState } from "react";
import { CgSelect } from "react-icons/cg";
import { LiaBarsSolid } from "react-icons/lia";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const levels = [
    { label: "A1 লেভেল - (Beginner)", path: "/a1" },
    { label: "A2 লেভেল - (Elementary)", path: "/a2" },
    { label: "B1 লেভেল - (Intermediate)", path: "/b1" },
    { label: "B2 লেভেল - (Upper Intermediate)", path: "/b2" },
    { label: "C1 লেভেল - (Advanced)", path: "/c1" },
    { label: "C2 লেভেল - (Proficient)", path: "/c2" },
  ];
  const SpokenDropdown = ({ isMobile = false }) => (
    <div className="dropdown dropdown-center">
      <div
        tabIndex={0}
        role="button"
        className="flex gap-1.5 items-center cursor-pointer"
      >
        Spoken <CgSelect />
      </div>
      <ul
        tabIndex={0}
        className={`dropdown-content menu bg-base-100 rounded-box z-10 ${
          isMobile ? "w-full" : "w-52"
        } p-2 shadow-sm`}
      >
        {levels.map((level, index) => (
          <li key={index}>
            <Link to={level.path}>{level.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
  return (
    <div className="py-1.5 border-b border-gray-300 ">
      <div className="w-11/12  max-w-[1300px] mx-auto flex justify-between items-center">
        <img
          src="/englishzone.png"
          className="lg:w-60 w-48"
          alt="englishzone"
        />
        <div className="flex gap-5 items-center">
          <ul className="lg:flex hidden gap-5 items-center text-md">
            <li>
              <Link to="/">Home</Link>
            </li>
            <SpokenDropdown />
            <li>
              <Link to="/">Vocabulary</Link>
            </li>
            <li>
              <Link to="/">Grammar</Link>
            </li>
            <li>
              <Link to="/">Quiz</Link>
            </li>
            <button className="border border-gray-300 py-[2px] px-4 rounded-full cursor-pointer">
              Login
            </button>
          </ul>
          {open ? (
            <RxCross2
              onClick={() => setOpen(!open)}
              className="lg:hidden text-xl cursor-pointer"
            />
          ) : (
            <LiaBarsSolid
              onClick={() => setOpen(!open)}
              className="lg:hidden text-xl cursor-pointer"
            />
          )}

          {open && (
            <ul className="flex absolute bg-white w-64 p-5 h-full top-13 right-0 flex-col lg:hidden gap-4 text-sm">
              <li>
                <Link to="/">Home</Link>
              </li>
              <SpokenDropdown />
              <li>
                <Link to="/">Vocabulary</Link>
              </li>
              <li>
                <Link to="/">Grammar</Link>
              </li>
              <li>
                <Link to="/">Quiz</Link>
              </li>
              <button className="border border-gray-300 py-[2px] px-4 rounded-full cursor-pointer">
                Login
              </button>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
