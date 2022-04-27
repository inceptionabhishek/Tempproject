import React from "react";
import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Data from "../TempData/CourseList.js";
import { useState, useEffect } from "react";
import { Grid } from "@mui/material";
function Middlecontent() {
  const [CourseList, setCourseList] = useState([]);
  useEffect(() => {
    setCourseList(Data);
  }, []);

  return (
    <>
      <div className="container middlecontent">
        <h2 className="Top-Heading">Design Courses</h2>
        <h4 className="Top-para">Courses To get You started</h4>
      </div>
      <br />
      <br />
      <Container>
        <Row>
          <Col sm={4}>
            <Card>
              <h4 className="top-card-text">Filter</h4>
              <p className="text-sub-div">Level</p>
              <div className="select-cateogry">
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Beginner"
                    className="checkbox-text"
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Intermediate"
                    className="checkbox-text"
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Advanced"
                    className="checkbox-text"
                  />
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="All of the above"
                    className="checkbox-text"
                  />
                </FormGroup>

                <p className="text-sub-div">Price</p>

                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox />}
                    label="499-1000"
                    className="checkbox-text"
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="1000-1500"
                    className="checkbox-text"
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="1501-4000"
                    className="checkbox-text"
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="> 4000"
                    className="checkbox-text"
                  />
                </FormGroup>
              </div>
            </Card>
          </Col>
          <Col sm={8}>
            <div className="top-card-div">
              <Grid
                container
                spacing={3}
                direction="row"
                justify="center"
                alignItems="center"
                padding="4px"
              >
                {CourseList.map((course) => (
                  <Card className="card" style={{ width: "15rem" }}>
                    <Card.Img variant="top" src={course.img} />
                    <Card.Body>
                      <Card.Title>{course.name}</Card.Title>
                      <Card.Text>
                        <p>Price: Rs. {course.price}</p>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                ))}
              </Grid>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
/*


*/

export default Middlecontent;
