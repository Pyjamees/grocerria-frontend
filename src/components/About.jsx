import React from "react";
import Profile from "../images/profile.jpg";
import Container from "react-bootstrap/Container";
import Footer from "./Footer";

function About() {
  return (
    <React.Fragment>
      <div className="body">
        <Container className="aboutContainer" style={{ width: "55%" }}>
          <img
            alt=""
            src={Profile}
            width="180px"
            height="180px"
            className="d-inline-block align-centre aboutProfile"
            style={{ marginBottom: "2px", marginRight: "2px" }}
          />
          <div className="aboutTextDiv">
            <div style={{ width: "fit-content", position: "relative" }}>
              <h2 className="aboutTextHeading">
                Hi all! I'm James. I sort things.
              </h2>
            </div>
            <p className="aboutTextParagraph">
              As someone who is conscious about what I put into my body, I've
              always had a fascination with macronutrients and what makes up our
              food.
            </p>
            <p className="aboutTextParagraph">
              Looking through the packaging information of individual food
              products can be time-consuming, and comparing two products on the
              shelf can be a chore.
            </p>
            <p className="aboutTextParagraph">
              I've designed{" "}
              <em>
                <strong>GrocerRia</strong>
              </em>{" "}
              to help Aussies, including yourself, sort through their groceries
              based on the important things. Whether you're looking to cut back
              on calories, or follow a diet plan, or meal prep for the next
              month ahead,{" "}
              <em>
                <strong>GrocerRia</strong>
              </em>{" "}
              is here to help you make sure you know what you're putting into
              your body.
            </p>
            <p
              className="aboutTextParagraph"
              style={{ textAlign: "right", paddingRight: "5%" }}
            >
              - James W.
            </p>
          </div>
        </Container>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default About;
