import React, { useState } from "react";
import { statistics, subredditModel } from "../types/Types";
import { UserContext } from "../context/UserContext";
import { getUserStatsApi } from "../api/ReportsApi";

type Props = {
  children: React.ReactNode;
};

const UserProvider = ({ children }: Props) => {
  const [userStats, setUserStats] = useState<null | statistics>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const onRetrieveUserStats = async (userId: string) => {
    setLoading(true)
    const response = await getUserStatsApi(userId);
    setUserStats(response.data)
    setLoading(false)
  };

  return (
    <UserContext.Provider
      value={{
        userStats,
        setUserStats,
        onRetrieveUserStats,
        loading,
        setLoading
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider };
