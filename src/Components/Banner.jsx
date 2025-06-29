import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";

export const Banner = () => {
  const contactHandle = () => {
    const link = document.createElement("a");
    link.href = "#contact";
    link.id = "contact";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <section className="banner" id="home">
      <Container className="">
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline" style={{ color: "#fff" }}>Welcome to my portfolio</span>
            <h1 style={{ color: "#fff" }}>{`Hi! I'm Anil Thakor`} </h1>
            <p style={{ color: "#e8e9eb" }}>
              Motivated Full stack Developer with foundational knowledge in{" "}
              <b>HTML</b>, <b>CSS</b>, <b>Tailwind CSS</b>, <b>Bootstrap</b>, <b>JavaScript</b>, <b>TypeScript</b>,{" "}
              <b>React.js</b>, <b>Next.js</b>, <b>Node.js</b>, <b>Express.js</b>, and <b>MongoDB</b>. Enthusiastic about
              building responsive, user-friendly web applications. Eager to
              apply modern web development practices and collaborate with
              dynamic teams to drive project success.
            </p>
            <button onClick={contactHandle}>
              {" "}
              let's Connect <ArrowRightCircle size={25}></ArrowRightCircle>
            </button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="header image" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

