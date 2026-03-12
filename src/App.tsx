import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router";

import KanjiPage from "./pages/KanjiPage";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <Container>
      <Routes>
        <Route path="/kanji/:literal" element={<KanjiPage />} />
        <Route path="/" element={<MainPage />} />
      </Routes>
    </Container>
  );
}

export default App;
