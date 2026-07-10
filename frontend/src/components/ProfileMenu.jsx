/*REACT*/
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

/*HOOKS*/
import useAuth from "../hooks/useAuth";

/*JS*/
import { getAvatarById } from "../js/avatar";

function ProfileMenu({ onOpen }) {

    const navigate = useNavigate();

    const { user, logout } = useAuth();

    const [isOpen, setIsOpen] = useState(false);

    const menuRef = useRef(null);

    useEffect(() => {

        function handleClickOutside(event) {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };

    }, []);

    async function handleLogout() {
        await logout();
        navigate("/");
    }

    if (!user) return null;

    return (
        <div ref={menuRef} className="relative">

            <button onClick={() => { setIsOpen(!isOpen); if (onOpen) onOpen(); }} className="flex items-center gap-3 rounded-lg px-3 py-2 transition-all duration-200 hover:bg-white/10 cursor-pointer">
                <img src={getAvatarById(user.avatar_id)} alt={user.name} className="h-10 w-10 rounded-full object-cover border-2 border-violet-600"/>

                <span className="hidden md:block text-white font-medium">
                    {user.name}
                </span>

            </button>

            {isOpen && (

                <div className="absolute right-0 mt-3 w-56 rounded-xl bg-zinc-900 border border-zinc-800 shadow-2xl overflow-hidden">

                    <button onClick={() => navigate("/profile")} className="w-full px-5 py-3 text-left text-white hover:bg-violet-600 transition">
                        Profile
                    </button>

                    <button onClick={() => navigate("/watchlist")} className="w-full px-5 py-3 text-left text-white hover:bg-violet-600 transition">
                        WatchList
                    </button>

                    <button onClick={() => navigate("/favourites")} className="w-full px-5 py-3 text-left text-white hover:bg-violet-600 transition">
                        Favourites
                    </button>

                    <div className="h-px bg-zinc-700" />

                    <button onClick={handleLogout} className="w-full px-5 py-3 text-left text-red-400 hover:bg-red-600 hover:text-white transition">
                        Logout
                    </button>

                </div>
            )}

        </div>
    );
}

export default ProfileMenu;