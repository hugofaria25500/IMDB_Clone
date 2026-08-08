/*REACT*/
import { useState } from "react";
import {useNavigate} from "react-router-dom";

/*IMAGES*/
import logoImage from "../assets/logo_purple_background.png"

/*COMPONENTS*/
import NavbarOption from "./NavbarOption";
import ProfileMenu from "./ProfileMenu";

/*HOOKS*/
import useAuth from "../hooks/useAuth";

function Navbar() {

    const {isAuthenticated} = useAuth();
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <nav className="absolute inset-0 h-[100px] bg-black/50 w-full flex items-center justify-between p-4 pl-4 pr-4 md:pl-12 md:pr-12 z-20">
                <div className="w-[130px] md:w-[250px] flex items-center justify-center hover:cursor-pointer" onClick={() => navigate("/")}>
                    <img src={logoImage} className="w-full" alt="CineFlix" />
                </div>
                
                <div className="hidden md:block">
                    <ul className="flex space-x-2 text-white font-semibold">
                        <NavbarOption to="/" label="Home" isOption={true}/>
                        <NavbarOption to="/movies" label="Movies" isOption={true}/>
                        <NavbarOption to="/series" label="Series" isOption={true} />
                        <NavbarOption to="https://github.com/hugofaria25500/IMDB_Clone" label="Project" isOption={true}/>
                    </ul>
                </div>

                <div className="flex items-center gap-2">
                    {/* Hamburger button — mobile only */}
                    <button
                        className="md:hidden flex flex-col gap-1.5 p-2"
                        onClick={() => setMenuOpen(prev => !prev)}
                        aria-label="Toggle navigation"
                    >
                        <span className={`block h-0.5 w-6 bg-white transition-all duration-300 origin-center ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                        <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0 scale-x-0' : ''}`} />
                        <span className={`block h-0.5 w-6 bg-white transition-all duration-300 origin-center ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                    </button>

                    

                    {isAuthenticated ? (
                        <ProfileMenu />
                    ) : (
                        <NavbarOption to="/login" label="Log In" isOption={false} />
                    )}
                </div>

                {/* Mobile dropdown */}
                {menuOpen && (
                    <div
                        className="md:hidden absolute top-full left-0 right-0 bg-black/95 border-t border-violet-900/50 py-3 flex flex-col z-30"
                        onClick={() => setMenuOpen(false)}
                    >
                        <NavbarOption to="/" label="Home" isOption={true}/>
                        <NavbarOption to="/movies" label="Movies" isOption={true}/>
                        <NavbarOption to="/series" label="Series" isOption={true} />
                        <NavbarOption to="https://github.com/hugofaria25500/IMDB_Clone" label="Project" isOption={true}/>
                    </div>
                )}

                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[3px] bg-violet-900/70 blur-md" />
            </nav>
        </>
    );
};

export default Navbar;