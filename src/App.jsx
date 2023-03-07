import { useAppContext } from "./context/PlayerProvider";
import Main from "./main/Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Playing from "./pages/Playing";
import Layout from "./layout/Layout";
import Artist from "./pages/Artist";
import Songs from "./pages/Songs";

function App() {
  const [{ selectedTrack }] = useAppContext();

  console.log(selectedTrack);

  return (
    <div>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/playing/:id" element={<Playing />} />
            <Route path="/artist" element={<Artist />} />
            <Route path="/songs" element={<Songs />} />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
