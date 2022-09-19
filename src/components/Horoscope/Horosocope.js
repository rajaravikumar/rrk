import React from "react";
import { Container } from "react-bootstrap";
import horoscopeEnglish from "../../Assets/horoscopeEnglish.png";
import horoscopeKannnada from "../../Assets/horoscopeKannnada.png";
import horoscopeTamil from "../../Assets/horoscopeTamil.png";
import Pdf from "./../Pdf/Pdf";
import HoroscopePDF from "./../../../src/Assets/Horoscope.pdf";
import { horoscopeData } from "./../Data";

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
              <b>{horoscopeData.dob}</b>
            </td>
          </tr>
          <tr>
            <td>Height / Weight</td>
            <td>{horoscopeData.weight}</td>
          </tr>
          <tr>
            <td>Body type/ Complexion</td>
            <td>{horoscopeData.color}</td>
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
            <td>{horoscopeData.occupation}</td>
          </tr>

          <tr>
            <td>Annual Income</td>
            <td>{horoscopeData.income}</td>
          </tr>
          <tr rowSpan="3">
            <td>Siblings</td>
            <td>
              <li>{horoscopeData.Siblings1}</li>
              <li>{horoscopeData.Siblings2}</li>
              <li>{horoscopeData.Siblings3}</li>
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
            <td>{horoscopeData.contact}</td>
          </tr>

          <tr>
            <td>Address </td>
            <td>{horoscopeData.address}</td>
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
