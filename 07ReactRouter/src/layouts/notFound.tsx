import { useNavigate } from "react-router-dom";
import { useAuth } from "../utils/Auth";

export const NotFound = () => {
  const navigate = useNavigate();
  const { isLoggedIn } = useAuth();
  const handleNotFound = () => {
    isLoggedIn ? navigate("/admin") : navigate("/");
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen flex-col space-y-8 text-4xl">
        <h1>Not Found!</h1>

        <button
          onClick={handleNotFound}
          className="border p-4 text-2xl font-medium rounded-2xl cursor-pointer"
          type="button"
        >
          {isLoggedIn ? "Back to Admin" : "Back to Home"}
        </button>
      </div>
    </>
  );
};
