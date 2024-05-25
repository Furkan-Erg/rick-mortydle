"use client";
import { CharacterModel, getCharacters } from "@/api/rnm-api";
import CharacterCard from "@/components/character-card";
import React, { use, useEffect, useState } from "react";
function Characters() {
  const [characters, setCharacters] = useState<CharacterModel[]>([]);
  useEffect(() => {
    getCharacters().then((res) => {
      setCharacters(res.data.characters.results);
    });
  }, []);
  return (
    <div>
      <div>
        {Array.from({ length: 10 }).map((_, index) => {
          return <CharacterCard character={["s"]} key={index}></CharacterCard>;
        })}
      </div>
    </div>
  );
}

export default Characters;
