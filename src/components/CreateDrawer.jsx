import React, { useContext, useRef, useState } from "react";
import { DataContext } from "../context/DataContextProvider";
import { baseUrl } from "../config/app";
import axios from "axios";
import { courseApi } from "../api/course";

const CreateDrawer = () => {
  const { createDrawer, toggleCreateDrawer, addCourse } =
    useContext(DataContext);
  const [isLoading, setIsLoading] = useState();

  const titleRef = useRef("");
  const shortRef = useRef("");
  const feeRef = useRef("");
  const checkRef = useRef(false);

  const handleCreateBtn = async (event) => {
    event.preventDefault();
    const newCourse = {
      course_title: titleRef.current.value,
      short_name: shortRef.current.value,
      fee: feeRef.current.valueAsNumber,
    };
    setIsLoading(true);
    const res = await courseApi.post(`/courses/`, JSON.stringify(newCourse));

    addCourse(res.data);
    setIsLoading(false);
    titleRef.current.value = "";
    shortRef.current.value = "";
    feeRef.current.value = null;

    if (checkRef.current.checked) {
      toggleCreateDrawer();
    }

    checkRef.current.checked = false;
  };

  return (
    <div>
      <div className="">
        <form
          onSubmit={handleCreateBtn}
          id="drawer-right-example"
          className={`${
            !createDrawer && "translate-x-full"
          } fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto transition-transform  bg-white w-80 dark:bg-gray-800`}
          tabIndex={-1}
          aria-labelledby="drawer-right-label"
        >
          <h5
            id="drawer-right-label"
            className="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400"
          >
            <svg
              className="w-4 h-4 me-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
            </svg>
            Create New Course
          </h5>
          <button
            onClick={toggleCreateDrawer}
            type="button"
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
          >
            <svg
              className="w-3 h-3 pointer-events-none"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close menu</span>
          </button>

          <div className="max-w-sm mx-auto">
            <div className="mb-5">
              <label
                htmlFor=""
                className=" block mb-2 text-sm font-medium text-gray-700 dark:text-white"
              >
                Course Title
              </label>
              <input
                type="text"
                disabled={isLoading}
                ref={titleRef}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="eg.Lead Guitar Training"
                required
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor=""
                className="block mb-2 text-sm font-medium text-gray-700 dark:text-white"
              >
                Course Short
              </label>
              <input
                type="text"
                ref={shortRef}
                disabled={isLoading}
                id="text"
                placeholder="eg.LGT"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                required
              />
            </div>
            <div className="mb-10">
              <label
                htmlFor=""
                className="block mb-2 text-sm font-medium text-gray-700 dark:text-white"
              >
                Course Fee
              </label>
              <input
                type="number"
                disabled={isLoading}
                ref={feeRef}
                id=""
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex justify-center items-center ">
                <input
                  id="terms"
                  type="checkbox"
                  disabled={isLoading}
                  ref={checkRef}
                  defaultValue
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                  required
                />

                <label
                  htmlFor="terms"
                  className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Close & Save
                </label>
              </div>
              <div className="relative">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="group disabled:cursor-not-allowed disabled:opacity-50 disabled:ps-8 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  {isLoading ? "Loading ..." : "Create"}

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="hidden group-disabled:inline-block w-4 h-4 absolute inset-x-3 inset-y-3 animate-spin"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateDrawer;
