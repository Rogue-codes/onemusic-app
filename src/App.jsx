import { useAppContext } from "./context/PlayerProvider";
import Main from "./main/Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Playing from "./pages/Playing";
import Layout from "./layout/Layout";
import Artist from "./pages/Artist";
import Songs from "./pages/Songs";
import Genre from "./pages/Genre";
import Favourites from "./pages/Favourites";
import { useState } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [addedToFavorites,setAddedToFavorites] = useState(false);


  // const handleVolChange = (e) => {
  //   setVolume(parseFloat(e.target.value));
  // }

  return (
    <div>
      <Router>
        <Layout>
          <ToastContainer />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/playing/:id" element={<Playing setAddedToFavorites={setAddedToFavorites} addedToFavorites={addedToFavorites} />} />
            <Route path="/artist" element={<Artist />} />
            <Route path="/songs" element={<Songs />} />
            <Route path="/genre" element={<Genre />} />
            <Route path="/favorites" element={<Favourites />} />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
