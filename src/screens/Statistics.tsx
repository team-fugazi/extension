import { useAuth0 } from "@auth0/auth0-react";
import React, { useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";
import Loading from "./Loading";

const Statistics = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const { onRetrieveUserStats, userStats, loading, setLoading } =
    useContext(UserContext);

  if (loading) {
    return <Loading />;
  }

  useEffect(() => {
    if (isAuthenticated) {
      onRetrieveUserStats(user.sub);
    }
  }, []);

  useEffect(() => {
    setLoading(false);
  }, [userStats]);

  return (
    <div className="divide-y">
      {userStats ? (
        <>
          <article className="flex items-center justify-between  border-gray-100 bg-white p-6">
            <p className="text-sm text-gray-500">My actions</p>
            <div className="flex justify-between">
              <p className="text-2xl font-medium text-gray-900">
                {userStats ? userStats.actions : "none"}
              </p>
            </div>

            {/* <div className="inline-flex gap-2 rounded bg-green-100 p-1 text-green-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                />
              </svg>

              <span className="text-xs font-medium"> 67.81% </span>
            </div> */}
          </article>

          <article className="flex items-center justify-between  border-gray-100 bg-white p-6">
            <p className="text-sm text-gray-500">My comments</p>

            <div className="flex justify-between">
              <p className="text-2xl font-medium text-gray-900">
                {userStats ? userStats.comments : "none"}
              </p>
            </div>

            {/* <div className="inline-flex gap-2 rounded bg-red-100 p-1 text-red-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"
                />
              </svg>

              <span className="text-xs font-medium"> 67.81% </span>
            </div> */}
          </article>

          <article className="flex items-center justify-between  border-gray-100 bg-white p-6">
            <p className="text-sm text-gray-500">My reports</p>

            <div className="flex justify-between">
              <p className="text-2xl font-medium text-gray-900">
                {userStats ? userStats.reports : "none"}
              </p>
            </div>

            {/* <div className="inline-flex gap-2 rounded bg-red-100 p-1 text-red-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"
                />
              </svg>

              <span className="text-xs font-medium"> 67.81% </span>
            </div> */}
          </article>
        </>
      ) : (
        <>saa</>
      )}
    </div>
  );
};

export default Statistics;
