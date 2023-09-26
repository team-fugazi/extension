import * as Tabs from "@radix-ui/react-tabs";

export const Popup = () => {
  return (
    <Tabs.Root className="rounded-lg border border-gray-100 text-center">
      <Tabs.List className="flex flex-row justify-evenly border-b h-12">
        <Tabs.Trigger value="tab1" className="hover:bg-gray-400 w-full">
          tab 1
        </Tabs.Trigger>
        <Tabs.Trigger value="tab2" className="hover:bg-gray-400 w-full">
          tab 2
        </Tabs.Trigger>
      </Tabs.List>

      <Tabs.Content value="tab1">
        <>
          <div className="px-6 py-5">
            <p className="font-medium">Not found your answer?</p>

            <a
              className="inline-flex items-center gap-2 rounded border border-indigo-600 bg-indigo-600 px-8 py-3 text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
              href="/download"
            >
              <span className="text-sm font-medium"> Download </span>

              <svg
                className="h-5 w-5 rtl:rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>

            <div className="mt-4 space-y-2">
              <a
                className="block rounded-full border border-blue-500 px-8 py-3 text-sm font-medium text-blue-600"
                href=""
              >
                Message us
              </a>
              <a
                className="block rounded-full border border-gray-500 px-8 py-3 text-sm font-medium text-gray-600"
                href=""
              >
                Live chat
              </a>
            </div>

            <p className="mt-4 inline-flex items-center gap-1.5">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-green-500"></span>
              <span className="text-xs font-medium text-green-700">
                Chat online
              </span>
            </p>
          </div>

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

            <div className="rounded-full flex flex-row items-center space-x-2 border border-gray-200 p-2 text-gray-900">
              <span className="sr-only">Company Twitter</span>
              <svg
                className="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>

              <p>Status: online</p>
            </div>
          </footer>
        </>
      </Tabs.Content>

      <Tabs.Content value="tab2">
        <p>Hello</p>
      </Tabs.Content>
    </Tabs.Root>
  );
};
