/*REACT*/
import { useState, useEffect} from "react";

/*HOOKS*/
import useAuth from "../hooks/useAuth";

/*IMAGES*/
import accountLogo from "../assets/account_logo.png";
import userLogo from "../assets/user_logo.png";
import emailLogo from "../assets/email_logo.png";
import paletteLogo from "../assets/palette_logo.png";

/*JS*/
import { avatars , getAvatarById } from "../js/avatar";

function ProfileCard() {

    const { user, updateUser } = useAuth();

    const [selectedAvatar, setSelectedAvatar] = useState(null);

    useEffect(() => {
        if (user) {
            setSelectedAvatar(user.avatar_id);
        }
    }, [user]);

    if (!user) return null;

    return (
        <div className="w-full flex flex-col items-center justify-start">
            {/*PROFILE IMAGE*/}
            <div className="flex flex-col items-center justify-center mb-4">
                <img src={getAvatarById(selectedAvatar)} alt={user.name} className="h-[80px] w-[80px] rounded-full object-cover border-4 border-violet-600"/>
                <h2 className="text-white text-2xl font-semibold">{user.name}</h2>   
            </div>
        
            {/*USER INFO*/}
            <div className="w-full max-w-[600px] h-[auto] bg-white/10 rounded-lg shadow-lg p-5">
                <div className="flex flex-row items-center justify-start mb-4">
                    <div>
                        <img src={accountLogo} alt="Account Logo" className="h-[20px] w-[20px] inline-block mr-2"/>
                    </div>
                    <h2 className="text-white text-xl font-semibold">Account Information</h2>
                </div>

                <div className="w-full flex flex-col space-y-4 px-6">
                    {/*USERNAME*/}
                    <div className="w-full flex flex-col sm:flex-row">
                        <div className="sm:w-[25%] flex flex-row items-center justify-center bg-violet-600/30 rounded-t-xl sm:rounded-t-none sm:rounded-tl-xl sm:rounded-bl-xl px-4 py-3 border border-violet-600/30">
                            <img src={userLogo} alt="User Logo" className="h-[20px] w-[20px] inline-block mr-2 flex "/>
                            <p className="text-white font-semibold">Username</p>
                        </div>
                        <div className="sm:w-[75%] flex flex-row items-center justify-start">
                            <input type="text" value={user.name} readOnly className="w-full rounded-b-xl sm:rounded-b-none sm:rounded-tr-xl sm:rounded-br-xl border border-violet-600/50 bg-zinc-900/60 px-4 py-3 text-white focus: border-violet-600 focus:outline-none focus:ring-1focus:ring-violet-600"/>                   
                        </div>
                    </div>

                    {/*EMAIL*/}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-start">
                        <div className="sm:w-[25%] flex flex-row items-center justify-center bg-violet-600/30 rounded-t-xl sm:rounded-t-none sm:rounded-tl-xl sm:rounded-bl-xl px-4 py-3 border border-violet-600/30">
                            <img src={emailLogo} alt="Email Logo" className="h-[20px] w-[20px] inline-block mr-2 flex "/>
                            <p className="text-white font-semibold">Email</p>
                        </div>
                        <div className="sm:w-[75%] flex flex-row items-center justify-start">
                            <input type="text" value={user.email} readOnly className="w-full rounded-b-xl sm:rounded-b-none sm:rounded-tr-xl sm:rounded-br-xl border border-violet-600/50 bg-zinc-900/60 px-4 py-3 text-white focus: border-violet-600 focus:outline-none focus:ring-1focus:ring-violet-600"/>                   
                        </div>
                    </div>
                </div>
                    
            </div>

            {/*USER CHOOSE AVATAR */}
            <div className="w-full max-w-[600px] h-[auto] bg-white/10 rounded-lg shadow-lg p-5 mt-4">
                <div className="flex flex-row items-center justify-start mb-4">
                    <div>
                        <img src={paletteLogo} alt="Palette Logo" className="h-[20px] w-[20px] inline-block mr-2"/>
                    </div>
                    <h2 className="text-white text-xl font-semibold">Choose Avatar</h2>
                </div>

                <div className="grid grid-cols-5 sm:grid-cols-7 gap-3">
                    {avatars.map((avatar) => (
                        <div key={avatar.id} className="flex flex-col items-center justify-center">
                            <img src={avatar.src} alt={`Avatar ${avatar.id}`} onClick={() => setSelectedAvatar(avatar.id)} className={`h-[55px] w-[55px] rounded-full object-cover border-4 ${user.avatar_id === avatar.id ? 'border-violet-600' : 'border-transparent'} hover:cursor-pointer hover:scale-105 transition`} />
                        </div>
                    ))}
                </div>

                <div className="w-full flex justify-center mt-[20px]">
                    <button onClick={async () => {
                        try {
                            updateUser({
                                ...user,
                                avatar_id: selectedAvatar
                            });

                        } catch (error) {
                            console.error("Error updating avatar:", error);
                        }
                    }} className="bg-violet-600 text-white text-sm px-5 py-1 rounded-full hover:bg-violet-700 font-bold">
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProfileCard;