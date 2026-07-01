/*REACT*/
import { useState, useEffect} from "react";

/*HOOKS*/
import useAuth from "../hooks/useAuth";

/*IMAGES*/
import accountLogo from "../assets/account_logo.png";
import userLogo from "../assets/user_logo.png";
import emailLogo from "../assets/email_logo.png";
import lockLogo from "../assets/lock_logo.png";
import eyeLogo from "../assets/eye_logo.png";
import eyeCrossedLogo from "../assets/eye-crossed_logo.png";
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
        <div className="h-full w-full flex flex-col items-center justify-start mt-[120px]">
            {/*PROFILE IMAGE*/}
            <div className="flex flex-col items-center justify-center mb-4">
                <img src={getAvatarById(selectedAvatar)} alt={user.name} className="h-[80px] w-[80px] rounded-full object-cover border-4 border-violet-600"/>
                <h2 className="text-white text-2xl font-semibold">{user.name}</h2>   
            </div>
        
            {/*USER INFO*/}
            <div className="w-[600px] h-[auto] bg-white/10 rounded-lg shadow-lg p-6">
                <div className="flex flex-row items-center justify-start mb-4">
                    <div>
                        <img src={accountLogo} alt="Account Logo" className="h-[20px] w-[20px] inline-block mr-2"/>
                    </div>
                    <h2 className="text-white text-xl font-semibold">Account Information</h2>
                </div>

                
            </div>

            {/*USER CHOOSE AVATAR */}
            <div className="w-[600px] h-[auto] bg-white/10 rounded-lg shadow-lg p-6 mt-4">
                <div className="flex flex-row items-center justify-start mb-4">
                    <div>
                        <img src={paletteLogo} alt="Palette Logo" className="h-[20px] w-[20px] inline-block mr-2"/>
                    </div>
                    <h2 className="text-white text-xl font-semibold">Choose Avatar</h2>
                </div>

                <div className="grid grid-cols-5 gap-4 flex flex-wrap">
                    {avatars.map((avatar) => (
                        <div key={avatar.id} className="flex flex-col items-center justify-center">
                            <img src={avatar.src} alt={`Avatar ${avatar.id}`} onClick={() => setSelectedAvatar(avatar.id)} className={`h-[60px] w-[60px] rounded-full object-cover border-4 ${user.avatar_id === avatar.id ? 'border-violet-600' : 'border-transparent'} hover:cursor-pointer hover:scale-105 transition`} />
                        </div>
                    ))}
                </div>

                <div className="w-full flex justify-center mt-[30px]">
                    <button onClick={async () => {
                        try {
                            updateUser({
                                ...user,
                                avatar_id: selectedAvatar
                            });

                        } catch (error) {
                            console.error("Error updating avatar:", error);
                        }
                    }} className="bg-violet-600 text-white text-sm px-5 py-2 rounded-full hover:bg-violet-700 font-bold">
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProfileCard;