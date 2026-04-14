/*IMAGES*/
import logoImage from "../assets/logo_purple_background.png"

/*COMPONENTS*/
import NavbarOption from "./NavbarOption";

function Navbar() {
    return (
        <>
            <nav className="absolute inset-0 h-[100px] bg-black/50 w-full flex items-center justify-between p-4 pl-12 pr-12 z-20">
                <div className="w-[250px] flex items-center justify-center">
                    <img src={logoImage} className="w-full" alt="CineFlix" />
                </div>
                
                <div>
                    <ul className="flex space-x-2 text-white font-semibold">
                        <NavbarOption to="/" label="Home" isOption={true}/>
                        <NavbarOption to="/movies" label="Movies" isOption={true}/>
                        <NavbarOption to="/series" label="Series" isOption={true} />
                        <NavbarOption to="https://github.com/hugofaria25500/IMDB_Clone" label="Project" isOption={true}/>
                    </ul>
                </div>

                <div>
                    <NavbarOption to="/login" label="Log In" isOption={false} />
                </div>

                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[3px] bg-violet-900/70 blur-md" />
            </nav>
        </>
    );
};

export default Navbar;