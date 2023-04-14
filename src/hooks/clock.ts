import { useState, useEffect } from "react";

export const useClock = () => {
  const [currentDate, setCurrentDate] = useState(Date.now());

  const clock = () => {
    if (currentDate !== Date.now()) {
      setCurrentDate(Date.now());
    }

    requestAnimationFrame(clock);
  };

  useEffect(() => {
    const idle = requestAnimationFrame(clock);
    return () => {
      cancelAnimationFrame(idle);
    };
  }, []);

  return currentDate;
};
