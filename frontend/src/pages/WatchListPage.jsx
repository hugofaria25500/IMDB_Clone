/*REACT*/
import { useState } from "react";
import { useEffect } from "react";

/*COMPONENTS*/
import Navbar from "../components/Navbar";
import MediaStatsHeader from "../components/MediaStatsHeader"
import FilterSection from '../components/FilterSection';
import Footer from "../components/Footer";

/*JS*/
import { useSeries } from "../hooks/useSeries";

function WatchListPage() {

    const { series, loading } = useSeries();

    function openModal(item) {
        setSelectedItem(item);
    }

    function closeModal() {
        setSelectedItem(null);
    }

    return (
         <div className="bg-black">
            {/* SPACE */}
            <div className="h-[100px] bg-black"></div>
            {/* NAVBAR */}
            <Navbar />
            {/* WATCHLIST HEADER */}
            <MediaStatsHeader type={"watchlist"}/>
            {/* MOVIE FILTERS */}
            <FilterSection catalog={series} onOpenModal={openModal} loading={loading} label={"series"}/>
            {/* FOOTER */}
            <Footer />
        </div>
    );
}

export default WatchListPage;