/*IMAGES*/
import logoImage from "../assets/logo_purple_background.png"

function Navbar() {
    return (
        <>
            <nav className="relative h-[100px] bg-black/50 w-full flex items-center justify-between p-4 pl-12 pr-12">
                <div className="w-[250px] flex items-center justify-center">
                    <img src={logoImage} className="w-full" alt="CineFlix" />
                </div>
                
                <div>
                    <ul className="flex space-x-2 text-white font-semibold">
                        <li><a href="#" className="px-4 py-2 rounded hover:bg-violet-900">Home</a></li>
                        <li><a href="#" className="px-4 py-2 rounded hover:bg-violet-900">Movies</a></li>
                        <li><a href="#" className="px-4 py-2 rounded hover:bg-violet-900">TV Shows</a></li>
                        <li><a href="#" className="px-4 py-2 rounded hover:bg-violet-900">Project</a></li>
                    </ul>
                </div>

                <div>
                    <button className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-violet-700">Log In</button>
                </div>

                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1 bg-violet-900/70 blur-md" />
            </nav>
        </>
    );
};

export default Navbar;