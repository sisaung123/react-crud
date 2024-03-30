import React, { useContext } from "react";
import Header from "./Header";
import Container from "./Container.jsx";
import CourseTable from "./CourseTable.jsx";
import CreateDrawer from "./CreateDrawer.jsx";
import EditDrawer from "./EditDrawer.jsx";
import { DataContext } from "../context/DataContextProvider.jsx";

const App = () => {
  const { editDrawer } = useContext(DataContext);
  return (
    <Container>
      <Header />
      <CreateDrawer />
      {editDrawer && <EditDrawer />}
      <CourseTable />
    </Container>
  );
};

export default App;
