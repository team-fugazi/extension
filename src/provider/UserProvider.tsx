import React, { useState } from "react";
import { subredditModel } from "../types/Types";
import { UserContext } from "../context/UserContext";
import { getUserStatsApi } from "../api/ReportsApi";

type Props = {
  children: React.ReactNode;
};

const UserProvider = ({ children }: Props) => {
  const [userStats, setUserStats] = useState<null | subredditModel>(null);

  const onRetrieveUserStats = async (userId: string) => {
    console.log("calleeeeeeed");
    await getUserStatsApi(userId);
  };

  return (
    <UserContext.Provider
      value={{
        userStats,
        setUserStats,
        onRetrieveUserStats,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider };
