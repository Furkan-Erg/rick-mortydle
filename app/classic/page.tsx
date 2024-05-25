"use client";
import SelectComponent from "@/components/select";
import React, { useEffect } from "react";
import { getCharacters, CharacterModel } from "../../api/rnm-api";
import { Button, Spinner, Tooltip } from "flowbite-react";
import ConfettiComponent from "@/components/confetti";
import Image from "next/image";
import { FaQuestionCircle } from "react-icons/fa";
import {} from "next/navigation";

enum GameStates {
  PLAYING,
  WIN,
}
const informationNames = [
  "Image",
  "Name",
  "Gender",
  "Status",
  "Species",
  "Location",
];

function ClassicGame() {
  //type characters for charactermodel
  const [characters, setCharacters] = React.useState<CharacterModel[]>([]);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [totalPages, setTotalPages] = React.useState(1);
  const [selectedStreamer, setSelectedStreamer] = React.useState("");
  const [guessHistory, setGuessHistory] = React.useState<CharacterModel[]>([]);
  const [gameState, setGameState] = React.useState(GameStates.PLAYING);
  const [correctAnswer, setCorrectAnswer] = React.useState<CharacterModel>();
  const [isLoading, setIsLoading] = React.useState(true);

  useEffect(() => {
    setUpGame();
  }, []);
  const setUpGame = async () => {
    setGameState(GameStates.PLAYING);
    await getCharacters().then((res) => {
      setCharacters(res.data.characters.results);
      setTotalPages(res.data.characters.info.pages);
      setCorrectAnswer(
        res.data.characters.results[
          Math.floor(Math.random() * res.data.characters.results.length)
        ]
      );
    });

    setIsLoading(false);
  };

  const handleNextGame = () => {
    setGuessHistory([]);
    setGameState(GameStates.PLAYING);
    setSelectedStreamer("");
    setCorrectAnswer(characters[Math.floor(Math.random() * characters.length)]);
  };

  const onSelectionChange = (value: string) => {
    setSelectedStreamer(value);
    setGuessHistory([
      ...guessHistory,
      characters.find((e) => e.name === value) as CharacterModel,
    ]);
    setCharacters(characters.filter((e) => e.name !== value));
    setTimeout(() => {
      setSelectedStreamer("");
    }, 100);
    if (value === correctAnswer?.name) {
      setGameState(GameStates.WIN);
    }
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
    <div className="flex justify-center flex-col items-center h-dvh gap-8">
      <div className="flex   justify-center items-center flex-col  h-dvh content-center ">
        {gameState === GameStates.PLAYING && (
          <div className="flex justify-center items-center flex-col gap-6">
            <div>
              <h1 className="text-5xl text-center text-white drop-shadow-md">
                Classic Game
              </h1>
            </div>
            <div className={guessHistory.length > 0 ? "hidden xr:flex" : ""}>
              <div className="bg-blue-900 border-4 border-black text-white text-sm md:text-xl text-bold rounded-lg py-4 px-8 text-center shadow-md ">
                <div>Who is this Character</div>
                <div className="opacity-8 ">
                  Type any character name to get started.
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4">
              <SelectComponent
                onSelectionChange={onSelectionChange}
                optionsArray={characters?.map((e: CharacterModel) => e.name)}
                value={selectedStreamer}
              ></SelectComponent>
            </div>
            <div className={guessHistory.length > 0 ? "" : "hidden xr:flex"}>
              <div className="flex  xs:flex-row md:flex-col  gap-2  w-[23rem] md:w-auto md:h-[36rem] overflow-x-auto md:overflow-y-auto ">
                <div className="flex xs:flex-col md:flex-row   gap-1 md:gap-4 ">
                  {informationNames.map((name, index) => (
                    <div
                      key={index}
                      className=" text-white text-bold flex items-center justify-center text-center w-20 h-20 md:h-8 border-2 md:border-0 md:border-b-2  border-white "
                    >
                      {name}
                      {name === "Location" && (
                        <Tooltip content="Last known Location">
                          <FaQuestionCircle className="ml-1 text-xs"></FaQuestionCircle>
                        </Tooltip>
                      )}
                    </div>
                  ))}
                </div>
                <div className=" flex flex-row-reverse md:flex-col-reverse  gap-1">
                  {guessHistory.map((character, index) => (
                    <div
                      key={index}
                      className="mb-0 md:mb-4  flex flex-col justify-between  py-1  md:flex-row mx-[0.65rem] md:mx-0 gap-[0.60rem] md:gap-1 text-white text-sm font-semibold text-center"
                    >
                      <div className="border-4 border-black rounded-lg w-[4.5rem] h-[4.5rem] md:w-20 md:h-20 overflow-hidden">
                        <div className="flip-1 bg-blue-900 w-full h-full flex justify-center items-center">
                          <Image
                            src={character.image}
                            alt={`image of ${character.name}`}
                            width={72}
                            height={72}
                          ></Image>
                        </div>
                      </div>
                      <div className="border-4 border-black rounded-lg w-[4.5rem] h-[4.5rem] md:w-20 md:h-20 overflow-hidden">
                        <div className=" bg-blue-900 flip-2 w-full h-full flex justify-center items-center">
                          {character.name}
                        </div>
                      </div>
                      <div className="border-4 border-black rounded-lg w-[4.5rem] h-[4.5rem] md:w-20 md:h-20 overflow-hidden">
                        <div
                          className={`${
                            correctAnswer?.gender === character.gender
                              ? "bg-green-600"
                              : "bg-red-600"
                          } flip-3 w-full h-full flex justify-center items-center`}
                        >
                          {character.gender}
                        </div>
                      </div>

                      <div className="border-4 border-black rounded-lg w-[4.5rem] h-[4.5rem] md:w-20 md:h-20 overflow-hidden">
                        <div
                          className={`${
                            correctAnswer?.status === character.status
                              ? "bg-green-600"
                              : "bg-red-600"
                          } flip-4 w-full h-full flex justify-center items-center`}
                        >
                          {character.status}
                        </div>
                      </div>
                      <div className="border-4 border-black rounded-lg w-[4.5rem] h-[4.5rem] md:w-20 md:h-20 overflow-hidden">
                        <div
                          className={`${
                            correctAnswer?.species === character.species
                              ? "bg-green-600"
                              : "bg-red-600"
                          } flip-5 w-full h-full flex justify-center items-center `}
                        >
                          {character.species}
                        </div>
                      </div>
                      <div className="border-4 border-black rounded-lg w-[4.5rem] h-[4.5rem] md:w-20 md:h-20 overflow-hidden">
                        <div
                          className={`${
                            correctAnswer?.location.name ===
                            character.location.name
                              ? "bg-green-600"
                              : "bg-red-600"
                          } flip-6 w-full h-full flex justify-center items-center `}
                        >
                          {character.location.name}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
        {gameState === GameStates.WIN && (
          <div className="self-center flex justify-center items-center">
            <ConfettiComponent />
            <Button onClick={handleNextGame} color="dark">
              Yeniden Oyna
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ClassicGame;
