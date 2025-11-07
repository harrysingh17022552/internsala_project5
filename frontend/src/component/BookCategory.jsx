import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams, useNavigate } from "react-router-dom";
import { FaArrowAltCircleLeft } from "react-icons/fa";

export default function BookCategory() {
  // this returns the object that contain all the params that we dynamically allocated in route section
  const params = useParams();
  //used to navigate to the page
  const navigate = useNavigate();
  //used useSelector to read data from store or to use data from store, here we are using books array that we used in initial state
  const booksAvailable = useSelector((store) => store.books.items);
  //this is another and efficient way to keep categorized book separately instead os directly mapping the books in user interface.
  //this method will first categorize book in different array on first load and when ever booksAvailable and params changes
  const [currentBook, setCurrentBook] = useState([]);
  useEffect(() => {
    setCurrentBook(
      booksAvailable.filter(
        (item) => item.category.toLowerCase() == params.category.toLowerCase()
      )
    );
  }, [booksAvailable, params]);
  return (
    <section className="w-full p-4 flex flex-col gap-12">
      <div className="flex justify-center flex-nowrap items-center gap-4">
        {/* navigation area to move one step backward */}
        <div>
          <FaArrowAltCircleLeft
            className="text-3xl text-blue-600 hover:scale-110 hover:text-green-400 cursor-pointer transition-all"
            onClick={() => navigate(-1)}
          />
        </div>
        {/* page heading & that is the category name */}
        <h1 className="text-center text-6xl md:text-7xl text-transparent bg-clip-text bg-linear-to-b from-red-600 to-blue-600 tracking-tight transition-colors">
          {params.category.toUpperCase()}
        </h1>
      </div>
      {/* list the categorized book in reversed order so that recently added book listed first and whenever there is no book of that category then it render no book found message */}
      <article className="relative flex flex-col gap-6">
        <div className="flex flex-wrap gap-4">
          {currentBook.length > 0 ? (
            [...currentBook].reverse().map((book) => (
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
