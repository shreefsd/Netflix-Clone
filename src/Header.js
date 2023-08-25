import React from "react";
import LogoRound from "../public/netflix-logo-netflix-icon-free-free-vector.jpg";
import Logo from "../public/images-netflix.png";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import PersonOutlineRoundedIcon from "@mui/icons-material/PersonOutlineRounded";

export default function Header() {
  return (
    <nav className="nav-bar">
      <div className="nav-left-container">
        <img className="logo" src={true ? Logo : LogoRound} alt="NetFlix" />
        <h3>KIDS</h3>
      </div>
      <div className="nav-right-container">
        <div className="nav-search">
          <input placeholder="Search for Movies here.." />
          <SearchRoundedIcon className="search" />
        </div>
        <PersonOutlineRoundedIcon className="profile" />
      </div>
    </nav>
  );
}
