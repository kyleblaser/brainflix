/** @format */

import React from "react";
import Logo from "../../assets/logo/BrainFlix-logo.svg";
import Search from "../../assets/icons/search.svg";
import Upload from "../../assets/icons/upload.svg";
import "./Nav.scss";

function Nav({ defaultPrevent }) {
  return (
    <header className="nav">
      <img className="nav__logo" src={Logo} alt="brainflix logo" />

      <form className="nav__form" onSubmit={defaultPrevent}>
        <div className="nav__searchWrapper">
          <input className="nav__search" type="search" placeholder="Search" />
          <img className="nav__searchImg" src={Search} alt="search icon" />
        </div>

        <div className="nav__form-bottom">
          <UploadButton />
          <div className="nav__mohan"></div>
        </div>
      </form>
    </header>
  );
}

function UploadButton() {
  return (
    <button className="nav__button" type="submit">
      <img className="nav__uploadImg" src={Upload} alt="Search icon" />
      UPLOAD
    </button>
  );
}

export default Nav;
