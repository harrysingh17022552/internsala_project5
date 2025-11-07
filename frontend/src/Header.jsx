import { Link } from "react-router-dom";
export default function Header({ user }) {
  return (
    <header className="w-full bg-black flex gap-4 p-4 items-center justify-between overflow-scroll whitespace-nowrap noscrollbar">
      {/* left part of navigation item */}
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
      {/* right part of navigation item */}
      <div className="flex gap-2 items-center">
        <p className="font-bold">
          {user.fname} {user.lname}
        </p>
        <div className="p-2 bg-gray-700 rounded-full font-bold">
          {user.fname[0]}
          {user.lname[0]}
        </div>
      </div>
    </header>
  );
}
