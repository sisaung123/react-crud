import React from "react";

const Container = ({ children }) => {
  return (
    <div className="container w-[900px] mx-auto px-5 lg:px-0 py-10 text-gray-800 min-h-screen flex flex-col">
      {children}
    </div>
  );
};

export default Container;
