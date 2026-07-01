/*COMPONENTS*/
import Navbar from "../components/Navbar";
import ProfileCard from "../components/ProfileCard";
import Footer from "../components/Footer";

function ProfilePage() {
    return (
        <div>
            <div className="w-full flex flex-col justify-center bg-black srt">
            {/*NAVBAR*/}
            <Navbar />

             {/*PROFILE CARD*/}
            <div className="h-[calc(100vh-150px)] flex flex-col items-end justify-center">
                <ProfileCard />
            </div>

            {/*FOOTER*/}
            <Footer />
        </div>
        </div>
    );
}

export default ProfilePage;