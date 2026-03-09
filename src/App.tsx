import { Route, Routes } from "react-router";

import KanjiPage from "./pages/KanjiPage";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <Routes>
      <Route path="/kanji/:literal" element={<KanjiPage />} />
      <Route path="/" element={<MainPage />} />
    </Routes>
  );
}

export default App;
