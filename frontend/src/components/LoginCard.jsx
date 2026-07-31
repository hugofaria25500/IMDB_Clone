/*REACT*/
import { useState } from "react";
import { useNavigate } from "react-router-dom";

/*HOOKS*/
import useAuth from "../hooks/useAuth";

/*IMAGES*/
import mainLogo from "../assets/main_logo.png"

function LoginCard() {
    const navigate = useNavigate();

    const auth = useAuth();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e) {

        e.preventDefault();
        setError("");

        if (!email || !password) {
            setError("Please fill in all fields.");
            return;
        }

        try {
            setLoading(true);
            await auth.login(email, password);
            navigate("/");
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }

    }

    return (
        <div className="relative h-[500px] w-[400px] mt-[100px] p-[2px] rounded-xl bg-gradient-to-r from-purple-600 via-fuchsia-500 to-purple-700 shadow-[0_0_30px_rgba(168,85,247,0.6)] z-20">

            <div className="h-full w-full bg-black/80 backdrop-blur-xl rounded-xl p-6 flex flex-col justify-center">

                {/* Logo */}
                <div className="flex justify-center mb-4">
                    <img
                        src={mainLogo}
                        alt="CineFlix Logo"
                        className="h-12 w-auto"
                    />
                </div>

                <p className="text-md text-gray-400 mb-6 text-center font-semibold">
                    Access your CineFlix account
                </p>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">

                    <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="p-3 rounded-md bg-white/10 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-purple-500 transition" />

                    <input type="password" placeholder="Password" value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="p-3 rounded-md bg-white/10 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-purple-500 transition"
                    />

                    {error && (
                        <p className="text-sm text-red-400">
                            {error}
                        </p>
                    )}

                    <button
                        type="submit"
                        disabled={loading}
                        className="mt-4 py-3 rounded-md bg-gradient-to-r from-purple-500 to-fuchsia-500 text-white font-semibold hover:scale-105 transition shadow-lg shadow-purple-500/40 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {loading ? "Signing In..." : "Log In"}
                    </button>

                </form>

                {/* Forgot password */}
                <div className="flex justify-center items-center mt-4 text-xs text-gray-400">
                    <button
                        type="button"
                        className="hover:text-purple-400 transition"
                    >
                        Forgot password?
                    </button>
                </div>

                {/* Divider */}
                <div className="flex items-center gap-3 my-2">
                    <div className="flex-1 h-px bg-gray-700" />
                    <span className="text-xs text-gray-500">
                        OR
                    </span>
                    <div className="flex-1 h-px bg-gray-700" />
                </div>

                {/* Register */}
                <div className="flex flex-col justify-center items-center">

                    <span className="text-sm text-gray-400">
                        Don't have an account?
                    </span>

                    <button
                        type="button"
                        onClick={() => navigate("/create-account")}
                        className="mt-2 px-4 py-2 text-sm rounded-md bg-gradient-to-r from-purple-500 to-fuchsia-500 text-white font-semibold hover:scale-105 transition shadow-lg shadow-purple-500/40"
                    >
                        Create Account
                    </button>

                </div>

            </div>

        </div>
    );
}

export default LoginCard;