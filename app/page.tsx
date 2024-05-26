"use client";
import { Tooltip } from "flowbite-react";
import { Button } from "flowbite-react/components/Button";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [source, setSource] = useState(
    "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
  );

  const handleTroll = () => {
    const doc = document.getElementById("RickRoll");
    if (doc) {
      doc.innerHTML = `
        <iframe
          className="video"
          title="Youtube player"
          sandbox="allow-same-origin allow-forms allow-popups allow-scripts allow-presentation"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=0&controls=0&loop=1&modestbranding=1&showinfo=0&rel=0&iv_load_policy=3&fs=0&disablekb=1&autohide=1&cc_load_policy=0&enablejsapi=1"
          width="560"
          height="315"
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen
        ></iframe>`;
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-24">
      <div className="flex flex-row justify-center items-center">
        <Tooltip content="Character Database">
          <Button color="dark" href="/characters">
            Characters
          </Button>
        </Tooltip>
      </div>
      <Tooltip content="Do not Click">
        <div id="RickRoll">
          <Image
            src={source}
            width={400}
            height={400}
            alt="Photo of Rick Sanchez"
            onClick={handleTroll}
          />
        </div>
      </Tooltip>

      <Tooltip content="Extremely Hard">
        <Button color="dark" href="/classic">
          Classic Game
        </Button>
      </Tooltip>
    </div>
  );
}
