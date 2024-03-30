import React, { useContext } from "react";
import { DataContext } from "../context/DataContextProvider";
import CourseDeleteBtn from "./CourseDeleteBtn";
import CourseEditBtn from "./CourseEditBtn";

const Course = ({ course: { id, course_title, short_name, fee } }) => {
  const { toggleEditDrawer, deleteCourse } = useContext(DataContext);

  return (
    <>
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          {id}
        </th>
        <td className="px-6 py-4">{course_title}</td>
        <td className="px-6 py-4 ">{short_name}</td>
        <td className="px-6 py-4 text-end">{fee} </td>
        <td className="px-6 py-4 flex justify-end">
          <CourseEditBtn id={id} />
          <CourseDeleteBtn id={id} />
        </td>
      </tr>
    </>
  );
};

export default Course;
