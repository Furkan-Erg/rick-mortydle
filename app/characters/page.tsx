"use client";
import { CharacterModel, getCharacters } from "@/api/rnm-api";
import CharacterCard from "@/components/character-card";
import { Spinner } from "flowbite-react";
import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroller";

function Characters() {
  const [characters, setCharacters] = useState<CharacterModel[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const loadFunc = async () => {
    await getCharacters(currentPage + 1).then((res) => {
      setCharacters([...characters, ...res.data.characters.results]);
    });
    setCurrentPage(currentPage + 1);
  };
  useEffect(() => {
    initSetup();
  }, []);
  const initSetup = async () => {
    await getCharacters().then((res) => {
      setCharacters(res.data.characters.results);
    });
    setIsLoading(false);
  };
  return isLoading ? (
    <div className="h-dvh flex justify-center items-center">
      <Spinner
        size="xl"
        color="info"
        className="fill-red-400  "
        aria-label="Info spinner example"
      />
    </div>
  ) : (
    <div>
      <h1 className="text-4xl text-center text-white drop-shadow-md">
        All Characters
      </h1>
      <InfiniteScroll
        pageStart={1}
        loadMore={loadFunc}
        hasMore={true || false}
        loader={
          <Spinner
            size="xl"
            color="info"
            className="fill-red-400  "
            aria-label="Info spinner example"
          />
        }
      >
        <div className="flex flex-wrap justify-center gap-4 m-4">
          {characters.map((char, index) => {
            return <CharacterCard character={char} key={index}></CharacterCard>;
          })}
        </div>
      </InfiniteScroll>
    </div>
  );
}

export default Characters;
