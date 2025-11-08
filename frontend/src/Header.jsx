import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaBarsStaggered } from "react-icons/fa6";
import { ImCross } from "react-icons/im";
import { useState } from "react";
export default function Header({ size }) {
  const userInfo = useSelector((store) => store.userData.user);
  const [navToggle, setNavToggle] = useState(false);
  return (
    <header className="w-full bg-black flex gap-4 p-4 items-center justify-between overflow-scroll whitespace-nowrap noscrollbar z-40">
      {/* left part of navigation item, take the screen size and adjust layout according to it. */}
      {size.width <= 720 ? (
        <div className="flex flex-col gap-8 p-4 text-white z-40">
          {navToggle ? (
            <div className="bg-black absolute top-0 left-0 p-8 rounded-bl-xl rounded-br-xl flex flex-col gap-8 items-start">
              <ImCross
                className="absolute right-2 top-2 text-red-500 cursor-pointer"
                onClick={() => setNavToggle(false)}
              />
              <Link to="/" className="font-bold">
                Home
              </Link>
              <Link to="/browsebooks" className="font-bold">
                Browse Books
              </Link>
              <Link to="/addbooks" className="font-bold">
                Add Books
              </Link>
            </div>
          ) : (
            <FaBarsStaggered
              className="text-white text-4xl cursor-pointer"
              onClick={() => setNavToggle(true)}
            />
          )}
        </div>
      ) : (
        <div className="flex gap-8 items-center">
          <Link to="/" className="font-bold">
            Home
          </Link>
          <Link to="/browsebooks" className="font-bold">
            Browse Books
          </Link>
          <Link to="/addbooks" className="font-bold">
            Add Books
          </Link>
        </div>
      )}
      {/* right part of navigation item */}
      <div className="flex gap-2 items-center">
        <p className="font-bold">
          {userInfo.fname} {userInfo.lname}
        </p>
        <div className="p-2 bg-gray-700 rounded-full font-bold">
          {userInfo.fname[0]}
          {userInfo.lname[0]}
        </div>
      </div>
    </header>
  );
}
