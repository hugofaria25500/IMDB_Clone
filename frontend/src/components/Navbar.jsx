/*IMAGES*/
import logoImage from "../assets/logo_purple_background.png"

function Navbar() {
    return (
        <>
            <nav class="h-[120px] w-full flex items-center justify-between p-4 pl-12 pr-12 shadow-lg shadow-violet-900">

                <div className="w-[300px] flex items-center justify-center">
                    <img src={logoImage} class="w-full" alt="Flowbite Logo"/>
                </div>
                    
                <div>
                    <ul class="flex space-x-2 text-white font-semibold">
                        <li><a href="#" class="px-4 py-2 rounded hover:bg-violet-900">Home</a></li>
                        <li><a href="#" class="px-4 py-2 rounded hover:bg-violet-900">Movies</a></li>
                        <li><a href="#" class="px-4 py-2 rounded hover:bg-violet-900">TV Shows</a></li>
                        <li><a href="#" class="px-4 py-2 rounded hover:bg-violet-900">Project</a></li>
                    </ul>
                </div>

                <div>
                    <button class="bg-gray-800 text-white px-4 py-2 rounded hover:bg-violet-700">Log In</button>
                </div>
                                    
            </nav> 
        </>
    );
};

export default Navbar;