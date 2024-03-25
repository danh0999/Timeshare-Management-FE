import React, { useEffect } from "react";
import "./filter.css";
// import video from '../../Assets/video.mp4'
import {
  IoLocationOutline,
  IoAlarmOutline,
  IoPricetagsOutline,
} from "react-icons/io5";
import { HiFilter } from "react-icons/hi";
import { IoLogoFacebook } from "react-icons/io";
import { FaInstagramSquare } from "react-icons/fa";
import { SiZalo } from "react-icons/si";
import { FaListAlt } from "react-icons/fa";
import { TbApps } from "react-icons/tb";

import Aos from "aos";
import "aos/dist/aos.css";

const Filters = ({ filters, setFilters, handleFilterChange }) => {
  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="home">
      <div className="overlay"></div>
      <div className="homeContent container">
        <div className="hero-image_quote-container">
          <div className="hero-image_quote">
            <div className="hero-image_quote-photo">
              <img
                width="179"
                height="157"
                src="https://sankid.vn/wp-content/uploads/2020/06/11-8.jpg"
                className="lazy"
                alt=""
              />{" "}
            </div>
            <blockquote className="hero-image_quote-text">
              Explore our exclusive Timeshare Vacation experience! Immerse
              yourself in a realm of opulence and tranquility with our top-tier
              timeshare selections. Whether you crave a seaside haven, a serene
              mountain hideaway, or an exhilarating urban getaway, we offer the
              ideal vacation retreat for you. Our goal is to curate
              unforgettable holiday memories for you. Delve into our wide array
              of timeshare choices, outstanding amenities, and unwavering
              customer service. Rent a timeshare with us and transform each
              vacation into an unforgettable journey.
            </blockquote>
            <div className="hero-image_quote-author-container">
              <cite className="hero-image_quote-author">Phong &amp; Tien </cite>
              <time className="hero-image_quote-date" dateTime="2015">
                VIP Members since 2019
              </time>
            </div>
          </div>
        </div>
      </div>
      <div className="searchBox">
        <div data-aos="fade-up" className="cardDiv grid">
          <div className="destinationInput">
            <label htmlFor="city">
              {" "}
              <IoLocationOutline className="icon" />
              <div style={{ width: "4px" }}></div>
              Search your timeshare:
            </label>
            <div className="input flex">
              <input
                onChange={handleChangeInput}
                type="text"
                placeholder="Enter name here...."
                name="timeshareName"
                value={filters?.timeshareName}
              />
            </div>
          </div>
          <div className="dateInput">
            <label htmlFor="date">
              {" "}
              <IoAlarmOutline className="icon" />
              <div style={{ width: "4px" }}></div>
              Select your Date:
            </label>
            <div className="input flex">
              <input
                onChange={handleChangeInput}
                type="date"
                placeholder="Enter name here...."
                name="publicDate"
                value={filters?.publicDate}
              />
            </div>
          </div>
          <div className="Price">
            <div className="label_total flex">
              <IoPricetagsOutline className="icon" />
              <div style={{ width: "4px" }}></div>
              <label htmlFor="price">Max price:&nbsp;</label>
              <p className="total">${filters?.maxPrice}</p>
            </div>
            <div className="input flex">
              <input
                onChange={handleChangeInput}
                type="range"
                max="1000"
                min="0"
                name="maxPrice"
                value={filters?.maxPrice}
              />
            </div>
          </div>
          <button
            className="buttonFilterAction"
            onClick={() => handleFilterChange(filters)}
          >
            SEARCH
          </button>
        </div>
        <div data-aos="fade-up" className="homeFooterIcons flex">
          <div className="searchOptions">
            <HiFilter className="icon" />
            <span>MORE FILTER</span>
          </div>
          <div className="rightIcons">
            <IoLogoFacebook className="icon" />
            <FaInstagramSquare className="icon" />
            <SiZalo className="icon" />
          </div>
          <div className="leftIcons">
            <FaListAlt className="icon" />
            <TbApps className="icon" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Filters;
