import { Card } from "flowbite-react";
import React from "react";
function CharacterCard({ character }: { character: any }) {
  return (
    <Card
      className="max-w-sm"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc={character.image}
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {character.name}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {character.description}
      </p>
    </Card>
  );
}

export default CharacterCard;
