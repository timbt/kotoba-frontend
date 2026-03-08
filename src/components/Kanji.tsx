import { useQuery } from "@tanstack/react-query";

import { client } from "../api/client";
import { GET_KANJI, type KanjiEntry } from "../api/queries";

function Kanji() {
  const { data, isPending, isError } = useQuery({
    queryKey: ["kanji", "猫"],
    queryFn: () =>
      client.request<{ kanji: KanjiEntry }>(GET_KANJI, { literal: "猫" }),
  });

  if (isPending) return <p>Loading...</p>;
  if (isError) return <p>Error loading kanji.</p>;

  const kanji = data.kanji;
  return (
    <div>
      <h2>{kanji.literal}</h2>
      <p>On readings: {kanji.readings_on.join(", ")}</p>
      <p>Kun readings: {kanji.readings_kun.join(", ")}</p>
      <p>Meanings: {kanji.meanings.join(", ")}</p>
    </div>
  );
}

export default Kanji;
