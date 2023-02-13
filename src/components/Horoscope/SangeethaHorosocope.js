import React from "react";
import { Container } from "react-bootstrap";
import horoscopeSangeethaEnglish from "../../Assets/horoscopeSangeethaEnglish.png";
import horoscopeSangeethaKannada from "../../Assets/horoscopeSangeethaKannada.png";
import horoscopeSangeethaTamil from "../../Assets/horoscopeSangeethaTamil.png";
import Pdf from "../Pdf/Pdf";
import HoroscopeSangeethaPDF from "./../../../src/Assets/HoroscopeSangeethaPDF.pdf";
import { horoscopeSangeethaData } from "../Data";

function SangeethaHorosocope() {
  return (
    <Container fluid className="resume-section">
      <Container>
        <h3 className="resume-title">Bio Data</h3>
        <table>
          <tr>
            <td>Name</td>
            <td>
              <b>Sangeetha R</b>
            </td>
          </tr>
          <tr>
            <td>Date of Birth / Time</td>
            <td>
              <b>{horoscopeSangeethaData.dob}</b>
            </td>
          </tr>
          <tr>
            <td>Height / Weight</td>
            <td>{horoscopeSangeethaData.weight}</td>
          </tr>
          <tr>
            <td>Body type/ Complexion</td>
            <td>{horoscopeSangeethaData.color}</td>
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
            <td>Aries</td>
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
            <td>B.Tech [Computer Science]</td>
          </tr>

          <tr>
            <td>Occupation</td>
            <td>{horoscopeSangeethaData.occupation}</td>
          </tr>

          <tr>
            <td>Annual Income</td>
            <td>{horoscopeSangeethaData.income}</td>
          </tr>
          <tr rowSpan="3">
            <td>Siblings</td>
            <td>
              <li>{horoscopeSangeethaData.Siblings1}</li>
              <li>{horoscopeSangeethaData.Siblings2}</li>
              <li>{horoscopeSangeethaData.Siblings3}</li>
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
            <td>{horoscopeSangeethaData.contact}</td>
          </tr>

          <tr>
            <td>Address </td>
            <td>{horoscopeSangeethaData.address}</td>
          </tr>
        </table>
        <br></br>
        <br></br>
        <br></br>
        <h3 className="resume-title">Horoscope</h3>
        <br></br>
        <h4 className="resume-title">Tamil Version</h4>
        <br></br>
        <img src={horoscopeSangeethaTamil} alt="Tamil Horoscope" className="img-fluid" />
        <br></br>
        <br></br>
        <br></br>
        <h4 className="resume-title">English Version</h4>
        <br></br>
        <img
          src={horoscopeSangeethaEnglish}
          alt="English Horoscope"
          className="img-fluid"
        />

        <br></br>
        <br></br>
        <br></br>
        <h4 className="resume-title">Kannada Version</h4>
        <br></br>
        <img
          src={horoscopeSangeethaKannada}
          alt="Kannada Horoscope"
          className="img-fluid"
        />

        <br></br>
        <br></br>
        <br></br>
        <Pdf name="Download Horoscope" pdfLink={HoroscopeSangeethaPDF} />
      </Container>
    </Container>
  );
}

export default SangeethaHorosocope;
