import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Home from "./Home.jsx";
import AddBook from "./component/AddBook.jsx";
import BrowseBooks from "./component/BrowseBooks.jsx";
import BookCategory from "./component/BookCategory";
import BookDetails from "./component/BookDetails.jsx";
import Er404 from "./ErrorComponent/Er404.jsx";

const RootProvider = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <Er404 message="Oops! Something went wrong." />,
      children: [
        { path: "/", element: <Home /> },
        { path: "addbooks", element: <AddBook /> },
        { path: "browsebooks", element: <BrowseBooks /> },
        {
          path: "bookcategory/:category",
          element: <BookCategory />,
          errorElement: (
            <Er404 message="Hey, this kind of Book Category does not exist" />
          ),
        },
        {
          path: "bookdetails/:id",
          element: <BookDetails />,
          errorElement: (
            <Er404 message="Hey, this kind of Book does not exist" />
          ),
        },
        { path: "*", element: <Er404 message="Hey, this page is not available" /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RootProvider />
  </StrictMode>
);
