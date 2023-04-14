import React, { useEffect, useState } from "react";
import moment from "moment";

import { useClock } from "@/hooks/clock";

const Clock = () => {
  const currentDate = useClock();

  return <div>{moment(currentDate, "x").format("YYYY-MM-DD HH:mm:ss")}</div>;
};

export default Clock;
