import "./App.css";
import samsung from "./images/samsung11.png";
import laptop from "./images/laptop1.png";
import resume from "./files/CV_Abdurrahman_Alghifari.pdf";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="background">
      <div className="bg-1">
        <div>
          <div className="font-face-bg1">
            <h1 style={{ color: "#4b4b4b" }}>
              Hi, I'm
              <span> Abdurrahman Alghifari</span>
            </h1>
          </div>
          <div>
            <p style={{ color: "#4b4b4b", fontFamily: "MuseoSans-100" }}>
              In January 2021, I started my journey to become a programmer. I
              joined a 6-months full stack web development bootcamp at one of
              the well-known digital skill learning institutions, Purwadhika. I
              have hands-on experience on several web technologies such as
              ReactJS, React Native, MongoDB, MySQL, and Node.js. Here are some
              images of my works.
            </p>
          </div>
          <div style={{ marginBottom: 30, marginTop: 30 }}>
            <Link
              to={{ pathname: "https://www.instagram.com/seputardigital.id" }}
              target="_blank"
            >
              <span className="icon icon-instagram"></span>
            </Link>
            <Link
              to={{
                pathname:
                  "https://www.linkedin.com/in/abdurrahman-alghifari-2a133b1a7/",
              }}
              target="_blank"
            >
              <span className="icon icon-linkedin"></span>
            </Link>
            <Link
              to={{
                pathname: "https://github.com/Abdralghi",
              }}
              target="_blank"
            >
              <span className="icon icon-github"></span>
            </Link>
          </div>
          <Link
            to={resume}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <div className="button">
              <p>My Resume</p>
            </div>
          </Link>
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div className="bg-2">
          <div className="bg-2-number">
            <p>.001</p>
          </div>
          <div className="bg-2-image">
            <img
              src={samsung}
              className="samsung-image"
              // height="auto"
              // width="30%"
            />
          </div>
          <div className="bg-2-proj">
            <p>Cat Gallery</p>
          </div>
        </div>
        <div className="bg-3">
          <div className="bg-3-number">
            <p>.002</p>
          </div>
          <div className="bg-3-image">
            <img
              src={laptop}
              className="laptop-image"
              // height="auto"
              // width="63%"
            />
          </div>
          <div className="bg-3-proj">
            <p>Car Shop</p>
          </div>
        </div>
        <div className="bg-4-footer">
          <p>&#169; 2021 Abdurrahman Alghifari. Made in Indonesia.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
