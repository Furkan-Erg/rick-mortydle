import { Spinner } from "flowbite-react";

export default function Loading() {
  return (
    <div className="h-dvh flex justify-center items-center">
      <Spinner
        size="xl"
        color="info"
        className="fill-red-400  "
        aria-label="Info spinner example"
      />
    </div>
  );
}
