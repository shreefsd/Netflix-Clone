import React from "react";
import LanguageIcon from "@mui/icons-material/Language";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="contact">
          <p>
            Questions? Call <a href="">000-800-919-1694</a>
          </p>
        </div>
        <div className="list-container">
          <ul>
            <li>
              <a href="">FAQ</a>
            </li>
            <li>
              <a href="">Help Centre</a>
            </li>
            <li>
              <a href="">Account</a>
            </li>
            <li>
              <a href="">Media Centre</a>
            </li>
            <li>
              <a href="">Invester Relations</a>
            </li>
            <li>
              <a href="">Jobs</a>
            </li>
            <li>
              <a href="">Ways to Watch</a>
            </li>
            <li>
              <a href="">Terms of Use</a>
            </li>
            <li>
              <a href="">Privacy</a>
            </li>
            <li>
              <a href="">Cookie Preferences</a>
            </li>
            <li>
              <a href="">Corporate Information</a>
            </li>
            <li>
              <a href="">Contact Us</a>
            </li>
            <li>
              <a href="">Speed Test</a>
            </li>
            <li>
              <a href="">Legal Notices</a>
            </li>
            <li>
              <a href="">Only on Netflix</a>
            </li>
          </ul>
        </div>
        <div className="language-container">
          <div className="selectdiv">
            <LanguageIcon className="icon"></LanguageIcon>
            <select>
              <option>English</option>
              <option>हिंदी</option>
            </select>
          </div>
        </div>
        <div className="origin">
          <p>Netflix India</p>
        </div>
      </footer>
    </>
  );
}
