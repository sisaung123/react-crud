import React, { useContext } from "react";
import { DataContext } from "../context/DataContextProvider";

const EmptyCourse = () => {
  const { toggleCreateDrawer } = useContext(DataContext);
  return (
    <>
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        {/* <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          {id}
        </th> */}
        <td colSpan={5} className="px-6 py-4 text-center">
          There is no courses...
          <button onClick={toggleCreateDrawer} className="underline">
            Create New Course
          </button>
        </td>
      </tr>
    </>
  );
};

export default EmptyCourse;
