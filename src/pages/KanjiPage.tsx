import { useParams } from "react-router";

import Kanji from "../components/Kanji";

function KanjiPage() {
  const { literal } = useParams<{ literal: string }>();
  return <Kanji literal={literal!} />;
}

export default KanjiPage;
