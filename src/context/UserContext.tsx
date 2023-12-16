import React, { createContext } from "react";
import { statistics, subredditModel } from "../types/Types";

interface IUserContext {
  userStats: null | statistics;
  setUserStats: React.Dispatch<React.SetStateAction<null | statistics>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  onRetrieveUserStats: (userId: string) => void;
}

export const UserContext = createContext<IUserContext>({
  userStats: null,
  setUserStats: () => {},
  loading: null,
  setLoading: () => {},
  onRetrieveUserStats: (userId: string) => {},
  
});
