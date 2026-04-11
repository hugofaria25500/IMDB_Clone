function LoginCard() {

    return (
        <div className="h-[500px] w-[400px] mt-[100px] p-6 bg-black/80 rounded-xl shadow-2xl z-20">  

            <form>
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />                

                <button type="submit">Log In</button>
            </form>
        </div>
    );
}   

export default LoginCard;