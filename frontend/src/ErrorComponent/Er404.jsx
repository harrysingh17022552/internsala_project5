import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
export default function Er404() {
  const navigate = useNavigate();
  return (
    <section className="w-full h-screen flex flex-col justify-center items-center text-red-500 font-extrabold text-xl md:text-3xl gap-4">
      <h1>404 : Hey this page is not available !</h1>
      <p className="text-sm text-white">
        <span className="text-orange-600 font-light tracking-widest">{window.location.href}</span> is not valid !
      </p>
      <div className="text-sm flex gap-4 justify-center items-center">
        <div>
          <FaArrowLeft
            className="text-2xl text-blue-500 cursor-pointer"
            onClick={() => navigate("/")}
          />
        </div>
        <p className="text-blue-600">You may go back</p>
      </div>
    </section>
  );
}
