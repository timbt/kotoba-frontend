import { Route, Routes } from "react-router";

import Kanji from "./components/Kanji";
import KanjiPage from "./pages/KanjiPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Kanji literal="猫" />} />
      <Route path="/kanji/:literal" element={<KanjiPage />} />
    </Routes>
  );
}

export default App;
