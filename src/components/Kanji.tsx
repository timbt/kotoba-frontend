import { useQuery } from "@tanstack/react-query";
import Badge from "react-bootstrap/Badge";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import { client } from "../api/client";
import { GET_KANJI, type KanjiEntry } from "../api/queries";

interface Props {
  literal: string;
}

function Kanji({ literal }: Props) {
  const { data, isPending, isError } = useQuery({
    queryKey: ["kanji", literal],
    queryFn: () =>
      client.request<{ kanji: KanjiEntry }>(GET_KANJI, { literal: literal }),
  });

  if (isPending) return <p>Loading...</p>;
  if (isError) return <p>Error loading kanji.</p>;

  const kanji = data.kanji;

  if (kanji === null)
    return (
      <div>
        <p>No kanji found!</p>
      </div>
    );

  return (
    <Container>
      <Row>
        <Col md="auto">
          <Badge className="fs-1">{kanji.literal}</Badge>
        </Col>
        <Col>
          <Row>
            <span>
              <b>On'yomi:</b> {kanji.readings_on.join(", ")}
            </span>
          </Row>
          <Row>
            <span>
              <b>Kun'yomi:</b> {kanji.readings_kun.join(", ")}
            </span>
          </Row>
          <Row>
            <span>
              <b>Meanings:</b> {kanji.meanings.join(", ")}
            </span>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Kanji;
