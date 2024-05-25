import { Button } from "flowbite-react/components/Button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center  gap-24">
      <Image
        src={"https://rickandmortyapi.com/api/character/avatar/1.jpeg"}
        width={400}
        height={400}
        alt="Photo of Rick Sanchez"
      />
      <Button color="dark" href="/classic">
        Classic Game
      </Button>
    </div>
  );
}
