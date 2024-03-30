import React from "react";

const Loader = () => {
  return (
    <tr className="animate-pulse bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <th
        scope="row"
        className="px-6 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-10" />
      </th>

      <td className="px-6 py-4">
        <div className="flex items-center w-full max-w-[300px]">
          <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full" />
          <div className="h-2.5 ms-2 bg-gray-200 rounded-full dark:bg-gray-700 w-80" />
          <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full" />
        </div>
      </td>
      <td className="px-6 py-3 ">
        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-20" />
      </td>
      <td className="px-6 py-3">
        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-42" />
      </td>
      <td className="px-6 py-3 flex justify-end gap-1">
        <div className="w-10 h-10 bg-gray-300 rounded-full dark:bg-gray-300 " />
        <div className="w-10 h-10 bg-gray-300 rounded-full dark:bg-gray-600 " />
      </td>
    </tr>
  );
};

export default Loader;
