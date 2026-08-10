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
            <nav className="absolute top-0 left-0 right-0 h-[72px] bg-black/60 backdrop-blur-md flex items-center justify-between px-4 md:px-12 z-50">
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

                <div className="flex items-center gap-3">

                    <button
                        className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-lg hover:bg-white/10 transition"
                        onClick={() => setMenuOpen(prev => !prev)}
                        aria-label="Toggle navigation"
                    >
                        <div className="flex flex-col gap-1.5">
                            <span
                                className={`block w-5 h-0.5 bg-white transition-all duration-300 ${
                                    menuOpen ? "rotate-45 translate-y-2" : ""
                                }`}
                            />

                            <span
                                className={`block w-5 h-0.5 bg-white transition-all duration-300 ${
                                    menuOpen ? "opacity-0" : ""
                                }`}
                            />

                            <span
                                className={`block w-5 h-0.5 bg-white transition-all duration-300 ${
                                    menuOpen ? "-rotate-45 -translate-y-2" : ""
                                }`}
                            />
                        </div>
                    </button>

                    {isAuthenticated ? (
                        <ProfileMenu />
                    ) : (
                        <NavbarOption
                            to="/login"
                            label="Log In"
                            isOption={false}
                        />
                    )}

                </div>

                {/* Mobile dropdown */}
               {menuOpen && (
                    <div
                        className="
                            md:hidden
                            absolute
                            top-full
                            left-0
                            right-0
                            bg-black/95
                            backdrop-blur-xl
                            border-t
                            border-violet-900/40
                            px-4
                            py-4
                            shadow-2xl
                        "
                        onClick={() => setMenuOpen(false)}
                    >
                        <div className="flex flex-col gap-1">
                            <NavbarOption
                                to="/"
                                label="Home"
                                isOption={true}
                            />

                            <NavbarOption
                                to="/movies"
                                label="Movies"
                                isOption={true}
                            />

                            <NavbarOption
                                to="/series"
                                label="Series"
                                isOption={true}
                            />

                            <NavbarOption
                                to="https://github.com/hugofaria25500/IMDB_Clone"
                                label="Project"
                                isOption={true}
                            />
                        </div>
                    </div>
                )}

                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[3px] bg-violet-900/70 blur-md" />
            </nav>
        </>
    );
};

export default Navbar;