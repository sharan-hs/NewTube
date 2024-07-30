import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Search from "./components/Search";

import PlayingVideos from "./components/PlayingVideos";
import { useAuth } from "./context/AuthProvider";
import Loading from "./loader/Loading";

function App() {
  const { loading } = useAuth();
  return (
    <div>
      {loading && <Loading />}
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/search/:searchQuery" element={<Search />} />
        <Route path="/video/:id" element={<PlayingVideos />} />
      </Routes>
    </div>
  );
}

export default App;
