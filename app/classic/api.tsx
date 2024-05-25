import { ApolloQueryResult, gql } from "@apollo/client";
import createApolloClient from "@/apollo-client";

export interface CharacterResponse {
  characters: { info: { pages: number }; results: CharacterModel[] };
}

export interface CharacterModel {
  id: string;
  name: string;
  status: string;
  species: string;
  gender: string;
  image: string;
}

export async function getCharacters(): Promise<
  ApolloQueryResult<CharacterResponse>
> {
  const client = createApolloClient();
  const res = await client.query({
    query: gql`
      query {
        characters {
          results {
            id
            name
            status
            species
            gender
            image
          }
          info {
            pages
          }
        }
      }
    `,
  });

  return res;
}
