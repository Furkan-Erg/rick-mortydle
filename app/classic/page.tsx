"use client";
import SelectComponent from "@/components/select";
import React, { useEffect } from "react";
import { getCharacters, CharacterModel } from "./api";

function ClassicGame() {
  //type characters for charactermodel
  const [characters, setCharacters] = React.useState<CharacterModel[]>([]);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [totalPages, setTotalPages] = React.useState(1);
  useEffect(() => {
    getCharacters().then((res) => {
      setCharacters(res.data.characters.results);
      setTotalPages(res.data.characters.info.pages);
    });
  }, []);

  const onSelectionChange = (value: string) => {
    console.log(value);
  };
  return (
    <div className="flex justify-center flex-col items-center h-dvh gap-8">
      <div>
        <h1 className="text-3xl text-center">Classic Game</h1>
      </div>
      <SelectComponent
        onSelectionChange={onSelectionChange}
        optionsArray={characters?.map((e: CharacterModel) => e.name)}
      ></SelectComponent>
    </div>
  );
}

export default ClassicGame;
