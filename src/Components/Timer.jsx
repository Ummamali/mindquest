import React, { useEffect, useState } from "react";
import { formatTime } from "../Funcs/utils";

export default function Timer({ startedAt }) {
  const [remainingMS, setRemainingMS] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const elapsed = Date.now() - startedAt;
      setRemainingMS(900000 - elapsed);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [startedAt]);

  return (
    <div className="py-2 px-6 rounded-sm shadow-sm bg-white/30 text-white/80">
      {formatTime(remainingMS)}
    </div>
  );
}
