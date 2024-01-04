import React from "react";

const Scanner = () => {
  return (
    <div>
      <div className="border-gray-75">
        <label htmlFor="OrderNotes" className="sr-only">
          Order notes
        </label>

        <div className="overflow-hidden shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
          <textarea
            id="OrderNotes"
            className="w-full resize-none border-none align-top focus:ring-0 sm:text-sm p-1"
            rows={4}
            placeholder="Enter any text..."
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
    </div>
  );
};

export default Scanner;
