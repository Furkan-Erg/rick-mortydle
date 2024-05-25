"use client";
import { useRouter } from "next/navigation";
import React from "react";

export default function Error() {
  const [countdown, setCountdown] = React.useState(5);
  const router = useRouter();
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  React.useEffect(() => {
    if (countdown === 0) {
      router.push("/");
    }
  }, [countdown]);
  return (
    <div>
      It is not you , It is us , a little error occured you will redirect to
      main page in {countdown} seconds
    </div>
  );
}
