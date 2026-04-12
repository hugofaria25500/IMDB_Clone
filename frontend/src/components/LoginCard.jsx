/*REACT*/
import { useNavigate } from "react-router-dom";

/*IMAGES*/
import mainLogo from "../assets/main_logo.png"

function LoginCard() {
    const navigate = useNavigate();

    return (
      <div className="relative h-[500px] w-[400px] mt-[100px] p-[2px] rounded-xl bg-gradient-to-r from-purple-600 via-fuchsia-500 to-purple-700 shadow-[0_0_30px_rgba(168,85,247,0.6)] z-20">

          {/* Inner Card */}
          <div className="h-full w-full bg-black/80 backdrop-blur-xl rounded-xl p-6 flex flex-col justify-center">

          {/* Logo */}
          <div className="flex justify-center mb-4">
              <img src={mainLogo} alt="CineFlix Logo" className="h-12 w-auto" />
          </div>

          <p className="text-md text-gray-400 mb-6 text-center font-semibold">
              Access your CineFlix account
          </p>

          <form className="flex flex-col gap-4">
              <input
                type="email"
                placeholder="Email"
                className="p-3 rounded-md bg-white/10 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-purple-500 transition cursor-pointer"
              />

              <input
                  type="password"
                  placeholder="Password"
                  className="p-3 rounded-md bg-white/10 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-purple-500 transition cursor-pointer"
              />

              <button
                  type="submit"
                  className="mt-4 py-3 rounded-md bg-gradient-to-r from-purple-500 to-fuchsia-500 text-white font-semibold hover:scale-105 transition shadow-lg shadow-purple-500/40 cursor-pointer"
                >
                  Log In
              </button>
          </form>

          {/* Options */}
          <div className="flex justify-center items-center mt-4 text-xs text-gray-400">
              <a href="#" className="hover:text-purple-400 transition">
                  Forgot password?
              </a>
            </div>

          {/* Divider */}
          <div className="flex items-center gap-3 my-2">
              <div className="flex-1 h-px bg-gray-700"></div>
                  <span className="text-xs text-gray-500">OR</span>
              <div className="flex-1 h-px bg-gray-700"></div>
            </div>

          {/* Sign Up */}
          <div className="flex flex-col justify-center items-center">
              <span className="text-sm text-gray-400" >Don't have an account?</span>       
              <button
                  type="button"
                  onClick={() => navigate("/create-account")}
                  className="mt-2 p-2 pl-4 pr-4 text-sm rounded-md bg-gradient-to-r from-purple-500 to-fuchsia-500 text-white font-semibold hover:scale-105 transition shadow-lg shadow-purple-500/40 cursor-pointer"
              >
                  Create Account
            </button>
          </div>

        </div>

      </div>
    );
}

export default LoginCard;