/*REACT*/
import { useState } from "react";
import { useEffect } from "react";

/*IMAGES*/
import heartLogo from "../assets/heart_logo.png"
import watchlistLogo from "../assets/watchlist_logo.png"
import moviesLogoWhite from "../assets/movies_logo_white.png"
import moviesPurpleWhite from "../assets/movies_logo_purple.png"
import seriesLogoWhite from "../assets/series_logo_white.png"
import seriesPurpleWhite from "../assets/series_logo_purple.png"



function MediaStatsHeader ({ type }) {

    return (
        <div className="w-full h-[80px] flex flex-col items-center justify-center p-[20px]">
            {/*LABEL HERO*/}
            <div className="h-auto">
                <img src={`type == 'favourites' ? heartLogo : type == 'watchlistLogo ? heartlogo'`} alt="" />

                <div>

                </div>
            </div>


            {type == 'favourites' && <p className="font-bold text-white">
                CENAS</p>}

            {/*MEDIA SELECTION*/}
            <div>
                {/*MOVIE SELECTION*/}
                <div>

                </div>
                {/*SERIES SELECTION*/}
                <div>
                    
                </div>
            </div>
        </div>
    );
}

export default MediaStatsHeader;