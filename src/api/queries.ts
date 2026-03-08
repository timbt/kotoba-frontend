import { gql } from "graphql-request";

export interface KanjiEntry {
  literal: string;
  readings_on: string[];
  readings_kun: string[];
  meanings: string[];
}

export const GET_KANJI = gql`
  query GetKanji($literal: String!) {
    kanji(literal: $literal) {
      literal
      readings_on
      readings_kun
      meanings
    }
  }
`;
