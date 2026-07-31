/*COMPONENTS*/
import Navbar from "../components/Navbar";
import ProfileCard from "../components/ProfileCard";
import Footer from "../components/Footer";

function ProfilePage() {
    return (
        <div className="min-h-screen bg-black">
            <div className="w-full flex flex-col bg-black">
                {/* SPACE */}
                <div className="h-[100px] bg-black"></div>
                {/*NAVBAR*/}
                <Navbar />

                {/*PROFILE CARD*/}
                <div className="flex-1 flex flex-col items-center justify-start py-10 px-4">
                    <ProfileCard />
                </div>

                {/*FOOTER*/}
                <Footer />
            </div>
        </div>
    );
}

export default ProfilePage;