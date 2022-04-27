import React from "react";
import { Carousel } from "react-bootstrap";
import CardComponent from "./CardComponent";
import CourseList from "../TempData/CourseList";
function Carouselcomponent() {
  const Data1 = CourseList[0];
  const Data2 = CourseList[2];
  const Data3 = CourseList[3];
  return (
    <>
      <div className="container">
        <h3>Advance your career with new skill</h3>
      </div>
      <Carousel variant="dark">
        <Carousel.Item>
          <CardComponent data={Data2} />
        </Carousel.Item>
        <Carousel.Item>
          <CardComponent data={Data1} />
        </Carousel.Item>
        <Carousel.Item>
          <CardComponent data={Data3} />
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default Carouselcomponent;
