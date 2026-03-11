import { useParams } from "react-router";

import Kanji from "../components/Kanji";
import SearchBar from "../components/SearchBar";

function KanjiPage() {
  const { literal } = useParams<{ literal: string }>();
  return (
    <>
      <SearchBar />
      <Kanji literal={literal!} />
    </>
  );
}

export default KanjiPage;
