import { useSelector, useDispatch } from "react-redux";
import { addBook } from "../store/slices/bookSlice";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
export default function AddBook() {
  //using useDispatch that dispatch our action with the store and make the changes according to our actions
  const dispatch = useDispatch();
  //using useRef to make some changes on button contain while adding books, this will make user experience more better.
  const btnRef = useRef(null);
  const navigate = useNavigate();
  //used useSelector to read data from store or to use data from store, here we are using books array that we used in initial state, the purpose to use it here to calculate the id for next upcoming book.
  const currentBook = useSelector((store) => store.books.items);

  //state manipulates when there new book added.
  const [newBook, setNewBook] = useState({
    id: 0,
    bookname: "",
    bookauthor: "",
    booktitle: "",
    bookprice: "",
    bookpublished: "",
    category: "",
    rating: "",
    description: "",
    bookimage: "",
  });

  //this function make changes in button text & color using btnRef as it moves forward
  // & then dispatch the new payload to the action in store, to push this payload in our original array.
  // & on successfull submission, this alert user successfull message and then send them to the browse page where there added book is listed in front as per descending id's sorting.
  const handleSubmit = () => {
    btnRef.current.style.color = "blue";
    btnRef.current.textContent = "Submitting..";
    btnRef.current.disabled = true;
    setTimeout(() => {
      dispatch(
        addBook({
          ...newBook,
          bookimage: `https://placehold.co/600x900/1E3A8A/FFFFFF?text=${encodeURIComponent(
            newBook.bookname
          )}&font=montserrat`,
          id: Math.max(...currentBook.map((item) => item.id)) + 1,
        })
      );
      btnRef.current.style.color = "green";
      btnRef.current.textContent = "Submitted";
      alert("Book Added Successfully.");
      navigate("/browsebooks");
    }, 3000);
  };
  return (
    // this section contains the form that takes the required information from the user and onchange of there respective input field it manipulates the newBook State.
    //It has some input validation like rating ranges from 0 to 10, published date ranges from above 1500 and till current year.
    //all fields are mandatory as per book structure
    //Submit button will appear only after all mandatory fields are completed.
    <section className="w-full flex flex-col gap-8 p-4 items-center">
      <h1 className="text-center text-6xl md:text-7xl text-transparent bg-clip-text bg-linear-to-r from-red-600 to-blue-600 tracking-tight transition-colors animate-[fromTop_2s_ease]">
        Add Book
      </h1>
      <div className="w-full flex items-center flex-col gap-8 animate-[fromBottom_2s_ease]">
        <article className="flex flex-col gap-4  w-full md:w-1/2">
          <div className="w-full flex gap-4 flex-wrap md:flex-nowrap">
            <input
              className="py-2 px-4 rounded-md border grow"
              type="text"
              name="bname"
              id="bname"
              placeholder="Enter Book Name*"
              onChange={(e) =>
                setNewBook((prev) => ({ ...prev, bookname: e.target.value }))
              }
              required
              autoFocus
            />
            <input
              className="py-2 px-4 rounded-md border grow"
              type="text"
              name="bauth"
              id="bauth"
              placeholder="Enter Author Name*"
              onChange={(e) =>
                setNewBook((prev) => ({ ...prev, bookauthor: e.target.value }))
              }
              required
            />
          </div>
          <div className="flex flex-col gap-4">
            <div className="w-full flex gap-4 flex-wrap md:flex-nowrap">
              <input
                className="py-2 px-4 rounded-md border grow"
                type="number"
                name="bprice"
                id="bprice"
                placeholder="Enter Book Price*"
                onChange={(e) =>
                  setNewBook((prev) => ({ ...prev, bookprice: e.target.value }))
                }
                required
              />
              <input
                className="py-2 px-4 rounded-md border grow"
                type="number"
                name="bpub"
                id="bpub"
                placeholder="When Book Published*"
                min={1500}
                max={new Date().getFullYear()}
                onChange={(e) =>
                  setNewBook((prev) => ({
                    ...prev,
                    bookpublished: e.target.value,
                  }))
                }
                required
              />
            </div>
            <div className="w-full flex gap-4 flex-wrap md:flex-nowrap">
              <input
                className="py-2 px-4 rounded-md border grow"
                type="text"
                name="bcat"
                id="bcat"
                placeholder="Category*"
                onChange={(e) =>
                  setNewBook((prev) => ({ ...prev, category: e.target.value }))
                }
                required
              />
              <input
                className="py-2 px-4 rounded-md border grow"
                type="number"
                name="brate"
                id="brate"
                min={0}
                max={10}
                placeholder="Rating out of 10*"
                onChange={(e) =>
                  setNewBook((prev) => ({
                    ...prev,
                    rating: e.target.value,
                  }))
                }
                required
              />
            </div>
          </div>
          <textarea
            className="py-2 px-4 rounded-md border grow"
            name="btitle"
            id="btitle"
            placeholder="Enter Book Title*"
            onChange={(e) =>
              setNewBook((prev) => ({ ...prev, booktitle: e.target.value }))
            }
            required
          ></textarea>
          <textarea
            className="py-2 px-4 rounded-md border grow"
            name="bdesc"
            id="bdesc"
            placeholder="Enter Book Description*"
            onChange={(e) =>
              setNewBook((prev) => ({ ...prev, description: e.target.value }))
            }
            required
          ></textarea>
        </article>
        <div className="text-red-500">
          {newBook.bookname.length > 2 ? (
            newBook.bookauthor.length > 2 ? (
              newBook.bookprice > 0 ? (
                newBook.bookpublished > 1500 &&
                newBook.bookpublished <= new Date().getFullYear() ? (
                  newBook.category.length > 2 ? (
                    newBook.rating >= 0 && newBook.rating <= 10 ? (
                      newBook.booktitle.length > 2 ? (
                        newBook.description.length > 2 ? (
                          <button
                            ref={btnRef}
                            className="py-2 px-4 rounded-md shadow-[0.01rem_0.01rem_0.5rem_0.1rem_white_inset] text-white"
                            onClick={handleSubmit}
                          >
                            Submit
                          </button>
                        ) : (
                          <p className="error">
                            Please Enter Valid Book Description
                          </p>
                        )
                      ) : (
                        <p className="error">Please Enter vaild Book Title</p>
                      )
                    ) : (
                      <p className="error">Please Enter valid Rating</p>
                    )
                  ) : (
                    <p className="error">Please Enter Valid Category</p>
                  )
                ) : (
                  <p className="error">Please Enter valid Publish Year</p>
                )
              ) : (
                <p className="error">Please Enter valid Book Price</p>
              )
            ) : (
              <p className="error">Please Enter vaild Author Name</p>
            )
          ) : (
            <p className="error">
              All mandatory field to be fulfilled to enable Submit Button
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
