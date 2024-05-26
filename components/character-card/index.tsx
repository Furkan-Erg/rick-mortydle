import { CharacterModel } from "@/api/rnm-api";
import { Card } from "flowbite-react";
import React from "react";
import "./character-card.css";

function CharacterCard({ character }: { character: CharacterModel }) {
  return (
    <Card
      className="max-w-sm"
      imgAlt={`image of ${character.name}`}
      imgSrc={character.image}
    >
      <h5 className="text-2xl  font-bold tracking-tight text-gray-900 dark:text-white">
        {character.name}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        <span>
          {character.name} is a {character.species}.
        </span>
        <span>And last seen in {character.location.name}.</span>
        <span>Gender is {character.gender} and status is </span>
        <span className={`status status-${character.status}`}>
          {character.status}
        </span>
      </p>
    </Card>
  );
}

export default CharacterCard;
