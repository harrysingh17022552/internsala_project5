import "./App.css";
import Header from "./Header";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import myStore from "./store/Store";
function App() {
  const [user, setUSer] = useState({ fname: "Harish", lname: "Nigam" });
  return (
    // this is main component of the application, so let us provide our store to this component
    <main className="flex flex-col gap-8 w-full min-h-screen overflow-scroll noscrollbar">
      <Provider store={myStore}>
        <Header user={user} />
        {/* render the children root of app route here, down below component will render one common component that will be Header*/}
        <Outlet />
      </Provider>
    </main>
  );
}

export default App;
