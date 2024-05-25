"use client";
import SelectComponent from "@/components/select";
import React from "react";

/*
interface Option {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  image: string;
}
 */

function ClassicGame() {
  const temp: Array<any> = [
    {
      id: 5,
      name: "string",
      status: "string",
      species: "string",
      gender: "string",
      image: "string",
    },
    {
      id: 6,
      name: "strings",
      status: "string",
      species: "string",
      gender: "string",
      image: "string",
    },
  ];
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
        optionsArray={temp.map((e) => e.name)}
      ></SelectComponent>
    </div>
  );
}

export default ClassicGame;
