/*COMPONENTS*/
import Navbar from "../components/Navbar";
import CreateAccountCard from "../components/CreateAccountCard";
import Footer from "../components/Footer";

/*IMAGES*/
import loginBackground from "../assets/create_account_background.png"

function CreateAccountPage() {
    return (
        <div className="w-full flex flex-col justify-center bg-black srt">
            {/*NAVBAR*/}
            <Navbar />

            {/*CREATE ACCOUNT CARD*/}
            <div className="h-[calc(100vh-150px)] flex items-center justify-center z-10 bg-cover bg-[position:50%_35%] bg-no-repeat" style={{ backgroundImage: `url(${loginBackground})` }}>

                {/*GRADIENT OVERLAY*/}
                <div className="absolute h-[calc(100vh-150px)] inset-0 bg-gradient-to-b from-black via-transparent to-black z-10" />

                <CreateAccountCard />
            </div>

            {/*FOOTER*/}
            <Footer />
        </div>
    );
}

export default CreateAccountPage;