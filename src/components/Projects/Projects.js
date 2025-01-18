import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Dictionary from "../../Assets/Projects/Dictionary.png"
import Nike from "../../Assets/Projects/Nike.png"
import Movie from "../../Assets/Projects/Movie.png"
import Estate from "../../Assets/Projects/Estate.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Estate}
              isBlog={false}
              title="Real-Estate Website"
              description="Designed and developed a responsive real estate website using React.js, CSS, and media queries. The user-friendly interface allows seamless property exploration with dynamic filters."
              ghLink="https://github.com/Gopinathgopi13/Real-Estate-Website"
              demoLink="https://primepalaces.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Nike}
              isBlog={false}
              title="Sneaker"
              description="I've created an immersive online shopping experience for sneaker enthusiasts with HTML, CSS and Javascript. Explore the latest trends, enjoy personalized features, and step into the future of footwear fashion with Sneaker"
              ghLink="https://github.com/Gopinathgopi13/Nike-ecommerce-website.git"
              demoLink="https://sneakers-nike-shoes.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Movie}
              isBlog={false}
              title="Movie Rating App"
              description="Designed and developed a responsive movie rating website using React.js, API, CSS that allows users to view IMDb
              ratings for all movies, including recently released ones,
              Implemented the application using the TMDB API, which
              fetches and renders data from the server"
              ghLink="https://github.com/Gopinathgopi13/Movie-Rating-App"
              demoLink="https://moviestarratingapp.netlify.app/"
            />
          </Col>
          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Dictionary}
              isBlog={false}
              title="Dictionary"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/Gopinathgopi13/Dictionary"
              demoLink="https://dictionaryapiapp.netlify.app/"
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
