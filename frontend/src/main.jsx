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

//Routing user, to their specific component for a static route or dynamic route, currently routes except root are the children of the our main App Component, to share some common component.
//Error Boundary element is also provided whenever there is wrong path or any kind of error occurs.
const RootProvider = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        { path: "/", element: <Home /> },
        { path: "addbooks", element: <AddBook /> },
        { path: "browsebooks", element: <BrowseBooks /> },
        { path: "bookcategory/:category", element: <BookCategory /> },
        { path: "bookdetails/:id", element: <BookDetails /> },
      ],
      ErrorBoundary: Er404,
    },
  ]);
  return <RouterProvider router={router} />;
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RootProvider />
  </StrictMode>
);
