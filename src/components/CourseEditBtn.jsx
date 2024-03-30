import React, { useContext, useState } from "react";
import { DataContext } from "../context/DataContextProvider";
import { baseUrl } from "../config/app";
import axios from "axios";
import { courseApi } from "../api/course";

const CourseEditBtn = ({ id }) => {
  const { toggleEditDrawer, setEditCourse } = useContext(DataContext);
  const [isLoading, setLoading] = useState(false);

  const handleEditBtn = async () => {
    setLoading(true);

    const res = await courseApi.get(`/courses/${id}`);

    setEditCourse(res.data);

    toggleEditDrawer();
    setLoading(false);
  };

  return (
    <>
      <button
        type="button"
        onClick={handleEditBtn}
        disabled={isLoading}
        className="size-8 group active:scale-75 duration-500 border border-blue-700 hover:text-white inline-flex justify-center items-center hover:bg-blue-500 focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-4 h-4 pointer-events-none group-disabled:hidden"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="hidden group-disabled:inline-block w-4 h-4 animate-spin"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
          />
        </svg>
      </button>
    </>
  );
};

export default CourseEditBtn;
