import React, { createContext, useEffect, useState } from "react";

export const DataContext = createContext();

const DataContextProvider = ({ children }) => {
  const [createDrawer, setCreateDrawer] = useState(false);
  const [editDrawer, setEditDrawer] = useState(false);

  const [editCourse, setEditCourse] = useState([]);

  const [courses, setCourse] = useState([]);

  const toggleCreateDrawer = () => {
    setCreateDrawer(!createDrawer);
  };
  const toggleEditDrawer = () => {
    setEditDrawer(!editDrawer);
  };

  const addCourse = (newCourse) => {
    setCourse([...courses, newCourse]);
  };

  const deleteCourse = (id) => {
    setCourse(courses.filter((course) => course.id != id));
  };

  const updateCourse = (newCourse) => {
    setCourse(
      courses.map((course) => {
        if (course.id === newCourse.id) {
          return newCourse;
        }
        return course;
      })
    );
  };

  // const addCourseFetch = async() => {
  //    const res = await fetch("http://localhost:5173/api/courses/"+id, {
  //       Header:
  //    })
  // }
  return (
    <>
      <DataContext.Provider
        value={{
          createDrawer,
          toggleCreateDrawer,
          editDrawer,
          toggleEditDrawer,
          courses,
          setCourse,
          addCourse,
          deleteCourse,
          editCourse,
          setEditCourse,
          updateCourse,
        }}
      >
        {children}
      </DataContext.Provider>
    </>
  );
};

export default DataContextProvider;
