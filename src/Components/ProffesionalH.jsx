import {
  Container,
  Row,
  Col,
  TabContainer,
  TabPane,
  TabContent,
} from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import { ProjectCard } from "../../ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projectImg1 from "../assets/img/projectImg1.png";
import projectImg2 from "../assets/img/projectImg2.png";
import projectImg3 from "../assets/img/projectImg3.png";
import projectImg4 from "../assets/img/projectImg4.png";
import projectImg5 from "../assets/img/projectImg5.png";
import projectImg6 from "../assets/img/projectImg6.png";
import nsarnaAdmin from "../assets/img/nasarnaAdmin2.png";
import nsarnaDonation from "../assets/img/nasarna_front.png";
import chitChat from "../assets/img/ChatApp.png";
import contact from "../assets/img/Contact3.png";
import ProjectCardSlider from "./ProjectCardSlider";

export const ProfessionalH = () => {
  const projects = [
    {
      title: "Portfolio Website-With AI Assistant",
      description: "Tech stack: HTML, CSS, REACTJS, React Bootstrap, ChatBOT",
      Link: `https://portfolio-delta-virid-14.vercel.app/`,
      imgUrl: projectImg1,
    },       {
      title: "Nasarna Donation Admin Dashboard",
      description: "Tech stack: ReactJs, Tailwind CSS, Redux Toolkit/Context API",
      Link: `https://nasarna-helping-hand-donation-trust.vercel.app/auth/login`,
      imgUrl: nsarnaAdmin,
    },
     {
      title: "Nasarna Donation Website",
      description: "Tech stack: ReactJs, Tailwind CSS, Redux Toolkit",
      Link: `https://nasarna-donation-website.vercel.app/`,
      imgUrl: nsarnaDonation,  
    },
    {
      title: "Chit-Chat Realtime Chat Application",
      description: "Tech stack: ReactJs, Tailwind CSS, Socket.io, Node.js, Express.js, MongoDB",
      Link: `https://chitchat-fullstack-app.onrender.com/`,
      imgUrl: chitChat,  
    },
  
    {
      title: "Simon Says Game!",
      description: "Tech stack: HTML, CSS and Javascript",
      Link: `https://simon-says-game-khaki.vercel.app/`,
      imgUrl: projectImg2,
    },
    {
      title: "Contactly a Fullstack Contact Management App",
      description: "Tech stack: ReactJs, Tailwind CSS, Redux Toolkit, Node.js, Express.js, MongoDB",
      Link: `https://contactly-frontend.vercel.app/`,
      imgUrl: contact,
    },
    {
      title: "Spotify Streaming Platform",
      description: "Tech stack: HTML and CSS",
      Link: `https://spotify-sreamingplatform-m6e1wsteb-anil-thakors-projects.vercel.app/`,
      imgUrl: projectImg3,
    },
    {
      title: "Netflix clone",
      description: "Tech stack: HTML and CSS",
      Link: `https://netflix-cloneproject-2ye554ntt-anil-thakors-projects.vercel.app/`,
      imgUrl: projectImg4,
    },
    {
      title: "Snake Game",
      description: "Tech stack: HTML, CSS and Javascript",
      Link: `https://snake-game-dusky-five.vercel.app/`,
      imgUrl: projectImg5,
    },
    {
      title: "Responsive Landing Page",
      description: "Tech stack: HTML, CSS",
      Link: `https://uifrycom-anil-thakors-projects.vercel.app/`,
      imgUrl: projectImg6,
    },
  ];


  return (
    <div className="ph" id="ph">
      <Container>
        <Row>
          <Col>
            <h2>Professional highlights</h2>
            <h6 className="summary ">
              Short Summary of my Professional Journey
            </h6>
            <TabContainer id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                defaultActiveKey="first"
                className="nav-pills mb-5 justify-content-center align-item-center "
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Projects</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Experience</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third"> Achievements</Nav.Link>
                </Nav.Item>
              </Nav>
              <TabContent>
                <TabPane eventKey="first">
                  <ProjectCardSlider projects={projects} />
                </TabPane>
                <TabPane eventKey="second">
                  <h4>
                    1) Junior Full-stack Developer - Webcreta Technologies (
                    July 2024 - Present ){" "}
                  </h4>

                  <p className="text-start">
                    Actively involved in building and maintaining full-stack web
                    applications using the MERN stack. Worked on live client
                    projects, developing dynamic user interfaces with React.js,
                    Next.js, TypeScript, and Tailwind CSS. Built secure REST
                    APIs using Node.js and Express, and managed data with
                    MongoDB. Collaborated closely with senior developers to
                    implement real-world features, fix bugs, and optimize
                    performance. Contributed to Git-based workflows,
                    participated in daily standups, and gained hands-on
                    experience in deploying and maintaining production-ready
                    applications.
                  </p>
                </TabPane>
                <TabPane eventKey="second">
                  <h4>
                    2) Office Assistant - Physical Research Laboratory ( Aug
                    2023 - July 2024 ){" "}
                  </h4>

                  <p className="text-start">
                    As an Office Assistant at the Physical Research Laboratory
                    in Ahmedabad under CSSTEAP, I coordinated the Space and
                    Atmospheric Science course, organized tours, and managed
                    events and administrative tasks. I supported students and
                    scientists, including those involved in Chandrayaan 3, and
                    handled lectures and exams for international students.
                    Additionally, I designed the Memorial Book for the SAS-13
                    course, featuring messages from prominent directors.
                  </p>
                </TabPane>
                <TabPane eventKey="third">
                  <h4>
                    1) First Rank in Post Graduate Diploma in Computer
                    Application ( Gujarat Vidyapith - 2023 )
                  </h4>
                  <p className="text-start">
                    Achieving First Rank in the program, I had the opportunity
                    to collaborate with talented peers and experienced faculty
                    members, contributing to a rich learning environment. This
                    experience has not only expanded my technical expertise but
                    has also equipped me with problem-solving skills and a knack
                    for innovation in the ever-evolving field of computer
                    applications. I'm now eager to apply my knowledge and skills
                    in real-world scenarios, and I'm open to exciting
                    opportunities in the field.
                  </p>

                  <h4>2) First Prize in Tech-presentation</h4>
                  <p className="text-start">
                    I delivered an outstanding presentation during the
                    competition, captivating both judges and the audience with
                    my clear and engaging articulation of complex ideas and
                    innovative solutions. This prestigious award showcases my
                    commitment to technological advancements and highlights my
                    potential impact in the tech industry. I am grateful for the
                    recognition and excited to continue my journey as a tech
                    enthusiast.
                  </p>
                </TabPane>
              </TabContent>
            </TabContainer>
          </Col>
        </Row>
      </Container>
      <img src={colorSharp2} alt="" className="background-image-right" />
    </div>
  );
};
