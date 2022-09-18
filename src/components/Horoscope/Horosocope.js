import React from "react";
import { Container } from "react-bootstrap";
import horoscopeEnglish from "../../Assets/horoscopeEnglish.png";
import horoscopeKannnada from "../../Assets/horoscopeKannnada.png";
import horoscopeTamil from "../../Assets/horoscopeTamil.png";
import Pdf from "./../Pdf/Pdf";
import HoroscopePDF from "./../../../src/Assets/Horoscope.pdf";

function Horoscope() {
  return (
    <Container fluid className="resume-section">
      <Container>
        <h3 className="resume-title">Bio Data</h3>
        <table>
          <tr>
            <td>Name</td>
            <td>
              <b>Ravi Kumar R</b>
            </td>
          </tr>
          <tr>
            <td>Date of Birth / Time</td>
            <td>
              <b>24-Jan-1993 @ 8:10am</b>
            </td>
          </tr>
          <tr>
            <td>Height / Weight</td>
            <td>5ft 5in (164cms) , 61Kg</td>
          </tr>
          <tr>
            <td>Body type/ Complexion</td>
            <td>Slim, Whitish, Fair</td>
          </tr>
          <tr>
            <td>Mother Tongue</td>
            <td>Tamil</td>
          </tr>
          <tr>
            <td>Religion</td>
            <td>Hindu</td>
          </tr>
          <tr>
            <td>Caste</td>
            <td>Gounder - Vanniya Kula Kshatriya</td>
          </tr>
          <tr>
            <td>Gothram</td>
            <td>Jambu Maharishi</td>
          </tr>
          <tr>
            <td>Zodiac</td>
            <td>Aquarius</td>
          </tr>
          <tr>
            <td>Star/Raasi</td>
            <td>Dhanishta Pada -1 / Makara (Capricorn)</td>
          </tr>
          <tr>
            <td>City/State/Country</td>
            <td>Bangalore, Karnataka, India</td>
          </tr>
          <tr>
            <td>Languages Known</td>
            <td>Tamil, English, Kannada</td>
          </tr>
          <tr>
            <td>Eating Habits</td>
            <td>Never drinks, never smokes</td>
          </tr>
          <tr>
            <td>Education</td>
            <td>M.Tech [Software Engineering], B.Tech [Computer Science]</td>
          </tr>

          <tr>
            <td>Occupation</td>
            <td>Software Engineer at Lowe's Companies, Inc, Bengaluru.</td>
          </tr>

          <tr>
            <td>Annual Income</td>
            <td>Rs.18-19lakh</td>
          </tr>
          <tr rowSpan="3">
            <td>Siblings</td>
            <td>
              <li>Elder daughter married and staying in Bengaluru</li>
              <li>
                Elder brother married - working in Honeywell as Technology Lead
                Engineer.
              </li>
              <li>Younger sister - working in CGI as Software Engineer.</li>
            </td>
          </tr>
          <tr>
            <td>Father Name</td>
            <td>Raja P</td>
          </tr>

          <tr>
            <td>Occupation</td>
            <td>Central Government (RMS) - Retired</td>
          </tr>

          <tr>
            <td>Mother Name</td>
            <td>Manjula M</td>
          </tr>
          <tr>
            <td>Occupation</td>
            <td>Home Maker</td>
          </tr>
          <tr>
            <td>Contact </td>
            <td>+91 9342547268</td>
          </tr>

          <tr>
            <td>Address </td>
            <td>
              #39,7th Cross, Ramakrishna Nagar,J. P. Nagar Post, Bangalore
              560078, Karnataka, India.
            </td>
          </tr>
        </table>
        <br></br>
        <br></br>
        <br></br>
        <h3 className="resume-title">Horoscope</h3>
        <br></br>
        <h4 className="resume-title">Tamil Version</h4>
        <br></br>
        <img src={horoscopeTamil} alt="Tamil Horoscope" className="img-fluid" />
        <br></br>
        <br></br>
        <br></br>
        <h4 className="resume-title">English Version</h4>
        <br></br>
        <img
          src={horoscopeEnglish}
          alt="English Horoscope"
          className="img-fluid"
        />

        <br></br>
        <br></br>
        <br></br>
        <h4 className="resume-title">Kannada Version</h4>
        <br></br>
        <img
          src={horoscopeKannnada}
          alt="Kannada Horoscope"
          className="img-fluid"
        />

        <br></br>
        <br></br>
        <br></br>
        <Pdf name="Download Horoscope" pdfLink={HoroscopePDF} />
      </Container>
    </Container>
  );
}

export default Horoscope;
