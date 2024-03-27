import React, { useEffect } from "react";
import "./footer.css";
// import { FiChevronRight, FiSend } from "react-icons/fi";
import { MdApartment } from "react-icons/md";
import { AiOutlineTwitter } from "react-icons/ai";
import { SiZalo } from "react-icons/si";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import Aos from "aos";
import { FaEarthAsia } from "react-icons/fa6";
import "aos/dist/aos.css";
import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const redirectToTwitter = () => {
    window.open("https://twitter.com/", "_blank");
  };

  // Function to handle redirection to Facebook
  const redirectToFacebook = () => {
    window.open("https://www.facebook.com/", "_blank");
  };

  // Function to handle redirection to Instagram
  const redirectToInstagram = () => {
    window.open("https://www.instagram.com/", "_blank");
  };

  // Function to handle redirection to Zalo
  const redirectToZalo = () => {
    window.open("https://chat.zalo.me/", "_blank");
  };

  return (
    <section className="footer">
      <div className="secContent container">
        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div class="logoDiv">
              <Link to="/" class="navbarLogo flex">
                <img
                  src="https://scontent.xx.fbcdn.net/v/t1.15752-9/432813694_1585955775525907_3594031435206372588_n.png?stp=cp0_dst-png&_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=fuD2b3Oxu38AX_TB8dJ&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdRSWt2nyll1Ky3fH-SzDWXZwFpF26K_8zDrV1JHDgMy8Q&oe=662B8F4E"
                  alt=""
                  class="logo"
                />
                <h1>Timeshare</h1>
              </Link>
            </div>
            <div data-aos="fade-up" className="footerSocials flex">
              <AiOutlineTwitter className="icon" onClick={redirectToTwitter} />
              <FaFacebookSquare className="icon" onClick={redirectToFacebook} />
              <FaInstagramSquare
                className="icon"
                onClick={redirectToInstagram}
              />
              <SiZalo className="icon" onClick={redirectToZalo} />
            </div>
          </div>

          <div className="footerLinks grid">
            <div
              data-aos="fade-up"
              data-aos-duration="3000"
              className="linkGroup"
            >
              <span className="groupTitle">RESOURCES</span>
              <li className="footerList flex">
                {/* <FiChevronRight className="icon" /> */}
                Contact
              </li>
              <li className="footerList flex">
                {/* <FiChevronRight className="icon" /> */}
                Owner Resources
              </li>

              <li className="footerList flex">
                {/* <FiChevronRight className="icon" /> */}
                FAQs
              </li>

              <li className="footerList flex">
                {/* <FiChevronRight className="icon" /> */}
                Help Resources & Articles
              </li>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="4000"
              className="linkGroup"
            >
              <span className="groupTitle">PARTNERS</span>
              <li className="footerList flex">
                {/* <FiChevronRight className="icon" /> */}
                Booking
              </li>

              <li className="footerList flex">
                {/* <FiChevronRight className="icon" /> */}
                Advertising and Marketing
              </li>

              <li className="footerList flex">
                {/* <FiChevronRight className="icon" /> */}
                Legel Consulting
              </li>

              <li className="footerList flex">
                {/* <FiChevronRight className="icon" /> */}
                Priority Sale Strategy
              </li>

              <li className="footerList flex">
                {/* <FiChevronRight className="icon" /> */}
                Dashboard And Reporting
              </li>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="5000"
              className="linkGroup"
            >
              <span className="groupTitle">TIMESHARE RENTALS</span>
              <li className="footerList flex">
                {/* <FiChevronRight className="icon" /> */}
                Find a Timeshare to Rent
              </li>

              <li className="footerList flex">
                {/* <FiChevronRight className="icon" /> */}
                Rent My Timeshare
              </li>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="6000"
              className="linkGroup"
            >
              <span className="groupTitle">TIMESHARES FOR SALE</span>
              <li className="footerList flex">
                {/* <FiChevronRight className="icon" /> */}
                Find Timeshares for Sale
              </li>
            </div>
          </div>
          {/* <div className="contactDiv flex">
          <div data-aos="fade-up" className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Booking Timeshare</h2>
          </div>
          <div className="inputDiv flex">
            <input
              data-aos="fade-up"
              type="text"
              placeholder="Enter Email Address"
            />
            <button data-aos="fade-up" className="btn flex" type="submit">
              SEND <FiSend classname="icon" />
            </button>
          </div>
        </div> */}
          <div
            className="footerDiv flex"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "1.2rem",
              fontWeight: "bold",
            }}
          >
            <FaEarthAsia style={{ marginRight: "8px" }} />
            <small> BEST TIMESHARE WEBSITE THEME </small>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
