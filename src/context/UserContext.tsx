import React, { createContext } from "react";
import { subredditModel } from "../types/Types";

interface IUserContext {
  userStats: null | subredditModel;
  setUserStats: React.Dispatch<React.SetStateAction<null | subredditModel>>;
  onRetrieveUserStats: (userId: string) => void;
}

export const UserContext = createContext<IUserContext>({
  userStats: null,
  setUserStats: () => {},
  onRetrieveUserStats: () => {},
});
