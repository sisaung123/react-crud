import React, { useContext, useState } from "react";
import { DataContext } from "../context/DataContextProvider";
import { baseUrl } from "../config/app";
import axios from "axios";
import { courseApi } from "../api/course";

const CourseDeleteBtn = ({ id }) => {
  const [isLoading, setLoading] = useState(false);
  const { deleteCourse } = useContext(DataContext);
  const handleDeleteBtn = async () => {
    setLoading(true);
    const res = await courseApi.delete(`/courses/${id}`);

    if (res.status === 204) {
      setLoading(false);
      deleteCourse(id);
    }
  };
  return (
    <>
      <button
        type="button"
        onClick={handleDeleteBtn}
        disabled={isLoading}
        className=" relative group size-8 disabled:opacity-50 active:scale-75 duration-500 border border-blue-700 hover:text-white inline-flex justify-center items-center hover:bg-blue-500 focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
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
            d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
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

export default CourseDeleteBtn;
