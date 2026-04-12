/*REACT*/
import { BrowserRouter, Routes, Route } from "react-router-dom";

/*COMPONENTS*/
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import CreateAccountPage from "./pages/CreateAccountPage";
import MoviesPage from "./pages/MoviesPage";
import SeriesPage from "./pages/SeriesPage";
import WatchlistPage from "./pages/WatchListPage";

function App() {
  return (
    <div>
        {/*MAPPING THE APP ROUTES - NAVIGATION*/}    
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />

                <Route path="/login" element={<LoginPage />} />

                <Route path="/create-account" element={<CreateAccountPage />} />

                <Route path="/movies" element={<MoviesPage />} />

                <Route path="/series" element={<SeriesPage />} />

                <Route path="/watchlist" element={<WatchlistPage />} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;