function BackgroundImage({ backgroundImage }) {
    return (
        <>
            {/* IMAGE */}
            <div className="fixed inset-0 -z-30 bg-cover bg-center"
                style={{ backgroundImage: `url(${backgroundImage})` }} />
    
            {/* BLUR */}
            <div className="fixed inset-0 -z-30 backdrop-blur-xl" />
    
            {/* GRADIENT OVERLAY */}
            <div className="fixed inset-0 -z-20 bg-black/70" />
        </>
    );
}

export default BackgroundImage;