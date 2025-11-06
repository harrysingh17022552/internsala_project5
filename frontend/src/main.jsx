import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import AddBook from "./component/AddBook.jsx";
import BrowseBooks from "./component/BrowseBooks.jsx";
import BookCategory from "./component/BookCategory";
import BookDetails from "./component/BookDetails.jsx";
const RootProvider = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        { path: "addbook", element: <AddBook /> },
        { path: "browsebooks", element: <BrowseBooks /> },
        { path: "bookcategory/:category", element: <BookCategory /> },
        { path: "bookdetails/:id", element: <BookDetails /> },
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
