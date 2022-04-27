import React from "react";
import Header from "./Header";
import Content from "./Content";
import Total from "./Total";

const Course = ({ courses }) => (
  <div>
    {courses.map((x) => (
      <div key={x.id}>
        <Header course={x.name} />
        <Content parts={x.parts} />
        <Total parts={x.parts} />
      </div>
    ))}
  </div>
);

export default Course;
