import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { useEffect, useState } from "react";
export default function BrowseBooks() {
  const booksAvailable = useSelector((store) => store.books.items);
  const [bookList, setBookList] = useState(booksAvailable);
  const [searchValue, setSearchValue] = useState("");
  const [categorySearch, setCategorySearch] = useState("all");
  useEffect(() => {
    handleCategory();
  }, [categorySearch]);
  const handleCategory = () => {
    if (categorySearch == "all") {
      setBookList(booksAvailable);
      return;
    }
    setBookList(
      booksAvailable.filter(
        (item) => item.category.toLowerCase() == categorySearch.toLowerCase()
      )
    );
    console.log(bookList);
  };
  const handleChange = () => {
    if (searchValue.length <= 2) {
      alert("Search payload is missing");
      //not returning because, in case when user want all books, he can keep as empty and search,
      //Alert will only warn the user to give payload.
    }
    setBookList(
      booksAvailable.filter(
        (item) =>
          item.bookname.toLowerCase().includes(searchValue.toLowerCase()) ||
          item.bookauthor.toLowerCase().includes(searchValue.toLowerCase()) ||
          item.booktitle.toLowerCase().includes(searchValue.toLowerCase())
      )
    );
  };
  return (
    <section className="w-full p-4 flex flex-col gap-12">
      <h1 className="text-center text-6xl md:text-7xl text-transparent bg-clip-text bg-linear-to-r from-violet-600 via-green-600 to-red-600 tracking-tight transition-colors">
        Browse Books
      </h1>
      <div className="relative w-full sm:w-[75%] lg:w-1/2 flex justify-center items-center self-center p-4 gap-4">
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search Books ..."
          className="w-full px-4 py-4 rounded-md border"
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <FaSearch className="text-3xl cursor-pointer" onClick={handleChange} />
      </div>

      <article className="relative flex flex-col gap-6">
        <div className="flex justify-center items-center gap-4 flex-wrap sm:flex-nowrap sm:flex-row-reverse">
          <p className="text-xl text-green-500">Choose from category</p>
          <select
            className="border rounded-md self-start py-2 px-8 bg-transparent text-center z-10 appearance-auto focus:outline-none focus:ring-2 focus:ring-indigo-500"
            name="category"
            id="category"
            onChange={(e) => setCategorySearch(e.target.value)}
          >
            <option className="bg-gray-500" defaultChecked value="all">
              All
            </option>
            {booksAvailable
              .map((item) => item.category)
              .filter((item, index, self) => {
                return self.indexOf(item) === index;
              })
              .map((item, index) => (
                <option
                  className="bg-gray-500"
                  key={`category/select/${index}`}
                  value={item}
                >
                  {item}
                </option>
              ))}
          </select>
        </div>
        <div className="flex flex-wrap gap-4">
          {bookList.length > 0 ? (
            [...bookList].reverse().map((book) => (
              <div
                key={`book/${book.id}`}
                className="relative flex flex-col gap-4 border rounded-md w-[200px] grow max-w-[300px] overflow-hidden justify-between"
              >
                <img
                  className="w-full h-[300px] object-cover hover:scale-90 transition-all"
                  src={book.bookimage}
                  alt={book.booktitle}
                  onError={(e) => {
                    e.target.src = `https://placehold.co/600x900/1E3A8A/FFFFFF?text=${encodeURIComponent(
                      book.bookname
                    )}&font=montserrat`;
                  }}
                />
                <div className="flex flex-col p-4 items-start justify-between">
                  <p className="absolute bg-black py-1 px-2 top-1 right-1 text-[12px]">
                    <strong>Rating : </strong>
                    <span>{book.rating}⭐</span>
                  </p>
                  <p>
                    <strong>Name : </strong>
                    <span>{book.bookname}</span>
                  </p>
                  <p>
                    <strong>Author : </strong>
                    <span>{book.bookauthor}</span>
                  </p>
                  <p>
                    <strong>Price : </strong>
                    <span>{book.bookprice}</span>
                  </p>
                  <p>
                    <strong>Category : </strong>
                    <span>{book.category}</span>
                  </p>
                  <Link
                    className="text-blue-500 text-[12px]"
                    to={`/bookdetails/${book.id}`}
                  >
                    View Details..
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <p className="text-red-500 text-center w-full">No Book Found !</p>
          )}
        </div>
      </article>
    </section>
  );
}
