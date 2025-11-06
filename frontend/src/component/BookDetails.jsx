import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaArrowAltCircleLeft } from "react-icons/fa";
export default function BookDetails() {
  const params = useParams();
  const navigate = useNavigate();
  console.log(params.id);
  const books = useSelector((store) => store.books.items);
  return books
    .filter((item) => parseInt(item.id) === parseInt(params.id))
    .map((book) => (
      <section
        key={`unique/bookdetails/${book.id}`}
        className="w-full flex flex-col justify-center items-center gap-4 p-4"
      >
        <div className="flex flex-nowrap items-center gap-4">
          <div>
            <FaArrowAltCircleLeft
              className="text-3xl text-blue-600 hover:scale-110 hover:text-green-400 cursor-pointer transition-all"
              onClick={() => navigate(-1)}
            />
          </div>
          <h2 className="text-4xl">{book.bookname.toUpperCase()}</h2>
        </div>
        <h3 className="text-xl">{book.booktitle}</h3>
        <div className="w-full justify-center flex flex-wrap sm:flex-nowrap gap-8">
          <img
            className="w-full sm:w-1/3 lg:w-1/6 object-cover rounded-lg  transition-all"
            src={book.bookimage}
            alt={book.booktitle}
            onError={(e) => {
              e.target.src = `https://placehold.co/600x900/1E3A8A/FFFFFF?text=${encodeURIComponent(
                book.bookname
              )}&font=montserrat`;
            }}
          />
          <div className="flex flex-col gap-2 justify-center md:text-xl items-start">
            <p>
              <strong>Author : </strong>
              <span>{book.bookauthor}</span>
            </p>
            <p>
              <strong>Published In : </strong>
              <span>{book.bookpublished}</span>
            </p>
            <p>
              <strong>Price : </strong>
              <span>{book.bookprice}</span>
            </p>
            <p>
              <strong>Category : </strong>
              <span>{book.category}</span>
            </p>
            <p>
              <strong>Rating : </strong>
              <span>{book.rating}</span>
            </p>
            <p>
              <strong>Description : </strong>
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                est dignissimos libero dolores. Dolore quod officia, eveniet
                ratione temporibus autem necessitatibus voluptates ea optio est
                id quo fugit placeat expedita!
              </span>
            </p>
          </div>
        </div>
      </section>
    ));
}
