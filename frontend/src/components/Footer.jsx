/*IMAGES*/
import githubLogo from "../assets/github_logo.png";
import facebookLogo from "../assets/facebook_logo.png";
import instagramLogo from "../assets/instagram_logo.png";

function Footer() {
    return (
        <footer className="bg-black w-full h-[150px] flex flex-col items-center justify-center">
            <p className="text-gray-400 text-sm mb-4">© 2026 CineFlix. All rights reserved.</p>
            <div className="h-[25px] flex items-center justify-center gap-4 ml-4">
                <a href="https://github.com/hugofaria25500" target="_blank" rel="noopener noreferrer" className="h-full">
                    <img className="h-full cursor-pointer hover:opacity-80 hover:scale-110 transition" src={githubLogo} alt="GitHub Logo" />
                </a>

                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="h-full">
                    <img className="h-full cursor-pointer hover:opacity-80 hover:scale-110 transition" src={facebookLogo} alt="Facebook Logo" />
                </a>

                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="h-full">
                    <img className="h-full cursor-pointer hover:opacity-80 hover:scale-110 transition" src={instagramLogo} alt="Instagram Logo" />
                </a>
            </div>
        </footer>
    );
}

export default Footer;