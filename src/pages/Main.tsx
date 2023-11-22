import { useAuth0 } from "@auth0/auth0-react";
// Radix UI Primitives
import * as Tabs from "@radix-ui/react-tabs";
// Screens
import Loading from "../screens/Loading";
import Statistics from "../screens/Statistics";
import Scanner from "../screens/Scanner";
import Subreddit from "../screens/Subreddit";

// Local Components
import { LoginButton } from "../components/LoginButton";
import { Avatar } from "../components/Avatar";
import { LogoutButton } from "../components/LogoutButton";
import { useEffect } from "react";

const MainScreen = () => {
  const { isAuthenticated, error, isLoading, user } = useAuth0();

  useEffect(() => {
    console.log("Hello");
  }, [isAuthenticated]);

  // Return Loading screen if Auth0 is still loading
  if (isLoading) return <Loading />;

  if (!error) {
    return (
      <main className="rounded-lg border border-gray-100 text-center w-[320px]">
        {/* Header */}
        <div className="flex flex-row justify-start items-center border-b border-gray-100 px-6 py-5">
          {isAuthenticated && user ? (
            <>
              <Avatar user={user} />
              <div className="-space-y-1 pl-2">
                <p className="text-sm">{user?.name}</p>
                <p className="text-xs text-gray-400">{user?.email}</p>
                <LogoutButton />
              </div>
            </>
          ) : (
            <LoginButton />
          )}
        </div>

        {/* Tabs */}
        <Tabs.Root defaultValue="sub">
          {/* Tabs Nav */}
          <div className="flex flex-row border-b h-12 items-center">
            {/* Tabs Nav */}
            <Tabs.List className="flex flex-row justify-evenly h-12 grow">
              <Tabs.Trigger
                value="scan"
                className="hover:bg-gray-200 w-full font-medium subpixel-antialiased"
              >
                Scan
              </Tabs.Trigger>
              <Tabs.Trigger
                value="sub"
                className="hover:bg-gray-100 w-full font-medium subpixel-antialiased"
              >
                Subreddit
              </Tabs.Trigger>
              <Tabs.Trigger
                value="stats"
                className="hover:bg-gray-100 w-full font-medium subpixel-antialiased"
              >
                Statistics
              </Tabs.Trigger>
            </Tabs.List>
          </div>

          {/* Tab: Content Scan */}
          <Tabs.Content value="scan">
            <Scanner />
          </Tabs.Content>

          {/* Tab: Subreddit info */}
          <Tabs.Content value="sub">
            <Subreddit />
          </Tabs.Content>

          {/* Tab: User Statistics */}
          <Tabs.Content value="stats">
            <Statistics />
          </Tabs.Content>
        </Tabs.Root>

        {/* Footer */}
        <footer className="flex justify-between content-center gap-4 border-t border-gray-100 px-6 py-3">
          <div className="rounded-full border border-gray-200 p-2 text-gray-900">
            <span className="sr-only">Company Facebook</span>
            <svg
              className="h-4 w-4"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                clipRule="evenodd"
              />
            </svg>
          </div>

          <p className="inline-flex items-center gap-1.5">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-green-500"></span>
            <span className="text-xs font-medium text-green-700">
              Service Stable
            </span>
          </p>
        </footer>
      </main>
    );
  }
};

export default MainScreen;
