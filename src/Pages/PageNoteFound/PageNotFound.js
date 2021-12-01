// This is use for importing Components and CSS style
import React from 'react';
import { NavLink } from 'react-router-dom';
import './PageNotFount.css';

const PageNotFound = () => {
  return (
    // This Home Component use for Not Found page
    <div className="not-found-404">
      <img
        src="https://i.ibb.co/V2c6HYW/page-not-found-404.jpg"
        alt=""
        className="w-100"
      />

      {/* This is use for Back to home page. In the not found page */}
      <button className="btn button-to-home ">
        <NavLink to="/home">
          <strong className="">Back To Homepage</strong>
        </NavLink>
      </button>
    </div>
  );
};

export default PageNotFound;
