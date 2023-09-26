export const HumanGenerated = () => {
  return (
    <div className="rounded-full flex flex-row items-center justify-between p-1 border border-low text-low group/marker transition-all ease-linear duration-300">
      <span className="sr-only">Company Twitter</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
        />
      </svg>

      <p
        className="subpixel-antialiased uppercase hidden group-hover/marker:block transition-all ease-linear duration-150"
      >
        human generated
      </p>
    </div>
  );
};

export const LikelyAiGenerated = () => {
  return (
    <div className="rounded-full flex flex-row items-center justify-between space-x-1 border border-medium p-1 text-medium">
      <span className="sr-only">Company Twitter</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M12 9v3.75m0-10.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.249-8.25-3.286zm0 13.036h.008v.008H12v-.008z"
        />
      </svg>

      <p className="subpixel-antialiased uppercase">Likely AI-generated</p>
    </div>
  );
};

export const AiGenerated = () => {
  return (
    <div className="rounded-full flex flex-row items-center justify-between space-x-1 border border-high p-1 text-high">
      <span className="sr-only">AI-generated text</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M12 9v3.75m0-10.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.249-8.25-3.286zm0 13.036h.008v.008H12v-.008z"
        />
      </svg>

      <p className="subpixel-antialised uppercase">AI-generated</p>
    </div>
  );
};
