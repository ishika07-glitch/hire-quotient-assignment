export default function TableHead({ allSelected, setAllSelected }) {
  return (
    <thead>
      <tr>
        <th className="px-3 py-4 font-semibold text-center text-gray-900 dark:bg-gray-700/25 dark:text-gray-50">
          <input
            type="checkbox"
            id="check_all"
            name="check_all"
            className="w-4 h-4 text-blue-500 border border-gray-200 rounded dark:border-gray-600 dark:bg-gray-800 dark:ring-offset-gray-900 dark:checked:border-transparent dark:checked:bg-blue-500 dark:focus:border-blue-500"
            onChange={() => {
              setAllSelected(!allSelected);
            }}
          />
        </th>
        <th className="pb-4 pr-3 font-semibold text-center text-gray-900 border-b-2 border-gray-200/50 dark:border-gray-700 dark:text-gray-50">
          Name
        </th>
        <th className="px-3 pb-4 font-semibold text-center text-gray-900 border-b-2 border-gray-200/50 dark:border-gray-700 dark:text-gray-50">
          Email
        </th>
        <th className="px-3 pb-4 font-semibold text-center text-gray-900 border-b-2 border-gray-200/50 dark:border-gray-700 dark:text-gray-50">
          Role
        </th>
        <th className="px-3 pb-4 font-semibold text-center text-gray-900 border-b-2 border-gray-200/50 dark:border-gray-700 dark:text-gray-50">
          Actions
        </th>
      </tr>
    </thead>
  );
}
