import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams, useNavigate } from "react-router-dom";
import { FaArrowAltCircleLeft } from "react-icons/fa";

export default function BookCategory() {
  const params = useParams();
  const navigate = useNavigate();
  const booksAvailable = useSelector((store) => store.books.items);
  const [currentBook, setCurrentBook] = useState([]);
  useEffect(() => {
    setCurrentBook(
      booksAvailable.filter((item) => item.category == params.category)
    );
  }, [booksAvailable, params]);
  return (
    <section className="w-full p-4 flex flex-col gap-12">
      <div className="flex justify-center flex-nowrap items-center gap-4">
        <div>
          <FaArrowAltCircleLeft
            className="text-3xl text-blue-600 hover:scale-110 hover:text-green-400 cursor-pointer transition-all"
            onClick={() => navigate(-1)}
          />
        </div>
        <h1 className="text-center text-6xl md:text-7xl text-transparent bg-clip-text bg-linear-to-b from-red-600 to-blue-600 tracking-tight transition-colors">
          {params.category.toUpperCase()}
        </h1>
      </div>

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
