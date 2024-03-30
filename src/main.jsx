import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App.jsx";
import "./index.css";
import DataContextProvider from "./context/DataContextProvider.jsx";
import axios from "axios";
import { baseUrl } from "./config/app.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <DataContextProvider>
    <App />
  </DataContextProvider>
);

// axios.get(baseUrl + "/courses/").then((res) => {
//   console.log(res.data);
// });

// const getData = async () => {
//   const res = await axios.get(baseUrl + "/courses");
//   console.log(res.data);
// };
// getData();
