import { useEffect, useState } from "react";
import TableHead from "./TableHead";
import TableRow from "./TableRow";

export default function Table({ data }) {
  const [searchedVal, setSearchedVal] = useState("");
  const [allSelected, setAllSelected] = useState(false);
  const [selectedRows, setSelectedRows] = useState([]);

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      alert("Search triggered");
    }
  };

  return (
    <>
      {/* Tables: In Card with Search and Actions */}
      <div className="flex flex-col overflow-hidden bg-white rounded-lg shadow-sm dark:bg-gray-800 dark:text-gray-100">
        {/* Search bar*/}
        <div className="p-5 pt-8 border-b border-gray-100 grow dark:border-gray-700">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center justify-center w-10 my-px ml-px text-gray-500 rounded-l pointer-events-none">
              <svg
                className="inline-block w-5 h-5 hi-mini hi-magnifying-glass"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="flex">
              <input
                type="text"
                id="search"
                name="search"
                value={searchedVal}
                className="block w-full py-2 pl-10 pr-3 text-sm leading-6 placeholder-gray-400 border border-gray-200 rounded-lg focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:border-gray-700 dark:bg-gray-800 dark:focus:border-blue-500"
                placeholder="Search with name, email or roles"
                onChange={(e) => setSearchedVal(e.target.value)}
                onKeyDown={handleKeyPress}
              />
              <button className="ml-10 mr-5">
                <svg
                  class="hi-mini hi-trash inline-block w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="red"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8.75 1A2.75 2.75 0 006 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 10.23 1.482l.149-.022.841 10.518A2.75 2.75 0 007.596 19h4.807a2.75 2.75 0 002.742-2.53l.841-10.52.149.023a.75.75 0 00.23-1.482A41.03 41.03 0 0014 4.193V3.75A2.75 2.75 0 0011.25 1h-2.5zM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4zM8.58 7.72a.75.75 0 00-1.5.06l.3 7.5a.75.75 0 101.5-.06l-.3-7.5zm4.34.06a.75.75 0 10-1.5-.06l-.3 7.5a.75.75 0 101.5.06l.3-7.5z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="p-5 grow">
          {/* Responsive Table Container */}
          <div className="min-w-full overflow-x-auto bg-white rounded dark:border-gray-700 dark:bg-gray-800">
            {/* Table */}
            <table className="min-w-full text-sm align-middle whitespace-nowrap">
              {/* Table Header */}
              <TableHead
                allSelected={allSelected}
                setAllSelected={setAllSelected}
              />
              {/* END Table Header */}
              {/* Table Body */}
              <tbody>
                {data
                  ?.filter(
                    (row) =>
                      !searchedVal?.length ||
                      row.name
                        .toString()
                        .toLowerCase()
                        .includes(searchedVal.toString().toLowerCase()) ||
                      row.email
                        .toString()
                        .toLowerCase()
                        .includes(searchedVal.toString().toLowerCase()) ||
                      row.role
                        .toString()
                        .toLowerCase()
                        .includes(searchedVal.toString().toLowerCase())
                  )
                  .map((data) => (
                    <TableRow
                      key={data?.id}
                      userData={data}
                      allSelected={allSelected}
                    />
                  ))}
              </tbody>
              {/* END Table Body */}
            </table>
            {/* END Table */}
          </div>
          {/* END Responsive Table Container */}
        </div>
      </div>
      {/* END Tables: In Card with Search and Actions */}
    </>
  );
}
