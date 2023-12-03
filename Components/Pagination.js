export default function Pagination({
  pageCount,
  pageNumber,
  getPreviousPage,
  getNextPage,
  setPageNumber,
  children,
}) {
  var numbers = [],
    i = 0,
    len = pageCount;
  while (++i <= len) numbers.push(i);

  console.log(pageNumber + 1);
  return (
    <div>
      {/* Pagination: In Card */}
      <div class="flex flex-col overflow-hidden rounded-lg bg-white shadow-sm dark:bg-gray-800 dark:text-gray-100">
        {/* Card Header */}
        <div class="bg-gray-50 px-5 py-4 dark:bg-gray-700/50">
          <h3 class="font-medium">User Table</h3>
        </div>
        {/* END Card Header */}
        {/* Card Body */}
        <div class=" p-5">
          {/* Placeholder */}
          <div class="rounded-lg border-2 border-gray-300 bg-gray-50 text-center dark:border-gray-700 dark:bg-gray-800">
            {children}
          </div>
        </div>
        {/* END Card Body */}

        {/* Card Footer */}
        <div class="grow border-t border-gray-200 px-5 py-4 dark:border-gray-700">
          {/* Pagination */}
          <div class="text-center dark:text-gray-100">
            <div class="hidden sm:flex sm:items-center sm:justify-between">
              <div>
                Page <span class="font-semibold">{pageNumber + 1}</span>{" "}
                of&nbsp;
                <span class="font-semibold">{pageCount}</span>
              </div>
              <nav class="inline-flex">
                <button
                  class={`-mr-px inline-flex items-center justify-center space-x-2 ${
                    pageNumber + 1 <= 1 ? "bg-gray-100" : "bg-white"
                  } rounded-l-lg border border-gray-200 bg-white px-4 py-2 font-semibold leading-6 text-gray-800 hover:z-1 hover:border-gray-300 hover:text-gray-900 hover:shadow-sm focus:z-1 focus:ring focus:ring-gray-300 focus:ring-opacity-25 active:z-1 active:border-gray-200 active:shadow-none `}
                  disabled={pageNumber + 1 <= 1 ? true : ""}
                  onClick={() => getPreviousPage(pageNumber)}
                >
                  <svg
                    class="hi-mini hi-chevron-left -mx-1.5 inline-block h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
                {numbers?.map((number) => (
                  <button
                    class={`-mr-px inline-flex items-center justify-center space-x-2 border border-gray-200  ${
                      pageNumber + 1 === number ? "bg-gray-300" : "bg-white"
                    } px-4 py-2 font-semibold leading-6 text-gray-800 hover:z-1 hover:border-gray-300 hover:text-gray-900 hover:shadow-sm focus:z-1 focus:ring focus:ring-gray-300 focus:ring-opacity-25 active:z-1 active:border-gray-200 active:shadow-none `}
                    onClick={() => setPageNumber(number - 1)}
                  >
                    {number}
                  </button>
                ))}

                <button
                  class={`inline-flex items-center justify-center ${
                    pageNumber + 1 >= pageCount ? "bg-gray-100" : "bg-white"
                  } space-x-2 rounded-r-lg border border-gray-200  px-4 py-2 font-semibold leading-6 text-gray-800 hover:z-1 hover:border-gray-300 hover:text-gray-900 hover:shadow-sm focus:z-1 focus:ring focus:ring-gray-300 focus:ring-opacity-25 active:z-1 active:border-gray-200 active:shadow-none`}
                  disabled={`${pageNumber + 1 >= pageCount ? true : ""}`}
                  onClick={() => getNextPage(pageNumber)}
                >
                  <svg
                    class="hi-mini hi-chevron-right -mx-1.5 inline-block h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
              </nav>
              {/* END Visible on desktop */}
            </div>
          </div>
          {/* END Pagination */}
        </div>
        {/* END Card Footer */}
      </div>
      {/* END Pagination: In Card */}
    </div>
  );
}
