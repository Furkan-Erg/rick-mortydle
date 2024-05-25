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
  location: { name: string };
}

export async function getCharacters(): Promise<
  ApolloQueryResult<CharacterResponse>
> {
  const client = createApolloClient();
  try {
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
              location {
                name
              }
            }
            info {
              pages
            }
          }
        }
      `,
    });
    return res;
  } catch (error) {
    throw new Error("Error while fetching characters");
  }
}
