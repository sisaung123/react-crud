import React, { useContext, useEffect, useState } from "react";
import Course from "./Course";

import Loader from "./Loader";
import { DataContext } from "../context/DataContextProvider";
import EmptyCourse from "./EmptyCourse";
import { baseUrl } from "../config/app";
import axios from "axios";
import { courseApi } from "../api/course";

const CourseGroup = () => {
  // const { courses, ready } = useContext(DataContext);

  const loaderCount = Array.from({ length: 5 }, (_, index) => index);

  const { courses, setCourse } = useContext(DataContext);

  const [ready, setReady] = useState(false);
  const fetchCourse = async () => {
    setReady(true);
    const res = await courseApi.get("/courses/");

    setCourse(res.data);
    setReady(false);
  };

  useEffect(() => {
    fetchCourse();
  }, []);

  return (
    <>
      {ready && loaderCount.map((el) => <Loader />)}

      {!ready &&
        (courses.length ? (
          courses.map((course) => <Course key={course.id} course={course} />)
        ) : (
          <EmptyCourse />
        ))}
    </>
  );
};

export default CourseGroup;
