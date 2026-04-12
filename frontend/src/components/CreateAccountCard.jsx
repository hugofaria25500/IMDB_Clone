/*IMAGES*/
import mainLogo from "../assets/main_logo.png"

function CreateAccountCard() {
    return (
        <div className="relative h-[500px] w-[400px] mt-[100px] p-[2px] rounded-xl bg-gradient-to-r from-purple-600 via-fuchsia-500 to-purple-700 shadow-[0_0_30px_rgba(168,85,247,0.6)] z-20">
    
            {/* Inner Card */}
            <div className="h-full w-full bg-black/80 backdrop-blur-xl rounded-xl p-6 flex flex-col justify-center">
    
            {/* Logo */}
            <div className="flex justify-center mb-4">
                <img src={mainLogo} alt="CineFlix Logo" className="h-12 w-auto" />
            </div>

            <p className="text-md text-gray-400 mb-6 text-center font-semibold">
                Create your CineFlix account
            </p>
    
            <form className="flex flex-col gap-4">

                <input
                    type="text"
                    placeholder="Username"
                    className="p-3 rounded-md bg-white/10 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-purple-500 transition cursor-pointer"
                />
    
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
                    Create Account
                </button>
            </form>

          </div>
          
        </div>
    );
}

export default CreateAccountCard;