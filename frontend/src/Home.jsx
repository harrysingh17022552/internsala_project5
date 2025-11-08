/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Home() {
  //used useSelector to read data from store or to use data from store, here we are using books array that we used in initial state
  const booksAvailable = useSelector((store) => store.books.items);
  const userData = useSelector((store) => store.userData.user);

  return (
    <section className="w-full p-4 flex flex-col gap-12">
      {/* welcome message at home page */}
      <h1 className="text-center text-6xl md:text-7xl text-transparent bg-clip-text bg-linear-to-r from-violet-600 via-green-600 to-red-600 tracking-tight transition-colors animate-[fromTop_1s_ease]">
        Welcome to {userData.nickname}'s Book Store
      </h1>
      {/* this section maps all the categories here, the mapping first map out all categories from book array with duplicates and then remove duplicates from there and map unique categories */}
      <article className="flex flex-col gap-6">
        <h2 className="self-start text-2xl font-bold">Book Categories</h2>
        <div className="flex flex-wrap gap-4">
          {booksAvailable
            .map((item) => item.category)
            .filter((item, index, self) => {
              return self.indexOf(item) === index;
            })
            .map((item, index) => (
              <Link
                key={`book/category/${index}`}
                to={`/bookcategory/${item}`}
                className="flex justify-center p-4 border rounded-md shadow-[0.01rem_0.01rem_0.7rem_0.01rem_white_inset] hover:shadow-[0.01rem_0.01rem_0.7rem_0.01rem_blue_inset] hover:text-white hover:scale-110 hover:border-blue-700 transition-all grow sm:grow-0 animate-[fromLeft_1s_ease]"
              >
                {item}
              </Link>
            ))}
        </div>
      </article>
      {/* this section list the popular books from book list based on rating, before mapping code first sort array based on rating in descending, apart from this in image section, if image is failed to load or unable to load with any error, it will fetch default image from the link provided with their book name.*/}
      <article className="flex flex-col gap-6">
        <h2 className="self-start text-2xl font-bold">Top Picks for You</h2>
        <div className="flex flex-wrap gap-4">
          {[...booksAvailable]
            .sort((a, b) => b.rating - a.rating)
            .slice(0, 5)
            .map((book) => (
              <div
                key={`book/popular/${book.id}`}
                className="relative flex flex-col gap-4 border rounded-md w-[200px] grow max-w-[300px] overflow-hidden justify-between animate-[fromBottom_1s_ease]"
              >
                <img
                  className="w-full h-[300px] object-cover hover:animate-[flipflop_2s_ease] transition-all duration-1000"
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
            ))}
        </div>
      </article>
    </section>
  );
}
