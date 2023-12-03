import { useEffect, useState } from "react";

export default function TableRow({ userData, allSelected }) {
  const [isSelected, setIsSelected] = useState(allSelected);
  useEffect(() => {
    setIsSelected(allSelected);
  }, [allSelected]);

  const handleEdit = () => alert("Editing");
  const handleDelete = () => alert("Deleting");
  return (
    <>
      <tr
        className={`border-b border-gray-100 ${
          isSelected ? "bg-gray-100" : null
        } dark:border-gray-700/50`}
      >
        <td className="p-3 text-center">
          <input
            type="checkbox"
            id="check_1"
            name="check_1"
            className="w-4 h-4 text-blue-500 border border-gray-200 rounded dark:border-gray-600 dark:bg-gray-800 dark:ring-offset-gray-900 dark:checked:border-transparent dark:checked:bg-blue-500 dark:focus:border-blue-500"
            checked={isSelected}
            onChange={() => 
              setIsSelected(!isSelected)
            }
          />
        </td>
        <td className="py-3 pr-3 font-medium">{userData?.name}</td>
        <td className="p-3 text-gray-500 dark:text-gray-400">
          {userData?.email}
        </td>
        <td className="p-3">
          <div className="inline-flex px-2 py-1 text-xs font-semibold leading-4 border border-transparent rounded-full bg-emerald-100 text-emerald-900 dark:border-emerald-900 dark:bg-emerald-700 dark:bg-opacity-10 dark:font-medium dark:text-emerald-200">
            {userData?.role}
          </div>
        </td>
        <td className="py-3 pl-3 text-center">
          <button
            type="button"
            className="inline-flex items-center justify-center px-2 py-1 space-x-2 text-sm font-semibold leading-5 text-gray-800 bg-white border border-gray-200 rounded-lg hover:border-gray-300 hover:text-gray-900 hover:shadow-sm focus:ring focus:ring-gray-300 focus:ring-opacity-25 active:border-gray-200 active:shadow-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-gray-600 dark:hover:text-gray-200 dark:focus:ring-gray-600 dark:focus:ring-opacity-40 dark:active:border-gray-700"
            onClick={() => handleEdit}
          >
            Edit
          </button>
          <button
            type="button"
            className="inline-flex items-center justify-center px-2 py-1 space-x-2 text-sm font-semibold leading-5 text-gray-800 bg-white border border-gray-200 rounded-lg hover:border-gray-300 hover:text-gray-900 hover:shadow-sm focus:ring focus:ring-gray-300 focus:ring-opacity-25 active:border-gray-200 active:shadow-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-gray-600 dark:hover:text-gray-200 dark:focus:ring-gray-600 dark:focus:ring-opacity-40 dark:active:border-gray-700"
            onClick={() => handleDelete}
          >
            Delete
          </button>
        </td>
      </tr>
    </>
  );
}
