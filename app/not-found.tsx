import React from "react";
import { FaSadTear } from "react-icons/fa";

function NotFound() {
  return (
    <div className="flex h-dvh mx-16 text-5xl text-gray-900 drop-shadow-md justify-center items-center">
      <div>
        I know you love to poke around, but unfortunately we don't have such a
        page.
        <FaSadTear className="text-5xl text-rose-300 drop-shadow-md inline-block mx-4"></FaSadTear>
      </div>
    </div>
  );
}

export default NotFound;
