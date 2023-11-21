import { useAuth0 } from "@auth0/auth0-react";

// Radix UI Primitives
import * as Tabs from "@radix-ui/react-tabs";

// Local Components
import { LoginButton } from "../components/LoginButton";
import { Avatar } from "../components/Avatar";
import Loading from "../screens/Loading";

const MainScreen = () => {
  const { isAuthenticated, error, isLoading, user } = useAuth0();

  // Return Loading screen if Auth0 is still loading
  if (isLoading) return <Loading />;

  // Return Auth Screen if not authenticated
  if (!isAuthenticated) {
    return <LoginButton />;
  }

  if (!error) {
    return (
      <main className="rounded-lg border border-gray-100 text-center w-[320px]">
        {/* Header */}
        <div className="flex flex-row justify-start items-center border-b border-gray-100 px-6 py-5">
          {isAuthenticated && user ? <Avatar user={user} /> : <>Test</>}
          <div className="-space-y-1 pl-2">
            <p className="text-sm">{user?.name}</p>
            <p className="text-xs text-gray-400">{user?.email}</p>
          </div>
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
            <div className="border-t border-gray-75">
              <label htmlFor="OrderNotes" className="sr-only">
                Order notes
              </label>

              <div className="overflow-hidden shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
                <textarea
                  id="OrderNotes"
                  className="w-full resize-none border-none align-top focus:ring-0 sm:text-sm p-1"
                  rows={4}
                  placeholder="Enter any additional order notes..."
                ></textarea>

                <div className="flex items-center justify-end gap-2 bg-white p-3">
                  <button
                    type="button"
                    className="rounded bg-gray-200 px-3 py-1.5 text-sm font-medium text-gray-700 hover:text-gray-600"
                  >
                    Clear
                  </button>

                  <button
                    type="button"
                    className="rounded bg-indigo-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-indigo-700"
                  >
                    Scan
                  </button>
                </div>
              </div>
            </div>
          </Tabs.Content>

          {/* Tab: Subreddit info */}
          <Tabs.Content value="sub">
            <a className="relative block overflow-hidden p-4">
              <div className="text-left">
                <h3 className="text-md font-bold text-gray-900 sm:text-lg">
                  Building a SaaS product as a software developer
                </h3>

                <p className="mt-1 text-xs font-medium text-gray-600">
                  By John Doe
                </p>
              </div>

              <div className="mt-4">
                <p className="max-w-[40ch] text-sm text-gray-500">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. At
                  velit illum provident a, ipsa maiores deleniti consectetur
                  nobis et eaque.
                </p>
              </div>

              <dl className="mt-6 flex gap-4 sm:gap-6">
                <div className="flex flex-col-reverse">
                  <dt className="text-sm font-medium text-gray-600">
                    Published
                  </dt>
                  <dd className="text-xs text-gray-500">31st June, 2021</dd>
                </div>

                <div className="flex flex-col-reverse">
                  <dt className="text-sm font-medium text-gray-600">
                    Reading time
                  </dt>
                  <dd className="text-xs text-gray-500">3 minute</dd>
                </div>
              </dl>
            </a>
          </Tabs.Content>

          {/* Tab: User Statistics */}
          <Tabs.Content value="stats">
            <article className="flex items-end justify-between rounded-lg border border-gray-100 bg-white p-6">
              <div>
                <p className="text-sm text-gray-500">Posted index</p>

                <p className="text-2xl font-medium text-gray-900">$240.94</p>
              </div>

              <div className="inline-flex gap-2 rounded bg-green-100 p-1 text-green-600">
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
              </div>
            </article>

            <article className="flex items-end justify-between rounded-lg border border-gray-100 bg-white p-6">
              <div>
                <p className="text-sm text-gray-500">Detection rate</p>

                <p className="text-2xl font-medium text-gray-900">$240.94</p>
              </div>

              <div className="inline-flex gap-2 rounded bg-red-100 p-1 text-red-600">
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
              </div>
            </article>
          </Tabs.Content>
        </Tabs.Root>

        {/* Footer */}
        <footer className="flex justify-between gap-4 border-t border-gray-100 px-6 py-5">
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

          <p className="mt-4 inline-flex items-center gap-1.5">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-green-500"></span>
            <span className="text-xs font-medium text-green-700">
              Chat online
            </span>
          </p>
        </footer>
      </main>
    );
  }
};
