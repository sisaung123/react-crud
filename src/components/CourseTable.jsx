import React, { useContext } from "react";
import CourseGroup from "./CourseGroup";
import { DataContext } from "../context/DataContextProvider";

const CourseTable = () => {
  const { toggleCreateDrawer } = useContext(DataContext);
  return (
    <div>
      <div className="flex justify-between items-center mb-10">
        <div className="px-4 py-3">
          <button
            type="button"
            onClick={toggleCreateDrawer}
            className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Create Course
          </button>
        </div>

        <div className="relative">
          <div className="pointer-events-none flex items-center absolute start-0 inset-y-0 ps-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 stroke-gray-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </div>

          <input
            type="text"
            className=" shadow-sm  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            placeholder="Search"
            required
          />
        </div>
      </div>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                #
              </th>
              <th scope="col" className="px-6 py-3">
                Course Title
              </th>
              <th scope="col" className="px-6 py-3 ">
                Short Title
              </th>
              <th scope="col" className="px-6 py-3 text-end">
                Course Fee
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only"></span>
              </th>
            </tr>
          </thead>
          <tbody>
            <CourseGroup />
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CourseTable;
