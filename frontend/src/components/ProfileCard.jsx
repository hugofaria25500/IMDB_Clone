/*REACT*/
import { useState } from "react";

/*HOOKS*/
import useAuth from "../hooks/useAuth";

function ProfileCard() {

    const {user} = useAuth();

    console.log(user);

    return (
        <div className="h-full w-full flex flex-col items-center justify-start mt-[120px]">
            {/*PROFILE IMAGE*/}
            <div className="flex flex-col items-center justify-center mb-4">
                <img src={user.avatar} alt={user.name} className="h-[80px] w-[80px] rounded-full object-cover border-4 border-violet-600"/>
                <h2 className="text-white text-2xl font-semibold">{user.name}</h2>   
            </div>

            <div className="w-[600px] h-[auto] bg-white/10 rounded-lg shadow-lg p-6">
        
                {/*USER INFO*/}
                <div className="flex items-center justify-center mb-4"> 
                                
                </div>

                {/*USER CHOOSE AVATAR */}
                <div className="flex items-center justify-center mb-4"> 
                    
                </div>
            </div>
        </div>
    );
}

export default ProfileCard;